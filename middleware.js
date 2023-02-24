import { NextResponse } from 'next/server';

async function verifyToken(token, user, successResponse, failureResponse) {
  
  const res = await fetch('https://api-dev.y-axis.com/auth/verify-token', {
    headers: new Headers({
      Authorization: token.split('#')?.[1],
    }),
  })

  if (res?.code === 200) {
    return { isAuthenticated: true, successResponse };
  }
  if (res?.code === 401 || res?.code === 402) {
    const response = await fetch(
      'https://api-dev.y-axis.com/auth/generate-token',
      {
        method: 'POST',
        body: {
          refreshToken: token.split('#')?.[0],
          userId: JSON.parse(user).guid,
        },
      }
    )
    if (response.code === 200) {
      successResponse.cookies.set("token", "set the new token here")
      return { isAuthenticated: true, successResponse };
    }
    failureResponse.cookies.delete("token")
    return { isAuthenticated: false, failureResponse };
  }
  failureResponse.cookies.delete("token")
  return { isAuthenticated: false, failureResponse };
}

async function authenticateUser(req) {
  const successResponse = NextResponse.redirect(new URL('/login', req.url));
  const failureResponse = NextResponse.redirect(new URL('/homepage', request.url));

  const token = req.cookies.get('token');
  const user = req.cookies.get('user');
  if (token && token?.value) {
    return await verifyToken(token.value, user.value, successResponse, failureResponse);
  }
  failureResponse.cookies.delete("token")
  return { isAuthenticated: false, failureResponse }; // return false if token is not verified
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.match(/\.(.*)$/)) return; // prevent middleware running on public files

  const isPath = pathname.includes('/login') || pathname.includes('/sign-up');
  const { isAuthenticated, response } = await authenticateUser(request);
  if (!isPath && !isAuthenticated) {
    return response;
  }
  if (isPath && isAuthenticated) {
    return response
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
