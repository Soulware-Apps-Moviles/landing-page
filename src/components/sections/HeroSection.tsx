import {getLocale, getTranslations} from "next-intl/server";
import VersionSwapButton from "@/components/VersionSwapButton";
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
        <section className={`heroSection relative flex items-center justify-start px-0 sm:px-[40px] text-white ${version}`}>
            <div className={"px-[16px] lg:px-[0px]"}>
                <h1 className="font-bold">
                    {t.rich(`${version}.title`, { br: () => <br /> })}
                </h1>

                <p className="mt-4">
                    {t.rich(`${version}.description`, { br: () => <br /> })}
                </p>

                <DownloadButton
                    label={t("cta-label")}
                    version={version}
                />
            </div>
            <VersionSwapButton label={t(`${version}.version-swap`)} version={version}/>
        </section>
    );
}