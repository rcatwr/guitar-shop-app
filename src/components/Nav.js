import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const handleClick = () => props.openNewOrderModal();

  return (
    <div className="container">
      <nav className="tabs mb-2">
        <ul>
          <li className="is-active">
            <Link to="/">Current</Link>
          </li>
          <li>
            <Link to="/completed">Completed</Link>
          </li>
          <li>
            <Link to="/archived">Archived</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
