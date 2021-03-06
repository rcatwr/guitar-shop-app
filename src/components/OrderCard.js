import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleUpdateOrderModal,
  toggleDeleteOrderModal,
} from "../redux/modalDisplaySlice";
import { archiveOrder, completeOrder } from "../redux/orderSlice";
import moment from "moment";

const OrderCard = ({ order }) => {
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

  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.id === "updateOrder") {
      dispatch(toggleUpdateOrderModal(order));
      return;
    }
    if (e.target.id === "deleted") {
      dispatch(toggleDeleteOrderModal(order));
      return;
    }
    if (e.target.id === "status" && completed) {
      dispatch(archiveOrder(orderId));
    } else {
      dispatch(completeOrder(orderId));
    }
    // send 'updateOrder' -- the id to the main App
    // orderStatusUpdate(orderId, e.target.id);
  };

  //const orderStatus = completed ? "archive" : "complete";

  return (
    <div className="container">
      <div className="box content">
        <span className="tag is-large has-background-grey has-text-light is-pulled-right">
          #{orderId}{" "}
        </span>

        <p className="is-size-4">
          <span className="fredoka">{itemDescription} </span>
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
          {rushOrder ? (
            <span
              style={{ marginLeft: "3px" }}
              className="tag is-danger has-text-danger-light"
            >
              {" "}
              RUSH!{" "}
            </span>
          ) : null}
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
            id="status"
            onClick={handleClick}
            className={`button is-${
              !completed ? "success" : "warning"
            } is-dark is-small`}
          >
            {!completed ? "Complete" : "Archive"}
          </button>
        ) : null}

        <button
          id="updateOrder"
          className="button is-primary is-light is-small"
          onClick={handleClick}
        >
          Update Info
        </button>

        <button
          id="deleted"
          className="button is-danger is-light is-pulled-right is-small"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
