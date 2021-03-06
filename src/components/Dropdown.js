import React, { useState } from "react";
import _ from "lodash";
import "../css/Dropdown.css";
import searchByItems from "../data/searchByItems.json";

const Dropdown = ({ sortCardOrder, sortCardDir }) => {
  const [dropdownActive, setDropDownActive] = useState(false);
  const [dropdownItemActive, setDropdownItemActive] = useState("orderId");
  const [searchOrder, setSearchOrder] = useState("desc");

  const clickHandler = (e) => {
    if (!dropdownActive) {
      setDropDownActive(true);
    } else {
      setDropDownActive(false);
    }
  };

  const updateCardSearch = (input) => {
    if (input === "asc" || input === "desc") {
      sortCardDir(input);
    } else {
      sortCardOrder(input);
    }
  };

  const textIndex = _.findIndex(searchByItems, { id: dropdownItemActive });

  const isActive = dropdownActive ? "is-active" : null;

  const searchOrderText = {
    asc: "up",
    desc: "down",
  };

  return (
    <div
      id="dropdown"
      onClick={clickHandler}
      className={`dropdown mb-2 ${isActive}`}
    >
      <div className="dropdown-trigger">
        <button
          className={"button drop-style"}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>{`${searchByItems[textIndex].text}`}</span>
          <span className="icon is-small">
            <i
              className={`fas fa-angle-${searchOrderText[searchOrder]}`}
              aria-hidden="true"
            ></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {searchByItems.map((item) => {
            return (
              <a
                id={item.id}
                key={item.id}
                className={`dropdown-item ${
                  dropdownItemActive === item.id ? "is-active" : null
                }`}
                onClick={() => {
                  setDropdownItemActive(item.id);
                  updateCardSearch(item.id);
                }}
              >
                {item.text}
              </a>
            );
          })}

          <hr className="dropdown-divider" />
          <a
            className={`dropdown-item ${
              searchOrder === "asc" ? "is-active" : null
            }`}
            onClick={() => {
              setSearchOrder("asc");
              updateCardSearch("asc");
            }}
          >
            {" "}
            ascending{" "}
          </a>
          <a
            className={`dropdown-item ${
              searchOrder === "desc" ? "is-active" : null
            }`}
            onClick={() => {
              setSearchOrder("desc");
              updateCardSearch("desc");
            }}
          >
            {" "}
            descending{" "}
          </a>
        </div>
      </div>
    </div>
  );
  //   }
};

export default Dropdown;
