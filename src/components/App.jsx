import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '../redux/searchSlice';
import { selectQuery } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  function handleUpdate(evt) {
    const query = evt.target.value;
    console.log('CHANGED IN HANDLE UPDATE', query);
    dispatch(updateQuery(query));
  }

  const searchValue = useSelector(selectQuery);

  return (
    <div>
      <label htmlFor="search">Enter your query here</label>
      <input
        type="text"
        name="search"
        onChange={handleUpdate}
        value={searchValue}
      ></input>
    </div>
  );
};
