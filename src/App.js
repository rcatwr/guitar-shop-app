import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
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
    showSearchOptions: false,
    orders: [],
  };

  componentDidMount() {
    this.setState({ orders });
  }

  formSubmitted = (newOrder) => {
    //callback spreads in the new order in Form
    this.setState({ orders: [...this.state.orders, newOrder] });
  };

  orderStatusUpdate = (id, trigger) => {
    if (trigger === "deleted" && !this.state.confirmDeleteModalShow) {
      return this.openConfirmDeleteModal(id);
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

  updateOrderModal = () => {
    this.setState({ updateOrderModalShow: true });
  };

  newOrderId = () => {
    return Math.max(...this.state.orders.map((order) => order.orderId)) + 1;
  };

  render() {
    const toggleModalDisplay = this.state.modalShow ? (
      <Modal>
        {" "}
        <Form formSubmitted={this.formSubmitted} closeModal={this.closeModal} />
      </Modal>
    ) : null;

    const toggleDeleteConfirmModal = this.state.confirmDeleteModalShow ? (
      <Modal>
        <div class="notification">
          <button class="delete" onClick={()=>this.setState({confirmDeleteModalShow:false})}></button>
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
            onClick={()=>this.setState({confirmDeleteModalShow:false})}
            >
            Cancel
          </button>
        </div>
      </Modal>
    ) : null;

    return (
      <>
        {toggleDeleteConfirmModal}
        <Header />

        <Main showSearchOptions={this.state.showSearchOptions}>
          <BrowserRouter>
            <Nav />

            <Switch>
              <Route exact path="/">
                <CurrentOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) =>
                    !order.deleted && !order.completed ? (
                      <OrderCard
                        key={i}
                        order={order}
                        orderStatusUpdate={this.orderStatusUpdate}
                      />
                    ) : null
                  )}
                </CurrentOrders>
              </Route>

              <Route path="/completed">
                <CompletedOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) =>
                    order.completed && !order.deleted && !order.archived ? (
                      <OrderCard
                        key={i}
                        order={order}
                        orderStatusUpdate={this.orderStatusUpdate}
                      />
                    ) : null
                  )}
                </CompletedOrders>
              </Route>

              <Route path="/archived">
                <ArchivedOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) =>
                    order.archived && !order.deleted ? (
                      <OrderCard
                        key={i}
                        order={order}
                        orderStatusUpdate={this.orderStatusUpdate}
                      />
                    ) : null
                  )}
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
