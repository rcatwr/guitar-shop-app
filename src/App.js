import React from "react";
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
import orders from "./data/orders.json";

class App extends React.Component {
  state = {
    confirmDeleteModalShow: false,
    updateOrderModalShow: false,
    orderConfirmDelete: {},
    orderToUpdate: {},
    showSearchOptions: false,
    sortBy: "orderId",
    sortDir: "asc",
    searchTerm: "",
    orders: [],
    cardStatusTotals: {
      current: "",
      completed: "",
      archived: "",
    },
  };

  componentDidMount() {
    this.setState({ orders });
  }

  formSubmitted = (newOrder, isUpdate) => {
    //callback spreads in the new order in Form
    console.log('NEW ORDER:', newOrder, 'order id:', newOrder.orderId)
    if(isUpdate){
      // filter the order out
      const updatedList = this.state.orders.filter(order => order.orderId !== newOrder.orderId)
      console.log('updated:' , updatedList)
      this.setState({orders: [...updatedList, newOrder]});
    } else{
      this.setState({ orders: [...this.state.orders, newOrder] });

    }

  };

  orderStatusUpdate = (id, trigger) => {
    if (trigger === "deleted" && !this.state.confirmDeleteModalShow) {
      return this.openConfirmDeleteModal(id);
    }
    // open the order update modal in App if update button is selected in orderCard
    // passes trigger and order id

    if (trigger === "updateOrder") {
      this.updateOrderModal(true);
      this.updateOrderFormDisplay(id);
      // use this for opening the order update modal
    }

    const updatedOrders = this.state.orders.map((order) =>
      order.orderId === id ? { ...order, [trigger]: true } : order
    );

    this.setState({
      orders: updatedOrders,
      confirmDeleteModalShow: false,
    });
  };

  openConfirmDeleteModal = (id) => {
    this.setState({
      orderConfirmDelete: this.state.orders
        .filter((order) => order.orderId === id)
        .pop(),
    });

    this.setState({ confirmDeleteModalShow: true });
  };

  updateOrderModal = (bool) => {
    this.setState({ updateOrderModalShow: bool ? true : false }) ;
  };

  

  updateOrderFormDisplay = (id) => {
    //find() callback
    console.log("this id:", id);

    function isOrderId(order) {
      return order.orderId === id;
    }
    // sorts through and finds the object in orders

    const orderToUpdate = this.state.orders.find(isOrderId);
    // pass to props

    console.log("order to update", orderToUpdate);
    //return <Form updateOrderDetails={orderToUpdate} />;
    this.setState({ orderToUpdate })
  };

  newOrderId = () => {
    return Math.max(...this.state.orders.map((order) => order.orderId)) + 1;
  };

  searchByText = (text) => {
    this.setState({ searchTerm: text.toString().toLowerCase().trim() });
  };

  sortCardOrder = (sortBy) => {
    this.setState({ sortBy });
  };

  sortCardDir = (sortDir) => {
    this.setState({ sortDir });
  };

  countCardStatus = (orders) => {
    const cardDisplayLogic = (o) => ({
      current: !o.deleted && !o.completed,
      completed: o.completed && !o.deleted && !o.archived,
      archived: o.archived && !o.deleted,
    });

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

  showCardsLogic = (status, orders) => {
    const cardDisplay = (o) => ({
      current: !o.deleted && !o.completed,
      completed: o.completed && !o.deleted && !o.archived,
      archived: o.archived && !o.deleted,
    });

    let orderByval = this.state.sortBy;

    const sortedRecords = _.sortBy(orders, [
      function (o) {
        return o[orderByval];
      },
    ]);

    if (this.state.sortDir === "desc") sortedRecords.reverse();

    let re = new RegExp(`${this.state.searchTerm}`, "gi");

    let textSearchedRecords = sortedRecords.filter((i) =>
      re.test(i[this.state.sortBy]) ? i : null
    );

    const ordersEmptyBin = textSearchedRecords.filter((order) => {
      return cardDisplay(order)[status] ? order : null;
    });

    const listOrders = textSearchedRecords.map((order, i) => {
      return cardDisplay(order)[status] ? (
        <OrderCard
          key={i}
          order={order}
          orderStatusUpdate={this.orderStatusUpdate}
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

  render() {

    const toggleUpdateOrderModalDisplay = this.state.updateOrderModalShow ? (
      <Modal><Form orderToUpdate={this.state.orderToUpdate} updateOrderModal ={this.updateOrderModal} formSubmitted={this.formSubmitted} /></Modal>
    ) : null;

    const toggleDeleteConfirmModal = this.state.confirmDeleteModalShow ? (
      <Modal>
        {/* put the notification into its own component -- and get it out of the main app */}
        <div className="notification">
          <button
            className="delete"
            onClick={() => this.setState({ confirmDeleteModalShow: false })}
          ></button>
          <p className>Are you sure you want to delete: </p>
          <p className="is-size-4 mb-5">
            <span className="fredoka">
              {this.state.orderConfirmDelete.itemDescription}
            </span>
            <span className="tag is-large is-darker is-link is-pulled-right">
              # {this.state.orderConfirmDelete.orderId}
            </span>
          </p>
          <button
            id="deleted"
            onClick={(e) =>
              this.orderStatusUpdate(
                this.state.orderConfirmDelete.orderId,
                e.target.id
              )
            }
            className="button is-danger is-small is-dark"
          >
            Delete
          </button>{" "}
          <button
            className="button is-primary is-small is-light"
            onClick={() => this.setState({ confirmDeleteModalShow: false })}
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

        <Main showSearchOptions={this.state.showSearchOptions}>
          <BrowserRouter>
            <Nav orderStatus={this.countCardStatus(this.state.orders)} />
           <SearchTool
              sortCardOrder={this.sortCardOrder}
              sortCardDir={this.sortCardDir}
              searchByText={this.searchByText}
            />
           
            <Switch>
              <Route exact path="/">
                <CurrentOrders>
                  {/* <SearchTool /> */}

                  {this.showCardsLogic("current", this.state.orders)}
                </CurrentOrders>
              </Route>

              <Route path="/completed">
                <CompletedOrders>
                  {/* <SearchTool /> */}

                  {this.showCardsLogic("completed", this.state.orders)}
                </CompletedOrders>
              </Route>

              <Route path="/archived">
                <ArchivedOrders>
                  {/* <SearchTool /> */}

                  {this.showCardsLogic("archived", this.state.orders)}
                </ArchivedOrders>
              </Route>

              <Route path="/new">
                <NewOrder>
                  <Form
                    formSubmitted={this.formSubmitted}
                    newOrderId={this.newOrderId}
                  />
                </NewOrder>
              </Route>
            </Switch>
          </BrowserRouter>
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
