import axios from 'axios';
import { setError } from 'redux/searchSlice';
const BASE_URL = 'https://api.github.com/users/';

export async function getUser(query) {
  try {
    const res = await axios.get(`${BASE_URL}${query}`);
    if (res.status === 200) {
      return res.data;
    } else {
      setError(true);
    }
  } catch (error) {
    console.log(error.message);
    setError(true);
  }
}
