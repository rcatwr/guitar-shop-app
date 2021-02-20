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
import orders from './data/orders.json';

class App extends React.Component {
  state = {
    modalShow: false,
    showSearchOptions: false,
    orders: [],
  };

  componentDidMount(){
    this.setState({orders})

  }

  formSubmitted = (newOrder) => {
     this.setState({ orders: [...this.state.orders, newOrder]})
     
  }

  openNewOrderModal = () =>{
    this.setState({modalShow: true})
  }

  closeModal = () => {
    this.setState({modalShow: false})
  }

  render() {
  

    const toggleModalDisplay = this.state.modalShow ? <Modal> <Form formSubmitted={this.formSubmitted} closeModal ={this.closeModal}/></Modal> : null;
 
    return (
      <>
        
        {toggleModalDisplay}
        <Header />
        
        <Main showSearchOptions={this.state.showSearchOptions}>
          <Nav openNewOrderModal={this.openNewOrderModal}/>
          <div className="container is-flex is-justify-content-flex-end">
            {/* <!-- Left side --> */}
            <SearchTool />
            
          </div>

          {this.state.orders.map(order => <OrderCard order={order}/>)}
          
        </Main>
        <Footer />
      </>
    );
  }
}

export default App;
