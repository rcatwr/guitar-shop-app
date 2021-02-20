import React, { Component } from "react";
import serviceList from "../data/serviceList.json";
import employeeList from "../data/employeeList.json";

class Form extends Component {
  state = {
    orderId: 45,
    itemDescription: "",
    customerName: "",
    phoneNumber: "",
    service: "",
    estimate: "",
    notes: "",
    rushOrder: false,
    timeDroppedOff:"",
    timeEstimatedPickup:"",
    employeeName:"",
  };

  handleChange = (e) => {
    if (e.target.type === 'checkbox'){
      this.setState({rushOrder: e.target.checked })
    } else {
      this.setState({ [e.target.id] : e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmitted(this.state) 
  }

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
    } = this.state;

    console.log(this.state)

    return (
      <form onSubmit={this.handleSubmit}>
        <div class="container">
          <div class="box content">
            <p class="is-size-4">
              <span class="fredoka">New Order </span>
              <span class="tag is-large is-darker is-link is-pulled-right">
                {orderId}
              </span>
            </p>

            <div class="field">
              <label class="label">Item Description</label>
              <div class="control has-icons-left">
                <input
                  id="itemDescription"
                  class="input"
                  type="text"
                  placeholder="i.e. Fender Telecaster"
                  value={itemDescription}
                  onChange={this.handleChange}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-guitar"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Customer Name</label>
              <div class="control has-icons-left">
                <input
                  id="customerName"
                  class="input"
                  type="text"
                  placeholder="i.e. Kim Deal"
                  value={customerName}
                  onChange={this.handleChange}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Phone</label>
              <div class="control has-icons-left has-icons-right">
                <input
                  id="phoneNumber"
                  class="input"
                  type="text"
                  placeholder="i.e. 555-444-5555"
                  value={phoneNumber}
                  onChange={this.handleChange}
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-phone"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Service</label>
              <div class="control">
                <div class="select">
                  <select value={service} onChange={this.handleChange} id="service">
                    {serviceList.map((service) => (
                      <option>{service.option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* <!-- Dropped off: */}

            <div class="field">
              <label class="label">Dropped off</label>
              <div class="control has-icons-left">
                <input class="input" value={timeDroppedOff}type="text" placeholder="enter date" onChange={this.handleChange} id="timeDroppedOff"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-calendar"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Est. Pickup</label>
              <div class="control has-icons-left">
                <input class="input" id="timeEstimatedPickup" type="text" placeholder="enter date"onChange={this.handleChange} value={timeEstimatedPickup} />
                <span class="icon is-small is-left">
                  <i class="fas fa-calendar"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Tech</label>
              <div class="control">
                <div class="select">
                  <select value={employeeName} id="employeeName" onChange={this.handleChange}>
                    {employeeList.map((emp) => (
                      <option>{emp.option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Estimate</label>
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="enter dollar amount"
                  value={estimate}
                  onChange={this.handleChange}
                  id="estimate"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-dollar-sign"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Notes</label>
              <div class="control">
                <textarea
                  id="notes"
                  class="textarea"
                  placeholder="Add details here"
                  value={notes}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" checked={rushOrder} id="rushOrder" onChange={this.handleChange}/>
                  Rush order?
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-link">
                  Submit
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
