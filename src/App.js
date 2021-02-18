import React from 'react';
import './css/App.css';
import Modal from './components/Modal';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

class App extends React.Component {
  state = {
    modalShow: false,
    showSearchOptions: false
  };

  render() {
    const toggleModalDisplay = this.state.modalShow ? <Modal /> : null;

    return (
      <>
        {toggleModalDisplay}
        <Header />
        <Main showSearchOptions={this.state.showSearchOptions}/>
        <Footer />
      </>
    );
  }
}

export default App;
