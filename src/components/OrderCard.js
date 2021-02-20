import React from 'react'

const OrderCard = ({order}) => {
  const {
    orderId,
    itemDescription,
    customerName,
    phoneNumber,
    service,
    estimate,
    notes,
    timeDroppedOff,
    timeEstimatedPickup,
    employeeName,
    rushOrder,
  } = order;

    return (
        <div className="container">
        <div className="box content">
          <p className="is-size-4">
            <span className="fredoka">{itemDescription} </span>
            {rushOrder ?  <span className="tag is-small is-danger"> Rush </span> : null}
            <span className="tag is-large is-darker is-link is-pulled-right">
              #{orderId}
            </span>
          </p>
          <p>
            <strong>
              <i className="fas fa-user"></i>
            </strong>{" "}
            {customerName}
          </p>
          <p>
            <strong>
              <i className="fas fa-phone">&nbsp;</i>
            </strong>
            {phoneNumber}
          </p>
          <p>
            <strong>Service(s):</strong>{" "}
            <span className="tag is-info">{service}</span>
        
          </p>
          <p>
            <strong>Dropped off:</strong> {timeDroppedOff}
          </p>
          <p>
            <strong>Expected by:</strong> {timeEstimatedPickup}
          </p>

          <p>
            <strong>Tech:</strong> {employeeName}
          </p>
          <p>
            <strong>Est. Cost:</strong> ${estimate}
          </p>
          <p>
            <strong>Notes:</strong> {notes}
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