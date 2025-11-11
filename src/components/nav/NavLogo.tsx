'use client';

import Link from 'next/link';
import Icon from '@/../public/logo.svg';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Version} from '@/i18n/routing';
import './NavLogo.css'

interface NavLogoProps {
    version: Version;
}

export default function NavLogo({ version }: NavLogoProps) {
    const t = useTranslations('logo');

    return (
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className={"logoLink"}>
                <div className={"textWrapper"}>
                    <span className={"appName"}>{t("app-name")}</span>
                    <span className={version}>{t(version)}</span>
                </div>
                <Image
                    src={Icon}
                    alt={t('alt')}
                    priority
                    className={"icon"}
                />
            </Link>
        </div>
    );
}
