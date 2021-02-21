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
    modalShow: false,
    showSearchOptions: false,
    orders: [],
  };

  componentDidMount() {
    this.setState({ orders });
  }

  formSubmitted = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder] });
  };

  openNewOrderModal = () => {
    this.setState({ modalShow: true });
  };

  closeModal = () => {
    this.setState({ modalShow: false });
  };

  render() {
    const toggleModalDisplay = this.state.modalShow ? (
      <Modal>
        {" "}
        <Form formSubmitted={this.formSubmitted} closeModal={this.closeModal} />
      </Modal>
    ) : null;

    return (
      <>
        {toggleModalDisplay}
        <Header />

        <Main showSearchOptions={this.state.showSearchOptions}>
          <BrowserRouter>
            <Nav />

            <Switch>
              <Route exact path="/">
                <CurrentOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) => (
                    <OrderCard key={i} order={order} />
                  ))}
                </CurrentOrders>
              </Route>

              <Route path="/completed">
                <CompletedOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) => (
                    <OrderCard key={i} order={order} />
                  ))}
                </CompletedOrders>
              </Route>

              <Route path="/archived">
                <ArchivedOrders>
                  <SearchTool />
                  {this.state.orders.map((order, i) => (
                    <OrderCard key={i} order={order} />
                  ))}
                </ArchivedOrders>
              </Route>

              <Route path="/new">
                <NewOrder>
                  <Form formSubmitted={this.formSubmitted} />
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
