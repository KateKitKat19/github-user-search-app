import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from 'redux/searchSlice';
import { selectQuery } from 'redux/selectors';
import { useEffect } from 'react';
import throttle from 'lodash.throttle';
import { getUser } from 'API/githubAPI';
import { setData } from 'redux/searchSlice';

export const App = () => {
  const dispatch = useDispatch();

  //gets Octocat data (default) on the first render
  useEffect(() => {
    async function getDefaultData() {
      const defaultData = await getUser('Octocat');
      dispatch(setData(defaultData));
    }
    getDefaultData();
  }, [dispatch]);

  async function handleUpdate(evt) {
    const query = evt.target.value;
    dispatch(updateQuery(query));
    const newData = await getUser(query);
    dispatch(setData(newData));
  }

  const throttledFetchOnUpdate = throttle(handleUpdate, 500);
  const searchValue = useSelector(selectQuery);

  return (
    <div>
      <label htmlFor="search">Enter your query here</label>
      <input
        type="text"
        name="search"
        onChange={throttledFetchOnUpdate}
        value={searchValue}
      ></input>
    </div>
  );
};
