import { setCookie } from 'cookies-next';
import { apiSlice } from '../main';
import { setCredentials } from '../../slices/user';

const SUCCESS_STATUS_CODE = 200;

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/v3/auth/dashboard/login',
        method: 'POST',
        body: { ...credentials },
      }),
      onQueryStarted: async (arg, api) => {
        try {
          const { data } = await api.queryFulfilled;
          if ((await data?.code) !== SUCCESS_STATUS_CODE) return;
          const jwtAccessToken = await data?.data?.accessToken;
          const refreshToken = await data?.data?.refreshToken;
          const guid = await data?.data?.user?.guid;
          const tokens = `${jwtAccessToken}#${refreshToken}#${guid}`;
          setCookie(
            process.env.NEXT_PUBLIC_COOKIE_NAME,
            Buffer.from(tokens, 'utf-8').toString('base64')
          );
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
    encrypt: builder.mutation({
      query: (credentials) => ({
        url: '/v3/auth/dashboard/encrypt',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    verifyToken: builder.query({
      query: () => ({
        url: '/v3/auth/dashboard/verify-token',
        method: 'GET',
        skip: true,
      }),
    }),
  }),
});

export const { useLoginMutation, useVerifyTokenQuery, useEncryptMutation } =
  authApiSlice;
