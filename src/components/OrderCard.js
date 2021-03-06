import React from "react";
import moment from "moment";

const OrderCard = ({ order, orderStatusUpdate }) => {
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
    completed,
    archived,
  } = order;

  const handleClick = (e) => {
    orderStatusUpdate(orderId, e.target.id);
  };

  const orderStatus = completed ? "archive" : "complete";

  return (
    <div className="container">
      <div className="box content">
        <p className="is-size-4">
          <span className="fredoka">{itemDescription} </span>
          {rushOrder ? (
            <span className="tag is-small is-danger"> Rush </span>
          ) : null}
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
          <strong>Dropped off:</strong>{" "}
          {moment(timeDroppedOff).format("dddd, MMMM Do YYYY")}
        </p>
        <p>
          <strong>Expected by:</strong>{" "}
          {moment(timeEstimatedPickup).format("dddd, MMMM Do YYYY")}
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

        {!archived ? (
          <button
            id={`${orderStatus}d`}
            onClick={handleClick}
            className={`button is-${
              orderStatus === "complete" ? "success" : "warning"
            } is-dark`}
          >
            {orderStatus.charAt(0).toUpperCase()}
            {orderStatus.slice(1)}
          </button>
        ) : null}

        <button id="updateOrder" className="button is-primary is-light">
          Update Info
        </button>

        <button
          id="deleted"
          className="button is-danger is-light is-pulled-right"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
