import {defineRouting} from 'next-intl/routing';
import {Locale} from "next-intl";

export type Version = 'customers' | 'stores';

export const CUSTOMER_VERSION_DOWNLOAD_URL = ""
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
        '/customers': { es: '/clientes' },
        '/stores': { es: '/bodegas' },
    } as LocalizedPathnames,
});
