import {getLocale, getTranslations} from "next-intl/server";
import VersionSwapButton from "@/components/VersionSwapButton";
import {Version} from "@/i18n/routing";
import './Sections.css'

interface HeroSectionProps {
    version: Version;
}

export default async function HeroSection({ version }: HeroSectionProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'hero' });

    return (
        <section className={`heroSection relative flex items-center justify-start px-0 sm:px-[40px] text-white ${version}`}>
            <div>
                <h1 className="text-[24px] leading-[32px] sm:text-[32px] sm:leading-[48px] md:text-[60px] md:leading-[90px] font-bold">
                    {t.rich(`${version}.title`, { br: () => <br /> })}
                </h1>

                <p className="mt-4 text-[12px] leading-[18px] sm:text-[24px] sm:leading-[36px] md:text-[32px] md:leading-[48px]">
                    {t.rich(`${version}.description`, { br: () => <br /> })}
                </p>
            </div>
            <VersionSwapButton label={t(`${version}.version-swap`)} version={version}/>
        </section>
    );
}