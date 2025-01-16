import { NextResponse } from "next/server";
import { i18n } from "../i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale in the pathname
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
