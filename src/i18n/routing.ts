import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/customers': {
      es: '/clientes'
    },
    '/stores': {
      es: '/bodegas'
    }
  }
});
