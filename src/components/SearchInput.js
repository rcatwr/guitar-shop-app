import React from "react";

const SearchInput = ({searchByText}) => {
  return (
    <div className="control">
          <input 
          className="input" 
          type="text" 
          placeholder="Enter Text" 
          onChange={(e) => searchByText(e.target.value)}
          />
    </div>
  );
};

export default SearchInput;
