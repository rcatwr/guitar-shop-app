import React, {useState} from "react";
import serviceList from "../data/serviceList.json";
import employeeList from "../data/employeeList.json";



const NewOrder = () => {

  
  


  



  return (
    <form>
      <div class="container">
        <div class="box content">
          <p class="is-size-4">
            <span class="fredoka">New Order </span>
            <span class="tag is-large is-darker is-link is-pulled-right">
              #49
            </span>
          </p>

          <div class="field">
            <label class="label">Item Description</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="i.e. Fender Telecaster"
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
                class="input"
                type="text"
                placeholder="i.e. Kim Deal"
                value=""
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
                class="input"
                type="text"
                placeholder="i.e. 555-444-5555"
                value=""
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
                <select>
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
              <input class="input" type="text" placeholder="enter date" />
              <span class="icon is-small is-left">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Est. Pickup</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="enter date" />
              <span class="icon is-small is-left">
                <i class="fas fa-calendar"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Tech</label>
            <div class="control">
              <div class="select">
                <select>
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
                class="textarea"
                placeholder="Add details here"
              ></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                Rush order?
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};




export default NewOrder;
