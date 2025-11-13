'use client';

import React from "react";
import {Link} from "@/i18n/navigation";
import {Version} from "@/i18n/routing";
import {useTranslations} from "next-intl";

interface VersionSwitcherProps {
    version: Version;
}

export default function VersionSwitcher({ version }: VersionSwitcherProps) {
    const t = useTranslations('version-switcher');

    return (
        <Link href={version === 'customers' ? 'stores' : 'customers'} className="hover:opacity-80 transition-opacity">
            {t(version)}
        </Link>
    );
}