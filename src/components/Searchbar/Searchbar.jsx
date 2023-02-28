import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from 'redux/searchSlice';
import { selectQuery } from 'redux/selectors';

export const Searchbar = () => {
  const dispatch = useDispatch();

  function handleUpdate(evt) {
    const query = evt.target.value;
    console.log('CHANGED IN HANDLE UPDATE', query);
    dispatch(updateQuery(query));
  }
  const searchValue = useSelector(selectQuery);

  return (
    <form>
      <input
        type="text"
        name="search"
        onChange={handleUpdate}
        value={searchValue}
      ></input>
      <button type="submit" aria-label="search">
        Search
      </button>
    </form>
  );
};
