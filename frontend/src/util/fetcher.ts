// Use.
import axios from 'axios';
import { Customer, Contract } from '../type';

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

const postItem = (url: string, values: Customer | Contract) => {
  return fetcher.post(url, values);
};

export { getItems, postItem };
