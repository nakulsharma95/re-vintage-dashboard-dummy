import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = atob(
        localStorage.getItem(process.env.NEXT_PUBLIC_COOKIE_NAME)
      )?.split('#')?.[0];
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});
export default apiSlice;
