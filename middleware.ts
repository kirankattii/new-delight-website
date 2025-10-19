import { NextRequest, NextResponse } from 'next/server';

function generateNonce(): string {
  try {
    const webCrypto: any = (globalThis as any).crypto;
    // Prefer crypto.randomUUID when available (Edge-compatible in modern runtimes)
    if (webCrypto && typeof webCrypto.randomUUID === 'function') {
      return webCrypto.randomUUID();
    }
    // Fallback to getRandomValues
    if (webCrypto && typeof webCrypto.getRandomValues === 'function') {
      const array = new Uint8Array(16);
      webCrypto.getRandomValues(array);
      // Convert to hex string
      return Array.from(array)
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch {
    // Ignore and fallback below
  }
  // Last resort non-crypto fallback
  return 'nonce-' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function middleware(request: NextRequest) {
  try {
    const nonce = generateNonce();

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
  } catch {
    // Never break requests due to middleware errors; pass through
    return NextResponse.next();
  }
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
