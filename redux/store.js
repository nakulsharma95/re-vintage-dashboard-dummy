import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';
import API from '../utils/endpoint';

const axiosInstance = axios.create({
  baseURL: API.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const enhancers = compose(
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

const store = createStore(reducers, enhancers);

axiosInstance.interceptors.request.use();

export default store;
