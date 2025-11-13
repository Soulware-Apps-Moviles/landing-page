# T'Compro Landing Page

Official landing page of the **T'Compro** product, a metamarkets platform in MVP phase. This application is built with **TypeScript**, **Next.js (App Router)**, **Tailwind CSS**, and **next-intl** for internationalization (i18n) support.

---

## Project Structure

<pre>
src/
├─ app/              # App router folder
├─ components/       # Reusable UI components
├─ pages/            # Project pages
├─ i18n/             # Internationalization configuration and utilities
│  ├─ request.ts     # Request configuration and dynamic loading of locale messages
│  └─ routing.ts     # Typed routing definitions and helper functions
├─ proxy/            # Proxy logic (formerly known as middleware)
messages/            # Translation JSON files per locale
</pre>

### Internationalization (i18n)

Internationalization has been a central focus of development.
- Dynamic routes use `[locale]` and `[version]`.
- `[version]` indicates the product version (`customers` or `stores`) and points to different interfaces.
- Translation messages are loaded dynamically based on the request locale.

**Example of request.ts:**
<pre>
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
</pre>

---

### Typed Routing (routing.ts)

`routing.ts` defines locale-aware routes and helper functions to ensure type safety and URL consistency.

**Example functions and constants:**
<pre>
import { defineRouting } from 'next-intl/routing';
import { Locale } from "next-intl";

export type Version = 'customers' | 'stores';

export const CUSTOMER_VERSION_DOWNLOAD_URL = ""
export const STORES_VERSION_DOWNLOAD_URL = ""

export function getDownloadUrl(version: Version) {
  return version === "customers" ? CUSTOMER_VERSION_DOWNLOAD_URL : STORES_VERSION_DOWNLOAD_URL;
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const route = routing.pathnames[pathname];
  if (!route) return pathname;
  if (typeof route === 'string') return route;
  return route[locale] ?? pathname;
}

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/customers': { en: '/customers', es: '/clientes' },
    '/customers/privacy-policy': { en: '/customers/privacy-policy', es: '/clientes/política-de-privacidad' },
    '/customers/terms-and-conditions': { en: '/customers/terms-and-conditions', es: '/clientes/términos-y-condiciones' },
    '/stores': { en: '/stores', es: '/bodegas' },
    '/stores/privacy-policy': { en: '/stores/privacy-policy', es: '/bodegas/política-de-privacidad' },
    '/stores/terms-and-conditions': { en: '/stores/terms-and-conditions', es: '/bodegas/términos-y-condiciones' }
  }
});
</pre>

---

## Main Technologies

- **Next.js App Router**: handles routes and server components.
- **TypeScript**: strict typing and safety for functions and routes.
- **Tailwind CSS**: fast and responsive styling.
- **next-intl**: full internationalization support with typed routes and dynamic message loading.

---

## SSR and CSR Usage

To improve SEO for this landing page:
- **Server-Side Rendering (SSR)** is used for pages that need to be indexable by search engines and to serve localized content immediately.
- **Client-Side Rendering (CSR)** is used for interactive components that do not affect SEO, such as modals, forms, or dynamic widgets.

This approach ensures a fast, SEO-friendly landing page while keeping interactive elements dynamic and responsive.

---

## Usage

1. Install dependencies:
<pre>
npm install
# or
yarn install
</pre>

2. Run the project in development:
<pre>
npm run dev
# or
yarn dev
</pre>

3. Access versions and locales:
<pre>
/[locale]/[version]
example: /en/customers or /es/stores
</pre>

---

## Notes

- The app is currently in **MVP phase**, so some routes or features may change.
- The main focus has been **internationalization**, ensuring consistency and type safety across all routes and messages.
- `proxy/` contains logic similar to middleware to handle requests, formerly known as Next.js middleware.

---

## License

This project is owned by **T’Compro** and its use is subject to internal company terms.
