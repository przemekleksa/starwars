import axios from "axios";
import qs from 'qs';

const defaultOptions = {
    baseURL: 'https://swapi.dev/api/',
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    paramsSerializer: (params: unknown) => qs.stringify(params, { arrayFormat: 'repeat' }),
  };
  
  const Fetch = axios.create(defaultOptions);
  export default Fetch;