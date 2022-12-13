import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../redux/rootReducer";
import API from "../utils/endpoint";

const axiosInstance = axios.create({
  baseURL: API.baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const enhancers = compose(
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);
let store;
store = createStore(reducers, enhancers);

axiosInstance.interceptors.request.use(async function (config) {});

export default store;
