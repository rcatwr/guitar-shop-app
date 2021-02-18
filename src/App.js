import React from 'react';
import './css/App.css'

const App = () => {
   return (
   <>
  <section class="hero is-link">
      <div class="hero-body">
        <p class="fredoka is-size-2">Mill Ave. Guitar Works</p>
        <p class="subtitle">Repair Schedule</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tabs is-medium is-centered mb-2">
          <ul>
            <li class="is-active"><a>Current</a></li>
            <li><a>Completed</a></li>
            <li><a href="./form.html">New</a></li>
          </ul>
        </div>
      </div>
      {/* <!-- Main container --> */}
      <div class="container is-flex is-justify-content-flex-end">
        {/* <!-- Left side --> */}

        {/* <!-- dropdown --> */}
        <div id="dropdown" class="dropdown mb-2">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>Search Orders</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">Order Id </a>
              <a class="dropdown-item"> Item </a>
              <a href="#" class="dropdown-item is-active"> Customer </a>
              <a href="#" class="dropdown-item"> Dropoff Date </a>
              <a href="#" class="dropdown-item"> Service </a>
              <hr class="dropdown-divider" />
              <a href="#" class="dropdown-item"> descending </a>
              <a href="#" class="dropdown-item"> ascending </a>
            </div>
          </div>
        </div>
        {/* <!-- end search --> */}
      </div>

      <div class="container">
        <div class="box content">
          <p class="is-size-4">
            <span class="fredoka">1978 Fender Telecaster </span
            ><span class="tag is-large is-darker is-link is-pulled-right"
              >#45
            </span>
          </p>
          <p>
            <strong><i class="fas fa-user"></i></strong> Bob Smith
          </p>
          <p>
            <strong><i class="fas fa-phone">&nbsp;</i></strong
            >555-444-5555
          </p>
          <p>
            <strong>Service(s):</strong> <span class="tag is-info">Setup</span>
            <span class="tag is-info">Electronics</span>
          </p>
          <p><strong>Dropped off:</strong> Dec 12, 2020</p>
          <p><strong>Expected by:</strong> Dec 14, 2020</p>

          <p><strong>Tech:</strong> Frankie Bones</p>
          <p><strong>Est. Cost:</strong> $45.00</p>
          <p>
            <strong>Notes:</strong> Needs a basic setup -- make sure to check
            the action!
          </p>

          <button class="button is-danger is-light is-pulled-right">
            Delete
          </button>
          <button id="updateOrder" class="button is-primary is-light">Update Info</button>
        </div>
      </div>

      <div class="container">
        <div class="box content">
          <p class="is-size-4">
            <span class="fredoka">1965 Danelectro </span
            ><span class="tag is-danger">Rush Job</span>
          </p>
          <p>
            <strong><i class="fas fa-user"></i></strong> Bob Smith
          </p>
          <p>
            <strong><i class="fas fa-phone">&nbsp;</i></strong
            >555-444-5555
          </p>
          <p>
            <strong>Service(s):</strong> <span class="tag is-info">Setup</span>
            <span class="tag is-info">Electronics</span>
          </p>
          <p><strong>Dropped off:</strong> Dec 12, 2020</p>
          <p><strong>Expected by:</strong> Dec 14, 2020</p>
          <p><strong>Completed on:</strong> Pending</p>
          <p><strong>Tech:</strong> Dizzy Dave</p>
          <p>
            <strong>Notes:</strong> Needs a basic setup -- make sure to check
            the action!
          </p>

          <button class="button is-danger is-light is-pulled-right">
            Delete
          </button>
          <button class="button is-primary is-light">Update Info</button>
        </div>
      </div>

      <div class="container">
        <div class="box content">
          <p class="is-size-4">
            <span class="fredoka">1967 Gibson Hummingbird</span>
          </p>
          <p>
            <strong><i class="fas fa-user"></i></strong> Bob Smith
          </p>
          <p>
            <strong>Service(s):</strong> <span class="tag is-info">Setup</span>
            <span class="tag is-info">Electronics</span>
          </p>
          <p><strong>Dropped off:</strong> Dec 12, 2020</p>
          <p><strong>Expected by:</strong> Dec 14, 2020</p>
          <p><strong>Completed on:</strong> Pending</p>
          <p><strong>Tech:</strong> Frankie Bones</p>
          <p>
            <strong>Notes:</strong> Needs a basic setup -- make sure to check
            the action!
          </p>

          <button class="button is-danger is-light is-pulled-right">
            Delete
          </button>
          <button class="button is-primary is-light">Update Info</button>
        </div>
      </div>
    </section>
    <footer class="footer">Copyright 2021 Mill Ave. Guitar Works</footer>


   </>
   )
}

export default App;