import React from "react";

const Nav = () => {
  return (
    <div className="container">
      <div className="tabs is-medium mb-2">
        <ul>
          <li className="is-active">
            <a>Current</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
          <li>
            <a href="./form.html">New</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
