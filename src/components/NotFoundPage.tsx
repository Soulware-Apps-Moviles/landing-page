import {useTranslations} from 'next-intl';
import PageLayout from './PageLayout';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <PageLayout title={t('title')}>
    </PageLayout>
  );
}
