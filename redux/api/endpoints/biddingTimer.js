import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getDateApi = createApi({
  reducerPath: 'getDateApi',
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-dev2.royalenfield.com' }),
  endpoints: (builder) => ({
    getDate: builder.query({
      query: () => '/v3/core/bikes/get-date',
    }),
  }),
});
export default getDateApi;

export const { useGetDateQuery } = getDateApi;
