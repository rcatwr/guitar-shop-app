import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  // get orders from redux store
  const orders = useSelector((state) => state.orders);

  // sorting logic as an object
  // parameter 'o' is the orders object
  // returns an object!
  const cardDisplayLogic = (o) => ({
    current: !o.deleted && !o.completed,
    completed: o.completed && !o.deleted && !o.archived,
    archived: o.archived && !o.deleted,
  });

  // count up the 'current' 'completed' and 'archived' orders
  // takes order array as param.
  const orderStatus = (orders) => {
    // use filter method to create a new array
    // parameter is a string that matches the keyword in cardDisplayLogic()

    const ordersCount = (stat) =>
      orders.filter((order) => {
        return cardDisplayLogic(order)[stat] ? order : null;
      }).length;

    // returns an object with the length of the sorted arrays!
    // put these in the tabs -- calling it like this:
    // orderStatus(orders).current

    return {
      current: ordersCount("current"),
      completed: ordersCount("completed"),
      archived: ordersCount("archived"),
    };
  };

  // extract the values from the function call
  const { current, completed, archived } = orderStatus(orders);

  return (
    <div className="container">
      <nav className="tabs is-toggle mb-2 is-small">
        <ul>
          <li className={pathname === "/" ? "is-active" : null}>
            <Link to="/">
              Current &nbsp;
              <strong>{current || ""}</strong>
            </Link>
          </li>
          <li className={pathname === "/completed" ? "is-active" : null}>
            <Link to="/completed">
              Completed &nbsp;
              <strong>{completed || ""}</strong>
            </Link>
          </li>
          <li className={pathname === "/archived" ? "is-active" : null}>
            <Link to="/archived">
              Archived &nbsp;
              <strong>{archived || ""}</strong>
            </Link>
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
