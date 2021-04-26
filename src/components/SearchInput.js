import { updateSearchTerm } from "../redux/searchOrdersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchInput = () => {
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
          dispatch(
            updateSearchTerm(e.target.value.replace(/[^a-zA-Z0-9\s]/, ""))
          );
        }}
      />
    </div>
  );
};

export default SearchInput;
