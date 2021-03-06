import React from "react";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";

const SearchTool = ({sortCardOrder, sortCardDir, searchByText}) => {
  return (

    <div className="container is-flex is-justify-content-flex-end">
                
    <div className="field has-addons">
      <div className="control">
        <SearchInput searchByText = {searchByText}/>
      </div>

      <div className="control">
        <Dropdown sortCardOrder={sortCardOrder} sortCardDir={sortCardDir}
        />
      </div>
    </div>
    </div>



  );
};

export default SearchTool;
