import React from 'react'

const OrderCard = () => {
    return (
        <div className="container">
        <div className="box content">
          <p className="is-size-4">
            <span className="fredoka">1978 Fender Telecaster </span>
            <span className="tag is-large is-darker is-link is-pulled-right">
              #45
            </span>
          </p>
          <p>
            <strong>
              <i className="fas fa-user"></i>
            </strong>{" "}
            Bob Smith
          </p>
          <p>
            <strong>
              <i className="fas fa-phone">&nbsp;</i>
            </strong>
            555-444-5555
          </p>
          <p>
            <strong>Service(s):</strong>{" "}
            <span className="tag is-info">Setup</span>
            <span className="tag is-info">Electronics</span>
          </p>
          <p>
            <strong>Dropped off:</strong> Dec 12, 2020
          </p>
          <p>
            <strong>Expected by:</strong> Dec 14, 2020
          </p>

          <p>
            <strong>Tech:</strong> Frankie Bones
          </p>
          <p>
            <strong>Est. Cost:</strong> $45.00
          </p>
          <p>
            <strong>Notes:</strong> Needs a basic setup -- make sure to
            check the action!
          </p>

          <button className="button is-danger is-light is-pulled-right">
            Delete
          </button>
          <button id="updateOrder" className="button is-primary is-light">
            Update Info
          </button>
        </div>
      </div>
    )
}

export default OrderCard;