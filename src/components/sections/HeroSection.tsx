import {getLocale, getTranslations} from "next-intl/server";
import VersionSwapButton from "@/components/VersionSwapButton";
import {Version} from "@/i18n/routing";

interface HeroSectionProps {
    version: Version;
}

export default async function HeroSection({ version }: HeroSectionProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'hero' });

    return (
        <section className="relative flex items-center justify-start min-h-screen px-0 md:px-[40px] text-white">
            <div>
                <h1 className="text-[12px] leading-[18px] md:text-6xl md:leading-[90px] font-bold">
                    {t.rich(`${version}.title`, {
                        br: () => <br />,
                    })}
                </h1>
                <p className="mt-4 text-[9px] leading-[14px] md:text-[32px] md:leading-[48px]">
                    {t.rich(`${version}.description`, {
                        br: () => <br />,
                    })}
                </p>
            </div>
            <VersionSwapButton label={t(`${version}.version-swap`)} version={version}/>
        </section>
    );
}