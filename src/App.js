import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import _ from "lodash";
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
//import ordersData from "./data/orders.json";
import { useSelector } from "react-redux";
import UpdateOrderModal from "./components/UpdateOrderModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

const App = () => {
  const [confirmDeleteModalShow, setConfirmDeleteModalShow] = useState(false);
  // const [updateOrderModalShow, setUpdateOrderModalShow] = useState(false);
  const [orderConfirmDelete, setOrderConfirmDelete] = useState({});
  const [orderToUpdate, setOrderToUpdate] = useState({});
  const [sortBy, setSortBy] = useState("orderId");
  const [sortDir, setSortDir] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  // need to get rid of this and use the redux store
  const [ordersLocalState, setOrders] = useState([]);

  //redux store
  const orders = useSelector((state) => state.orders);

  const newOrderId = () => {
    return Math.max(...orders.map((order) => order.orderId)) + 1;
  };

  const updateOrderModalDisplay = useSelector(
    (state) => state.modals.updateOrder.modalShow
  );
  const deleteOrderModalDisplay = useSelector(
    (state) => state.modals.deleteOrder.modalShow
  );

  // put this into the modal component instead of here
  const deleteOrderDisplay = useSelector(
    (state) => state.modals.deleteOrder.order
  );

  // make selectors here for all kindsa stuff

  //useEffect(() => {
  //  setOrders(orders);
  // }, []);

  // this callback handles two different form submissions
  // 1) if an order is a 'newOrder'
  // 2) if the order is being updated 'isUpdate'

  // const formSubmitted = (newOrder, isUpdate) => {
  //    callback spreads in the new order in Form

  //   if (isUpdate) {
  //     // filter the order out
  //     const updatedList = orders.filter(
  //       (order) => order.orderId !== newOrder.orderId
  //     );

  //     // ...and pop it back in!
  //     setOrders([...updatedList, newOrder]);
  //   } else {
  //     // add the new order in
  //     setOrders([...orders, newOrder]);
  //   }
  // };

  const orderStatusUpdate = (id, trigger) => {
    // this handles the 'delete' button
    //if (trigger === "deleted" && !confirmDeleteModalShow) {
    // return openConfirmDeleteModal(id);
    // }
    // open the order update modal in App if update button is selected in orderCard
    // passes trigger and order id
    // this handles the update sequence
    //if (trigger === "updateOrder") {
    // updateOrderModal(true);
    // updateOrderFormDisplay(id);
    // use this for opening the order update modal
    // }
    // this map method goes throught the orders object in state
    // uses a ternary operator
    // does the id of the order match the order id of the order
    // clicked on the interface?
    // it's dynamic, so trigger could be 'completed','archived', 'deleted'
    //const updatedOrders = orders.map((order) =>
    // order.orderId === id ? { ...order, [trigger]: true } : order
    // );
    // setOrders(updatedOrders);
    // setConfirmDeleteModalShow(false);
  };

  // this method grabs the order from state to
  // display on the modal and prepare the
  // user to delete optionally

  // const openConfirmDeleteModal = (id) => {
  // get the order to delete
  // setOrderConfirmDelete(orders.find((o) => o.orderId === id));
  // show the modal
  //  setConfirmDeleteModalShow(true);
  // };

  // put this into a redux slice!!
  // this just triggers the modal display
  // const updateOrderModal = (bool) => {
  // setUpdateOrderModalShow(bool | false);
  // };

  //selector!!!
  // const updateOrderFormDisplay = (id) => {
  // sorts through and finds the order we need to update in orders
  //   setOrderToUpdate(orders.find((o) => o.orderId === id));
  // pass this bit of state to props
  // };

  // this gives us the order number for the next order

  const searchByText = (text) => {
    setSearchTerm(text.toLowerCase().trim());
  };

  const sortCardOrder = (sortBy) => {
    setSortBy(sortBy);
  };

  const sortCardDir = (sortDir) => {
    setSortDir(sortDir);
  };

  const cardDisplayLogic = (o) => ({
    current: !o.deleted && !o.completed,
    completed: o.completed && !o.deleted && !o.archived,
    archived: o.archived && !o.deleted,
  });

  // this is strictly for the nav bar component!!
  // handles the logic for making the little numbers appear
  // on the tabs
  // returns an object

  const countCardStatus = (orders) => {
    const ordersCount = (stat) =>
      orders.filter((order) => {
        return cardDisplayLogic(order)[stat] ? order : null;
      }).length;

    return {
      current: ordersCount("current"),
      completed: ordersCount("completed"),
      archived: ordersCount("archived"),
    };
  };

  const showCardsLogic = (status, orders) => {
    let orderByVal = sortBy;

    const sortedRecords = _.sortBy(orders, [
      function (o) {
        return o[orderByVal];
      },
    ]);

    if (sortDir === "desc") sortedRecords.reverse();

    let re = new RegExp(`${searchTerm}`, "gi");

    let textSearchedRecords = sortedRecords.filter((i) =>
      re.test(i[sortBy]) ? i : null
    );

    const ordersEmptyBin = textSearchedRecords.filter((order) => {
      return cardDisplayLogic(order)[status] ? order : null;
    });

    const listOrders = textSearchedRecords.map((order, i) => {
      return cardDisplayLogic(order)[status] ? (
        <OrderCard
          key={i}
          order={order}
          // orderStatusUpdate={orderStatusUpdate}
        />
      ) : null;
    });

    return ordersEmptyBin.length ? (
      listOrders
    ) : (
      <div className="box is-justify-content-center is-flex p-5">
        <p className="is-size-4 fredoka">
          <i className="fas fa-hand-point-right has-text-info"></i> There are no{" "}
          {status} orders!
        </p>
      </div>
    );
  };

  const toggleUpdateOrderModalDisplay = updateOrderModalDisplay ? (
    <UpdateOrderModal
    //orderToUpdate={updateOrderDisplay}
    //updateOrderModal={updateOrderModal}
    // formSubmitted={formSubmitted}
    />
  ) : null;

  const toggleDeleteConfirmModal = deleteOrderModalDisplay ? (
    <DeleteConfirmModal
      orderConfirmDelete={deleteOrderDisplay}
      orderStatusUpdate={orderStatusUpdate}
      // setConfirmDeleteModalShow={setConfirmDeleteModalShow}
    />
  ) : null;

  return (
    <>
      {toggleDeleteConfirmModal}
      {toggleUpdateOrderModalDisplay}
      <Header />

      <Main>
        <BrowserRouter>
          <Nav orderStatus={countCardStatus(orders)} />
          <SearchTool
            sortCardOrder={sortCardOrder}
            sortCardDir={sortCardDir}
            searchByText={searchByText}
          />

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
                <Form
                  // formSubmitted={formSubmitted}
                  newOrderId={newOrderId}
                />
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
