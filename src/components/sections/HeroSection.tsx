import {getLocale, getTranslations} from "next-intl/server";
import DownloadButton from "@/components/DownloadButton";
import {Version} from "@/i18n/routing";
import './Sections.css'

interface HeroSectionProps {
    version: Version;
}

export default async function HeroSection({ version }: HeroSectionProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'hero' });

    return (
        <section className={`heroSection flex flex-col justify-center text-white ${version}`}>
            <div className="h-full flex flex-col sm:w-[90%] md:w-full lg:w-[90%] justify-center px-[16px] sm:px-[40px]">
                <h1 className="font-bold">
                    {t.rich(`${version}.title`, { br: () => <br /> })}
                </h1>

                <p className="mt-4">
                    {t(`${version}.description`)}
                </p>

                <DownloadButton
                    label={t("cta-label")}
                    version={version}
                />
            </div>
        </section>
    );
}