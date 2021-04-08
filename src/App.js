import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import _ from "lodash";
import CurrentOrders from "./components/CurrentOrders";
import CompletedOrders from "./components/CompletedOrders";
import ArchivedOrders from "./components/ArchivedOrders";
import NewOrder from "./components/NewOrder";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SearchTool from "./components/SearchTool";
import Nav from "./components/Nav";
import OrderCard from "./components/OrderCard";
import Form from "./components/Form";
import ordersData from "./data/orders.json";

const App = () => {
  const [confirmDeleteModalShow, setConfirmDeleteModalShow] = useState(false);
  const [updateOrderModalShow, setUpdateOrderModalShow] = useState(false);
  const [orderConfirmDelete, setOrderConfirmDelete] = useState({});
  const [orderToUpdate, setOrderToUpdate] = useState({});
  //const [showSearchOptions, setShowSearchOptions] = useState(false);
  const [sortBy, setSortBy] = useState("orderId");
  const [sortDir, setSortDir] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState([]);
  // const [cardStatusTotals, useCardStatusTotals] = useState(
  //   {current: "",
  //   completed: "",
  //     archived: "",});

  useEffect(() => {
    setOrders(ordersData);
  }, []);

  // this callback handles two different form submissions
  // 1) if an order is a 'newOrder'
  // 2) if the order is being updated 'isUpdate'
  const formSubmitted = (newOrder, isUpdate) => {
    //callback spreads in the new order in Form
    console.log("NEW ORDER:", newOrder, "order id:", newOrder.orderId);
    if (isUpdate) {
      // filter the order out
      const updatedList = orders.filter(
        (order) => order.orderId !== newOrder.orderId
      );
      console.log("updated:", updatedList);
      // ...and pop it back in!
      //this.setState({ orders: [...updatedList, newOrder] });
      setOrders([...updatedList, newOrder]);
    } else {
      // add the new order in
      // this.setState({ orders: [...this.state.orders, newOrder] });
      setOrders([...orders, newOrder]);
    }
  };

  const orderStatusUpdate = (id, trigger) => {
    // this handles the 'delete' button
    if (trigger === "deleted" && !confirmDeleteModalShow) {
      return openConfirmDeleteModal(id);
    }
    // open the order update modal in App if update button is selected in orderCard
    // passes trigger and order id

    // this handles the update sequence
    if (trigger === "updateOrder") {
      updateOrderModal(true);
      updateOrderFormDisplay(id);
      // use this for opening the order update modal
    }

    // this map method goes throught the orders object in state
    // uses a ternary operator
    // does the id of the order match the order id of the order
    // clicked on the interface?
    // it's dynamic, so trigger could be 'completed','archived', 'deleted'

    const updatedOrders = orders.map((order) =>
      order.orderId === id ? { ...order, [trigger]: true } : order
    );

    //this.setState({
    // orders: updatedOrders,
    // confirmDeleteModalShow: false,
    //});
    setOrders(updatedOrders);
    setConfirmDeleteModalShow(false);
  };

  // this method grabs the order from state to
  // display on the modal and prepare the
  // user to delete optionally

  const openConfirmDeleteModal = (id) => {
    // get the order to delete
    // this.setState({
    //   orderConfirmDelete: this.state.orders.find((o) => o.orderId === id),
    // });
    setOrderConfirmDelete(orders.find((o) => o.orderId === id));
    // show the modal
    //this.setState({ confirmDeleteModalShow: true });
    setConfirmDeleteModalShow(true);
  };

  // this just triggers the modal display
  const updateOrderModal = (bool) => {
    //this.setState({ updateOrderModalShow: bool ? true : false });
    setUpdateOrderModalShow(bool | false);
  };

  const updateOrderFormDisplay = (id) => {
    // sorts through and finds the order we need to update in orders
    setOrderToUpdate(orders.find((o) => o.orderId === id));
    // pass this bit of state to props
    // this.setState({ orderToUpdate });
  };

  // this gives us the order number for the next order
  const newOrderId = () => {
    return Math.max(...orders.map((order) => order.orderId)) + 1;
  };

  const searchByText = (text) => {
    // this.setState({ searchTerm: text.toString().toLowerCase().trim() });
    setSearchTerm(text.toLowerCase().trim());
  };

  const sortCardOrder = (sortBy) => {
    //this.setState({ sortBy });
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
          orderStatusUpdate={orderStatusUpdate}
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

  const toggleUpdateOrderModalDisplay = updateOrderModalShow ? (
    <Modal>
      <Form
        orderToUpdate={orderToUpdate}
        updateOrderModal={updateOrderModal}
        formSubmitted={formSubmitted}
      />
    </Modal>
  ) : null;

  const toggleDeleteConfirmModal = confirmDeleteModalShow ? (
    <Modal>
      {/* put the notification into its own component -- and get it out of the main app */}
      <div className="notification">
        <button
          className="delete"
          onClick={() => setConfirmDeleteModalShow(false)}
        ></button>
        <p className>Are you sure you want to delete: </p>
        <p className="is-size-4 mb-5">
          <span className="fredoka">{orderConfirmDelete.itemDescription}</span>
          <span className="tag is-large is-darker is-link is-pulled-right">
            # {orderConfirmDelete.orderId}
          </span>
        </p>
        <button
          id="deleted"
          onClick={(e) =>
            orderStatusUpdate(orderConfirmDelete.orderId, e.target.id)
          }
          className="button is-danger is-small is-dark"
        >
          Delete
        </button>{" "}
        <button
          className="button is-primary is-small is-light"
          onClick={() => setConfirmDeleteModalShow(false)}
        >
          Cancel
        </button>
      </div>
    </Modal>
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
              <CurrentOrders>
                {/* <SearchTool /> */}

                {showCardsLogic("current", orders)}
              </CurrentOrders>
            </Route>

            <Route path="/completed">
              <CompletedOrders>
                {/* <SearchTool /> */}

                {showCardsLogic("completed", orders)}
              </CompletedOrders>
            </Route>

            <Route path="/archived">
              <ArchivedOrders>
                {/* <SearchTool /> */}

                {showCardsLogic("archived", orders)}
              </ArchivedOrders>
            </Route>

            <Route path="/new">
              <NewOrder>
                <Form formSubmitted={formSubmitted} newOrderId={newOrderId} />
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
