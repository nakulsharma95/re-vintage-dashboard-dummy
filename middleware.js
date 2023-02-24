import { NextResponse } from 'next/server';

async function verifyToken(token, user, resp) {
  resp.cookies.delete('token');
  const res = await fetch('https://api-dev.y-axis.com/auth/verify-token', {
    headers: new Headers({
      Authorization: token.split('#')?.[1],
    }),
  }).then((response) => response.json());

  console.log(res, 'response-verify');
  if (res?.code === 200) {
    return { isAuthenticated: true };
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
    ).then((generateTokenResponse) => generateTokenResponse.json());
    console.log(response, 'response-verify');
    if (response.code === 200) {
      return { isAuthenticated: true };
    }
    return { isAuthenticated: false, resp };
  }
  return { isAuthenticated: false, resp };
}

async function authenticateUser(req) {
  const resp = NextResponse.redirect(new URL('/login', req.url));
  const token = req.cookies.get('token');
  const user = req.cookies.get('user');
  if (token && token?.value) {
    return await verifyToken(token.value, user.value, resp);
  }
  return { isAuthenticated: false, resp }; // return false if token is not verified
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.match(/\.(.*)$/)) return; // prevent middleware running on public files

  const isPath = pathname.includes('/login') || pathname.includes('/sign-up');
  const { isAuthenticated, resp } = await authenticateUser(request);
  console.log(isAuthenticated, isPath, resp, 'isAuthenticated');
  if (!isPath && !isAuthenticated) {
    console.log('redirecting to /login');
    return resp;
  }
  if (isPath && isAuthenticated) {
    return NextResponse.redirect(new URL('/homepage', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico).*)'],
};
