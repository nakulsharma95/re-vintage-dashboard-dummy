import { apiSlice } from '../main';

const getDateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDate: builder.query({
      query: () => ({
        url: '/v3/core/bikes/get-date',
      }),
    }),
  }),
});
export default getDateApi;

export const { useGetDateQuery } = getDateApi;
