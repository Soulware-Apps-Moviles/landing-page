import {Version} from "@/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import FeatureCard, {FeatureCardProps} from "@/components/FeatureCard";

interface FeatureProps {
    version: Version;
}

export default async function Features({ version }: FeatureProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: "features" });

    const features: FeatureCardProps[] = Array.from({ length: Number(3) }).map((_, i) => ({
        header: t(`${version}.${i + 1}.header`),
        text: t(`${version}.${i + 1}.text`),
        imageSrc: `/images/${version}-feature-${i + 1}.webp`,
        orientation: i % 2 === 0 ? "left" : "right",
    }));

    console.log(features[1].imageSrc)

    return (
        <section className="w-full px-[120px] py-[80px] space-y-16">
            <h2 className="text-4xl font-bold text-center mb-6">
                {t("title")}
            </h2>
            <p className="text-center text-lg text-gray-800 mb-12">
                {t(`${version}.description`)}
            </p>

            <div className="flex flex-col gap-20">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} {...feature} />
                ))}
            </div>
        </section>
    );
}