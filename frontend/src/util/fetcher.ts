// Use.
import axios from 'axios';
import { User, Customer, Contract, Intervention } from '../type';

/**
 * Axios setting.
 */
const fetcher = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

/**
 * Get method.
 * @param url
 *    string, the url to fetch.
 */
const getItems = (url: string) => {
  return fetcher.get(url);
};

/**
 * Post method.
 * @param url
 *    string, the url to fetch.
 * @param values
 *    object, values for fetch body.
 */
const postItem = (
  url: string,
  values: User | Customer | Contract | Intervention
) => {
  return fetcher.post(url, values);
};

export { getItems, postItem };
