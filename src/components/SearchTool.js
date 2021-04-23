import React from "react";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";

const SearchTool = ({ sortCardDir, searchByText }) => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  console.log(usePathname());
  return usePathname() !== "/new" ? (
    <div className="container is-flex is-justify-content-flex-end">
      <div className="field has-addons">
        <div className="control">
          <SearchInput searchByText={searchByText} />
        </div>

        <div className="control">
          <Dropdown sortCardDir={sortCardDir} />
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchTool;
