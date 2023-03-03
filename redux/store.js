import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import mainReducer from './slices/main';
import mainApi from './api/main';
import getDateApi from './api/endpoints/biddingTimer';

const store = configureStore({
  reducer: {
    data: mainReducer,
    [mainApi.reducerPath]: mainApi.reducer,
    [getDateApi.reducerPath]: getDateApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      mainApi.middleware,
      getDateApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export default store;
