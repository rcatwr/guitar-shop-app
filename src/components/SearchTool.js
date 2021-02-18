import React from "react";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";

const SearchTool = (props) => {
  return (
    <div class="field has-addons">
      <p class="control">
        <SearchInput />
      </p>

      <p class="control">
        <Dropdown
        />
      </p>
    </div>
  );
};

export default SearchTool;
