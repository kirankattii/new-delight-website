import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Generate a random nonce compatible with the Edge runtime
  const nonce = crypto.randomUUID();

  // Forward the nonce to the downstream request
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  // Create response and attach forwarded request headers
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Expose nonce to the application via response headers
  response.headers.set('x-nonce', nonce);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
