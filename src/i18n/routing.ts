import {defineRouting} from 'next-intl/routing';
import {Locale} from "next-intl";

export type Version = 'customers' | 'stores';

export const CUSTOMER_VERSION_DOWNLOAD_URL = "https://appdistribution.firebase.dev/i/00027c3ed9fa7c2d"
export const STORES_VERSION_DOWNLOAD_URL = ""

export function getDownloadUrl(version : Version) {
    return version == "customers" ? CUSTOMER_VERSION_DOWNLOAD_URL : STORES_VERSION_DOWNLOAD_URL;
}

type LocalizedPathnames = {
    [key: string]: string | Partial<Record<Locale, string>>;
};

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
        '/customers': {
            en: '/customers',
            es: '/clientes'
        },
        '/customers/privacy-policy': {
            en: '/customers/privacy-policy',
            es: '/clientes/política-de-privacidad'
        },
        '/customers/terms-and-conditions': {
            en: '/customers/terms-and-conditions',
            es: '/clientes/términos-y-condiciones'
        },
        '/stores': {
            en: '/stores',
            es: '/bodegas'
        },
        '/stores/privacy-policy': {
            en: '/stores/privacy-policy',
            es: '/bodegas/política-de-privacidad'
        },
        '/stores/terms-and-conditions': {
            en: '/stores/terms-and-conditions',
            es: '/bodegas/términos-y-condiciones'
        }
    } as LocalizedPathnames,
});
