import React from "react";
import "./css/App.css";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SearchTool from "./components/SearchTool";
import Nav from "./components/Nav";
import OrderCard from "./components/OrderCard";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    modalShow: false,
    showSearchOptions: false,
    orders: [],
  };

  formSubmitted = (newOrder) => {
     this.setState({ orders: [...this.state.orders, newOrder]})
     
  }

  render() {
    console.log(this.state.orders)

    const toggleModalDisplay = this.state.modalShow ? <Modal /> : null;
   // console.log(this.state.orders)
    return (
      <>
        
        {toggleModalDisplay}
        <Header />
        
        <Main showSearchOptions={this.state.showSearchOptions}>
          <Nav />
          <div className="container is-flex is-justify-content-flex-end">
            {/* <!-- Left side --> */}
            <SearchTool />
            
          </div>

          <OrderCard />
          <Form formSubmitted={this.formSubmitted}/>
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
