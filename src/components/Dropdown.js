import React, {useState} from "react";
import '../css/Dropdown.css'


const Dropdown = () => {

    const [dropdownActive, setDropDownActive] = useState(false)
    const [dropdownItemActive, setDropdownItemActive] = useState('orderId')
    const [searchOrder, setSearchOrder] = useState('asc')
    const [dropdownData, setDropdownData] = useState([]);
  
  const clickHandler = (e) => {
     if (!dropdownActive) {
        setDropDownActive(true)
     } else{
        setDropDownActive(false)
     }
    // e.stopPropagation()
   };

//   render() 

    const isActive = dropdownActive ? "is-active" : null;
    const searchByText = {
      orderId: 'Order Id',
      customerName: 'Customer',
      item: 'Item',
      dropOffDate: 'Dropoff',
      service: 'Service',
      asc: 'up',
      desc: 'down',
    }
    
    const getData = async () => {
      const result = fetch('./data/searchByItems.json')
      const data = await result;
      
      const formatted = await data.json()

      setDropdownData(formatted)
      console.log(dropdownData)

    }
  
    getData();

    return (
      <div id="dropdown" onClick={clickHandler} className={`dropdown mb-2 ${isActive}`}>
        <div className="dropdown-trigger">
          <button
            className={"button drop-style"}
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>{`${searchByText[dropdownItemActive]}`}</span>
            <span className="icon is-small">
              <i className={`fas fa-angle-${searchByText[searchOrder]}`} aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a 
              href="#" 
              className={`dropdown-item ${dropdownItemActive === 'orderId' ? 'is-active' : null}`}
              onClick={() =>  setDropdownItemActive('orderId') }
              >
              Order Id{" "}
            </a>
            <a 
              href="#" 
              className={`dropdown-item ${dropdownItemActive === 'item' ? 'is-active' : null}`}
              onClick={ () => setDropdownItemActive('item') }
              > Item </a>
            <a href="#" 
              className={`dropdown-item ${dropdownItemActive === 'customerName' ? 'is-active' : null}`}
              onClick={() =>  setDropdownItemActive('customerName') }
               >
              {" "}
              Customer{" "}
            </a>
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'dropOffDate' ? 'is-active' : null}`}
              onClick={() =>  setDropdownItemActive('dropOffDate') }
              >
              {" "}
              Dropoff Date{" "}
            </a>
            <a href="#" className={`dropdown-item ${dropdownItemActive === 'service' ? 'is-active' : null}`}
              onClick={() =>  setDropdownItemActive('service') }
            >
              {" "}
              Service{" "}
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className={`dropdown-item ${searchOrder === 'asc' ? 'is-active' : null}`}
              onClick={() =>  setSearchOrder('asc') }
            >
              {" "}
              ascending{" "}
            </a>
            <a href="#" className={`dropdown-item ${searchOrder === 'desc' ? 'is-active' : null}`}
              onClick={() =>  setSearchOrder('desc') }
            >
              {" "}
              descending{" "}
            </a>
          </div>
        </div>
      </div>
    );
//   }
}

export default Dropdown;
