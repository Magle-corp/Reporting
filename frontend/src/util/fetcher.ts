// Use.
import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getItems = (url: string) => {
  return fetcher.get(url);
};

export { getItems };
