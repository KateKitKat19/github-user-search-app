import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, updateQuery } from 'redux/searchSlice';
import { selectQuery } from 'redux/selectors';
import { getUser } from 'API/githubAPI';

export const Searchbar = () => {
  const dispatch = useDispatch();

  function handleUpdate(evt) {
    const query = evt.target.value;
    console.log('CHANGED IN HANDLE UPDATE', query);
    dispatch(updateQuery(query));
  }
  const searchValue = useSelector(selectQuery);

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('THIS IS handleSubmit');
    const newQuery = searchValue;
    const user = await getUser(newQuery);
    if (user) {
      dispatch(setData(user));
    } else {
      dispatch(setError(true));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
