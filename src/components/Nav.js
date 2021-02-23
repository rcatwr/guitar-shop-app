import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
  const handleClick = () => props.openNewOrderModal();

  const { pathname } = useLocation();

  console.log(props.orderStatus);
  return (
    <div className="container">
      <nav className="tabs is-toggle mb-2">
        <ul>
          <li className={pathname === "/" ? "is-active" : null}>
            <Link to="/">
              Current &nbsp;
              <strong>{props.orderStatus.current}</strong>
            </Link>
          </li>
          <li className={pathname === "/completed" ? "is-active" : null}>
            <Link to="/completed">Completed &nbsp;
              <strong>{props.orderStatus.completed}</strong></Link>
          </li>
          <li className={pathname === "/archived" ? "is-active" : null}>
            <Link to="/archived">Archived &nbsp;
              <strong>{props.orderStatus.archived}</strong></Link>
          </li>
          <li className={pathname === "/new" ? "is-active" : null}>
            <Link to="/new">New</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
