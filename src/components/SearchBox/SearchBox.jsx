import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.form_box}>
      <label className={css.form_txt} htmlFor="searchInput">
        Search contacts by name
      </label>
      <input
        id="searchInput"
        className={css.search_field}
        type="text"
        value={filterValue}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
