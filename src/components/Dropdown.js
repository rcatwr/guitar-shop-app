import React from 'react'

const Dropdown = () => {

    return(
        <div id="dropdown" className="dropdown mb-2">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Search Orders</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">Order Id </a>
            <a className="dropdown-item"> Item </a>
            <a href="#" className="dropdown-item is-active"> Customer </a>
            <a href="#" className="dropdown-item"> Dropoff Date </a>
            <a href="#" className="dropdown-item"> Service </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item"> descending </a>
            <a href="#" className="dropdown-item"> ascending </a>
          </div>
        </div>
      </div>
  
    )
}

export default Dropdown;