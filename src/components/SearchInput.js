import { useState, useEffect } from "react";

const SearchInput = ({ searchByText }) => {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    searchByText(searchInput);
  }, [searchInput]);
  return (
    <div className="control">
      <input
        value={searchInput}
        className="input"
        type="text"
        placeholder="Search Orders By"
        onChange={(e) => {
          setSearchInput(e.target.value.replace(/[^a-zA-Z0-9\s]/, ""));
        }}
      />
    </div>
  );
};

export default SearchInput;
