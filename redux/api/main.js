import Router from 'next/router';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { deleteCookie } from 'cookies-next';
import { getAuthCookie, setAuthCookie } from '../../utils/helpers';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = getAuthCookie?.[0];

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  refetchOnMountOrArgChange: true,
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (
      (result?.data && result.data.code === 401) ||
      result.data.code === 403
    ) {
      const generateResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v3/auth/dashboard/generate-token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refreshToken: getAuthCookie?.[1],
            userId: getAuthCookie?.[2],
          }),
        }
      );
      const response = await generateResponse?.json();
      if (response.code === 200) {
        const jwtAccessToken = await response?.data?.accessToken;
        const refreshToken = await response?.data?.refreshToken;
        const guid = getAuthCookie?.[2];
        setAuthCookie(`${jwtAccessToken}#${refreshToken}#${guid}`);
        return baseQuery(args, api, extraOptions);
      }
      deleteCookie(process.env.NEXT_PUBLIC_COOKIE_NAME);
      await Router.push('/login');
    }
    return result;
  },
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});
export default apiSlice;
