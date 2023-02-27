/* eslint-disable consistent-return */
import { NextResponse } from 'next/server';

async function verifyToken(token, successResponse, failureResponse) {
  const verifyResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-token`,
    {
      headers: new Headers({
        Authorization: token.split('#')?.[0],
      }),
    }
  );
  const res = await verifyResponse?.json();

  if (res?.code === 200) {
    return { isAuthenticated: true, successResponse };
  }
  if (res?.code === 401 || res?.code === 402) {
    const generateResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/generate-token`,
      {
        method: 'POST',
        body: {
          refreshToken: token.split('#')?.[1],
          userId: token.split('#')?.[2],
        },
      }
    );
    const response = await generateResponse?.json();

    if (response.code === 200) {
      successResponse.cookies.set(
        process.env.NEXT_PUBLIC_COOKIE_NAME,
        'set the new token here'
      );
      return { isAuthenticated: true, successResponse };
    }
    // failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
    return { isAuthenticated: false, failureResponse };
  }
  failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
  return { isAuthenticated: false, failureResponse };
}

async function authenticateUser(req) {
  const failureResponse = NextResponse.redirect(new URL('/login', req.url));
  const successResponse = NextResponse.redirect(new URL('/homepage', req.url));

  let token = req.cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME);
  if (token && token?.value) {
    token = atob(token.value);
    return verifyToken(token, successResponse, failureResponse);
  }
  // failureResponse.cookies.delete(process.env.NEXT_PUBLIC_COOKIE_NAME);
  return { isAuthenticated: false, failureResponse }; // return false if token is not verified
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.match(/\.(.*)$/)) return; // prevent middleware running on public files
  const isPath = pathname === '/login' || pathname.includes('/sign-up');
  const { isAuthenticated, successResponse, failureResponse } =
    await authenticateUser(request);
  if (!isPath && !isAuthenticated) {
    return failureResponse;
  }
  if (isPath && isAuthenticated) {
    return successResponse;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
