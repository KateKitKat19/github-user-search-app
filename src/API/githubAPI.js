import axios from 'axios';
const BASE_URL = 'https://api.github.com/users/';

export async function getUser(query) {
  const res = await axios.get(`${BASE_URL}${query}`);
  return res.data;
}
