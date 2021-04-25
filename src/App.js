import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import _ from "lodash";
import { useSelector } from "react-redux";
import CurrentOrders from "./components/CurrentOrders";
import CompletedOrders from "./components/CompletedOrders";
import ArchivedOrders from "./components/ArchivedOrders";
import NewOrder from "./components/NewOrder";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SearchTool from "./components/SearchTool";
import Nav from "./components/Nav";
import OrderCard from "./components/OrderCard";
import Form from "./components/Form";
import EmptyOrderPage from "./components/EmptyOrderPage";
import UpdateOrderModal from "./components/UpdateOrderModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

const App = () => {
  //redux store
  const orders = useSelector((state) => state.orders);

  const searchTerm = useSelector((state) => state.searchOrders.searchTerm);

  const sortBy = useSelector((state) => state.searchOrders.sortBy);

  const sortDir = useSelector((state) => state.searchOrders.sortDir);

  const newOrderId = () => {
    return Math.max(...orders.map((order) => order.orderId)) + 1;
  };

  const updateOrderModalDisplay = useSelector(
    (state) => state.modals.updateOrder.modalShow
  );
  const deleteOrderModalDisplay = useSelector(
    (state) => state.modals.deleteOrder.modalShow
  );

  const cardDisplayLogic = (o) => ({
    current: !o.deleted && !o.completed,
    completed: o.completed && !o.deleted && !o.archived,
    archived: o.archived && !o.deleted,
  });

  const showCardsLogic = (status, orders) => {
    const sortedRecords = _.sortBy(orders, [
      function (o) {
        return o[sortBy];
      },
    ]);

    if (sortDir === "desc") sortedRecords.reverse();

    let re = new RegExp(`${searchTerm}`, "gi");

    let textSearchedRecords = sortedRecords.filter((i) =>
      re.test(i[sortBy]) ? i : null
    );

    const ordersEmptyBin = textSearchedRecords.filter((order) => {
      return cardDisplayLogic(order)[status] ? order : null;
    }).length;

    const listOrders = textSearchedRecords.map((order, i) => {
      return cardDisplayLogic(order)[status] ? (
        <OrderCard key={i} order={order} />
      ) : null;
    });

    return ordersEmptyBin ? listOrders : <EmptyOrderPage status={status} />;
  };

  const toggleUpdateOrderModalDisplay = updateOrderModalDisplay ? (
    <UpdateOrderModal />
  ) : null;

  const toggleDeleteConfirmModal = deleteOrderModalDisplay ? (
    <DeleteConfirmModal />
  ) : null;

  return (
    <>
      {toggleDeleteConfirmModal}
      {toggleUpdateOrderModalDisplay}
      <Header />

      <Main>
        <BrowserRouter>
          <Nav />
          <SearchTool />

          <Switch>
            <Route exact path="/">
              <CurrentOrders>{showCardsLogic("current", orders)}</CurrentOrders>
            </Route>

            <Route path="/completed">
              <CompletedOrders>
                {showCardsLogic("completed", orders)}
              </CompletedOrders>
            </Route>

            <Route path="/archived">
              <ArchivedOrders>
                {showCardsLogic("archived", orders)}
              </ArchivedOrders>
            </Route>

            <Route path="/new">
              <NewOrder>
                <Form newOrderId={newOrderId} />
              </NewOrder>
            </Route>
          </Switch>
        </BrowserRouter>
      </Main>
      <Footer />
    </>
  );
};

export default App;
