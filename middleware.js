import { NextResponse } from 'next/server';

export function middleware(request) {
  const isUnderConstruction = process.env.UNDER_CONSTRUCTION === 'true';
  const pathname = request.nextUrl.pathname;

  if (isUnderConstruction) {
    if (pathname === '/under-construction') {
      return NextResponse.next();
    }
    
    if (pathname.startsWith('/register')) {
      return NextResponse.next();
    }
    
    if (pathname.startsWith('/_next') || 
        pathname.startsWith('/api') || 
        pathname.startsWith('/favicon') ||
        pathname.startsWith('/apple-icon') ||
        pathname.startsWith('/icon') ||
        pathname.startsWith('/manifest.json') ||
        pathname.startsWith('/robots.txt') ||
        pathname.startsWith('/sitemap')) {
      return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL('/under-construction', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
