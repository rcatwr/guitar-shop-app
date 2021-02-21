import React from "react";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";

const SearchTool = (props) => {
  return (

    <div className="container is-flex is-justify-content-flex-end">
                
    <div className="field has-addons">
      <div className="control">
        <SearchInput />
      </div>

      <div className="control">
        <Dropdown
        />
      </div>
    </div>
    </div>



  );
};

export default SearchTool;
