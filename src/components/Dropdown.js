import React from "react";

class Dropdown extends React.Component {

   state = {
       dropdownActive: true
   }

  showDropdown = () => {
      if (!this.state.dropdownActive){
        this.setState({
            dropdownActive:true
        })
      } else {
          this.setState({
              dropdownActive: false
          })
      }
  };

  clickHandler = () => {
     this.showDropdown();
  };

  render() {

    const isActive = this.state.dropdownActive ? "is-active" : null;

    return (
      <div id="dropdown" className={`dropdown mb-2 ${isActive}`}>
        <div className="dropdown-trigger">
          <button
            onClick={this.clickHandler}
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Search By</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Order Id{" "}
            </a>
            <a className="dropdown-item"> Item </a>
            <a href="#" className="dropdown-item is-active">
              {" "}
              Customer{" "}
            </a>
            <a href="#" className="dropdown-item">
              {" "}
              Dropoff Date{" "}
            </a>
            <a href="#" className="dropdown-item">
              {" "}
              Service{" "}
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              {" "}
              descending{" "}
            </a>
            <a href="#" className="dropdown-item">
              {" "}
              ascending{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
