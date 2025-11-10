import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: 'manifest'
  });

    return {
        name: t('name'),
        short_name: t('short_name'),
        description: t('description'),
        start_url: t('start_url'),
        lang: t('lang'),
    };
}
