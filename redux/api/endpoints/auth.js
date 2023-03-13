import { apiSlice } from '../main';
import { setCredentials } from '../../slices/user';
import { getAuthCookie, setAuthCookie } from '../../../utils/helpers';

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
          setAuthCookie(`${jwtAccessToken}#${refreshToken}#${guid}`);
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
    refreshToken: builder.mutation({
      query: () => ({
        url: '/v3/auth/dashboard/generate-token',
        method: 'POST',
        body: JSON.stringify({
          refreshToken: getAuthCookie?.[1],
          userId: getAuthCookie?.[2],
        }),
        keepUnusedDataFor: 0,
        onQueryStarted: async (arg, api) => {
          try {
            const { data } = await api.queryFulfilled;
            if ((await data?.code) !== SUCCESS_STATUS_CODE) return;
            const jwtAccessToken = await data?.data?.accessToken;
            const refreshToken = getAuthCookie?.[1];
            const guid = getAuthCookie?.[2];
            setAuthCookie(`${jwtAccessToken}#${refreshToken}#${guid}`);
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
    }),
  }),
});

export const {
  useRefreshTokenMutation,
  useLoginMutation,
  useVerifyTokenQuery,
  useEncryptMutation,
} = authApiSlice;
