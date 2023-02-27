import {
  setCookie,
  // , getCookie
} from 'cookies-next';
import { apiSlice } from '../main';
import { setCredentials } from '../../user';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
      onQueryStarted: async (arg, api) => {
        try {
          const { data } = await api.queryFulfilled;
          const jwtAccessToken = await data?.data?.jwtAccessToken;
          const refreshToken = await data?.data?.refreshToken;
          const guid = await data?.data?.user?.guid;
          const tokens = await `${jwtAccessToken}#${refreshToken}#${guid}`;
          setCookie(process.env.NEXT_PUBLIC_COOKIE_NAME, btoa(tokens));
          api.dispatch(
            setCredentials({
              accessToken: jwtAccessToken,
              user: data?.data?.user,
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
    verifyToken: builder.query({
      query: () => ({
        url: '/auth/verify-token',
        method: 'GET',
        skip: true,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useVerifyTokenQuery,
  useGetProfileQuery,
  useGetProfileMutation,
} = authApiSlice;
