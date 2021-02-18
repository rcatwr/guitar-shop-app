import React from 'react';
import './css/App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  state = {
    modalShow: true,
  };

  render() {
    const toggleModalDisplay = this.state.modalShow ? <Modal /> : null;

    return (
      <>
        {toggleModalDisplay}
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
