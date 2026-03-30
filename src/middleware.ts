import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n.config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Let sitemap and robots.txt pass through without locale prefixes
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt' || pathname === '/sitemap.ts') {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /about
    // The new URL is now /en/about
    return NextResponse.redirect(
      new URL(`/${i18n.defaultLocale}${pathname === '/' ? '' : pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` and static assets
  matcher: ['/((?!api|_next/static|_next/image|images|fonts|favicon.ico|.*\\.).*)'],
};
