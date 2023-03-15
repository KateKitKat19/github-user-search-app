import { useDispatch, useSelector } from 'react-redux';
import { setData, setError, updateQuery } from 'redux/searchSlice';
import { selectError, selectQuery } from 'redux/selectors';
import { getUser } from 'API/githubAPI';
import {
  SearchbarStyled,
  Input,
  SearchBarIcon,
  Button,
} from './Searchbar.styled';
import { SearchIcon } from 'components/Icons/SearchIcons';
import { useEffect } from 'react';
import { ErrorInSearch } from 'components/Error/ErrorInSearch';

export const Searchbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectQuery);
  const error = useSelector(selectError);

  useEffect(() => {
    async function getDefaultData() {
      const defaultData = await getUser('Octocat');
      dispatch(setData(defaultData));
    }
    if (searchValue === '') {
      dispatch(setError(false));
      getDefaultData();
    }
  }, [dispatch, searchValue]);

  function handleUpdate(evt) {
    dispatch(setError(false));
    const query = evt.target.value;
    dispatch(updateQuery(query));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    const newQuery = searchValue;
    const user = await getUser(newQuery);
    if (user) {
      dispatch(setData(user));
    } else {
      dispatch(setError(true));
    }
  }

  return (
    <SearchbarStyled onSubmit={handleSubmit}>
      <SearchBarIcon>
        <SearchIcon />
      </SearchBarIcon>
      <Input
        type="text"
        name="search"
        onChange={handleUpdate}
        value={searchValue}
        placeholder="Search GitHub username…"
      ></Input>
      {error && <ErrorInSearch></ErrorInSearch>}
      <Button type="submit" aria-label="search">
        Search
      </Button>
    </SearchbarStyled>
  );
};
