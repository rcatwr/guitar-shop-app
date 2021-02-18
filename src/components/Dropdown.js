import React, {useState} from "react";

const Dropdown = () => {

    const [dropdownActive, setDropDownActive] = useState(false)
    const [dropdownItemActive, setDropDownItemActive] = useState('orderId')
    const [searchOrder, setSearchOrder] = useState('asc')
//    state = {
//        dropdownActive: true
//    }

//   showDropdown = () => {
//       if (!this.state.dropdownActive){
//         this.setState({
//             dropdownActive:true
//         })
//       } else {
//           this.setState({
//               dropdownActive: false
//           })
//       }
//   };
  
  const clickHandler = () => {
     if (!dropdownActive) {
        setDropDownActive(true)
     } else{
         setDropDownActive(false)
     }
   };

//   render() {

    const isActive = dropdownActive ? "is-active" : null;
    

    return (
      <div id="dropdown" onClick={clickHandler} className={`dropdown mb-2 ${isActive}`}>
        <div className="dropdown-trigger">
          <button
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
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'orderId' ? 'is-active' : null}`}>
              Order Id{" "}
            </a>
            <a className="dropdown-item"> Item </a>
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'customerName' ? 'is-active' : null}`}>
              {" "}
              Customer{" "}
            </a>
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'dropOffDate' ? 'is-active' : null}`}>
              {" "}
              Dropoff Date{" "}
            </a>
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'Service' ? 'is-active' : null}`}>
              {" "}
              Service{" "}
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className={`dropdown-item ${searchOrder === 'desc' ? 'is-active' : null}`}>
              {" "}
              descending{" "}
            </a>
            <a href="#" className={`dropdown-item ${searchOrder === 'asc' ? 'is-active' : null}`}>
              {" "}
              ascending{" "}
            </a>
          </div>
        </div>
      </div>
    );
//   }
}

export default Dropdown;
