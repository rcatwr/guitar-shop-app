import React, { Component } from "react";
import serviceList from "../data/serviceList.json";
import employeeList from "../data/employeeList.json";
import { Redirect } from "react-router-dom";

class Form extends Component {
  state = {
    newOrder: {
      orderId: 45,
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
    },
    redirect: false,
  };

  // this.setState({
  //   access: {
  //     ...this.state.access,
  //     hospital_id: 1,
  //   },
  // });

  handleChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({ rushOrder: e.target.checked });
    } else {
      this.setState({
        newOrder: { ...this.state.newOrder, [e.target.id]: e.target.value },
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmitted(this.state.newOrder);

    this.setState({ redirect: true });
  };

  render() {
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
    } = this.state.newOrder;

    console.log(this.state.newOrder);
    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container pt-6">
          <div className="box content">
            <p className="is-size-4">
              <span className="fredoka">New Order </span>
              <span className="tag is-large is-darker is-link is-pulled-right">
                {orderId}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  <select
                    value={service}
                    onChange={this.handleChange}
                    id="service"
                  >
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
                <input
                  className="input"
                  value={timeDroppedOff}
                  type="text"
                  placeholder="enter date"
                  onChange={this.handleChange}
                  id="timeDroppedOff"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-calendar"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Est. Pickup</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  id="timeEstimatedPickup"
                  type="text"
                  placeholder="enter date"
                  onChange={this.handleChange}
                  value={timeEstimatedPickup}
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
                    onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
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
                    onChange={this.handleChange}
                  />
                  Rush order?
                </label>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">
                  Submit
                </button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;