import { useState, useEffect } from "react";
import serviceList from "../data/serviceList.json";
import employeeList from "../data/employeeList.json";
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = (props) => {
  const [order, setOrder] = useState({
    orderId: "",
    itemDescription: "",
    customerName: "",
    phoneNumber: "",
    service: "",
    estimate: "",
    notes: "",
    rushOrder: false,
    timeDroppedOff: "",
    timeEstimatedPickup: "",
    employeeName: "",
    completed: false,
    archived: false,
    deleted: false,
    new: true,
  });

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

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    console.log("running");
    if (props.newOrderId) {
      setOrder({ ...order, orderId: props.newOrderId() });
    }

    if (props.orderToUpdate) {
      setOrder(props.orderToUpdate);

      //fix to get my mocked data to work with moment.js
      if (typeof props.orderToUpdate.timeDroppedOff === "string") {
        setOrder({
          ...props.orderToUpdate,

          timeDroppedOff: new Date(props.orderToUpdate.timeDroppedOff),

          timeEstimatedPickup: new Date(
            props.orderToUpdate.timeEstimatedPickup
          ),
        });
      }
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setOrder({ ...order, rushOrder: e.target.checked });
    } else {
      setOrder({ ...order, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //set new to false on submit!

    setOrder({ ...order, new: false });

    if (props.updateOrderModal) {
      props.formSubmitted(order, true);
      props.updateOrderModal(false);
    } else {
      props.formSubmitted(order, false);
      setRedirect(true);
    }
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className={`container ${props.newOrderId ? "pt-6" : null}`}>
        <div className="box content">
          <p className="is-size-4">
            <span className="fredoka">
              {props.newOrderId ? "New Order" : "Update Order"}{" "}
            </span>
            <span className="tag is-large is-darker is-link is-pulled-right">
              #{orderId}
            </span>
          </p>

          <div className="field">
            <label className="label">Item Description</label>
            <div className="control has-icons-left">
              <input
                id="itemDescription"
                className="input"
                type="text"
                placeholder="i.e. Fender Telecaster"
                value={itemDescription}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-guitar"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Customer Name</label>
            <div className="control has-icons-left">
              <input
                id="customerName"
                className="input"
                type="text"
                placeholder="i.e. Kim Deal"
                value={customerName}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Phone</label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="phoneNumber"
                className="input"
                type="text"
                placeholder="i.e. 555-444-5555"
                value={phoneNumber}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Service</label>
            <div className="control">
              <div className="select">
                <select value={service} onChange={handleChange} id="service">
                  {serviceList.map(({ option }) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* <!-- Dropped off: */}

          <div className="field">
            <label className="label">Dropped off</label>
            <div className="control has-icons-left">
              <DatePicker
                className="input"
                selected={timeDroppedOff}
                autoComplete="off"
                type="text"
                placeholder="enter date"
                onChange={(date) =>
                  setOrder({ ...order, timeDroppedOff: date })
                }
                id="timeDroppedOff"
                dateFormat="MMMM d, yyyy"
              />

              <span className="icon is-small is-left">
                <i className="fas fa-calendar"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Est. Pickup</label>
            <div className="control has-icons-left">
              <DatePicker
                className="input"
                id="timeEstimatedPickup"
                type="text"
                placeholder="enter date"
                onChange={(date) =>
                  setOrder({ ...order, timeEstimatedPickup: date })
                }
                autoComplete="off"
                selected={timeEstimatedPickup}
                dateFormat="MMMM d, yyyy"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-calendar"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Tech</label>
            <div className="control">
              <div className="select">
                <select
                  value={employeeName}
                  id="employeeName"
                  onChange={handleChange}
                >
                  {employeeList.map(({ option }) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Estimate</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="enter dollar amount"
                value={estimate}
                onChange={handleChange}
                id="estimate"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-dollar-sign"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Notes</label>
            <div className="control">
              <textarea
                id="notes"
                className="textarea"
                placeholder="Add details here"
                value={notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={rushOrder}
                  id="rushOrder"
                  onChange={handleChange}
                />
                &nbsp; Rush order?
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">
                {props.newOrderId ? "Submit" : "Update"}
              </button>
            </div>
            <div className="control">
              <button
                className="button is-link is-light"
                onClick={(e) => {
                  //cancels and redirects!
                  e.preventDefault();
                  if (order.new) {
                    setRedirect(true);
                  } else {
                    props.updateOrderModal(false);
                  }
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
