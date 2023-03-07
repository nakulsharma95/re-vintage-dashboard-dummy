/* eslint-disable consistent-return */
import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';
const UNAUTHORIZED_STATUS_CODE = 401;
const PAYMENT_REQUIRED_STATUS_CODE = 402;
const SUCCESS_STATUS_CODE = 200;
const USER_ID_INDEX = 2;

async function verifyToken(token, successResponse, failureResponse) {
  const verifyResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v3/auth/dashboard/verify-token`,
    {
      headers: new Headers({
        Authorization: token.split('#')?.[0],
      }),
    }
  );
  const res = await verifyResponse?.json();

  if (res?.code === SUCCESS_STATUS_CODE) {
    return { isAuthenticated: true, successResponse };
  }
  if (
    res?.code === UNAUTHORIZED_STATUS_CODE ||
    res?.code === PAYMENT_REQUIRED_STATUS_CODE
  ) {
    const splitToken = token?.split('#');
    const generateResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/v3/auth/dashboard/generate-token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refreshToken: splitToken?.[1],
          userId: splitToken?.[USER_ID_INDEX],
        }),
      }
    );
    const response = await generateResponse?.json();
    if (response.code === SUCCESS_STATUS_CODE) {
      const tempToken = Buffer.from(
        `${response?.data?.accessToken}#${response?.data?.refreshToken}#${splitToken?.[USER_ID_INDEX]}`
      ).toString('base64');
      successResponse.cookies.set(
        process.env.NEXT_PUBLIC_COOKIE_NAME,
        tempToken
      );
      return { isAuthenticated: true, successResponse };
    }
    failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
    return { isAuthenticated: false, failureResponse };
  }
  failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
  return { isAuthenticated: false, failureResponse };
}
// demo/sprint-1

const authenticateUser = async (req) => {
  const failureResponse = NextResponse.redirect(new URL('/login', req.url));
  const successResponse = NextResponse.redirect(new URL('/homepage', req.url));

  let token = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME);
  if (token && token?.value) {
    token = Buffer.from(token.value, 'base64').toString('utf-8');
    return verifyToken(token, successResponse, failureResponse);
  }
  failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
  return { isAuthenticated: false, failureResponse }; // return false if token is not verified
};

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;
  if (pathname.match(/\.[a-zA-Z0-9-]+$/)) {
    return NextResponse.next(); // prevent middleware running on public files
  }

  const isPath = pathname === '/login' || pathname.includes('/sign-up');
  const { isAuthenticated, successResponse, failureResponse } =
    await authenticateUser(request);

  if (isPath && isAuthenticated) {
    return successResponse;
  }

  if (!isPath && !isAuthenticated) {
    return failureResponse;
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
