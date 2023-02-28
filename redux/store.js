import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import mainReducer from './slices/main';
import mainApi from './api/main';

const store = configureStore({
  reducer: {
    data: mainReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([mainApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
