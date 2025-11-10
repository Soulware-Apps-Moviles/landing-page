import {ReactNode} from "react";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {Locale} from "next-intl";
import {notFound} from "next/navigation";

const VALID_VERSIONS = ['customers', 'stores'];

// Used for dynamic page metadata based on the current version and language requested
export async function generateMetadata(props: Omit<LayoutProps<'/[locale]/[version]'>, 'children'>): Promise<Metadata> {
    const { locale, version } = await props.params;

    if (!VALID_VERSIONS.includes(version)) {
        notFound();
    }

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: 'metadata'
    });

    const key = version;

    return {
        title: t(`${key}.title`),
        description: t(`${key}.description`),
        keywords: t(`${key}.keywords`).split(',').map((k) => k.trim()),
        authors: [{ name: t(`${key}.author`) }]
    };
}

type AppVersionProps = {
    children: ReactNode;
};

export default function VersionLayout({children}: AppVersionProps) {
    return children;
}
