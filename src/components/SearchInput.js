//import { useState, useEffect } from "react";
import { updateSearchTerm } from "../redux/searchOrdersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = ({ searchByText }) => {
  //const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   searchByText(searchInput);
  // }, [searchInput, searchByText]);
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => state.searchTerm);

  return (
    <div className="control">
      <input
        value={searchTerm}
        className="input"
        type="text"
        placeholder="Search Orders By"
        onChange={(e) => {
          // setSearchInput(e.target.value.replace(/[^a-zA-Z0-9\s]/, ""));
          dispatch(
            updateSearchTerm(e.target.value.replace(/[^a-zA-Z0-9\s]/, ""))
          );
        }}
      />
    </div>
  );
};

export default SearchInput;
