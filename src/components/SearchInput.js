import { useState } from "react";

const SearchInput = ({ searchByText }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="control">
      <input
        value={searchInput}
        className="input"
        type="text"
        placeholder="Search Orders By"
        onChange={(e) => {
          setSearchInput(e.target.value.replace(/[^a-zA-Z\s]/, ""));
          searchByText(searchInput);
        }}
      />
    </div>
  );
};

export default SearchInput;
