import {Version} from "@/i18n/routing";
import {getLocale, getTranslations} from "next-intl/server";
import ReviewCard, {ReviewCardProps} from "@/components/ReviewCard";

interface ReviewProps {
    version: Version;
}

export default async function Reviews({ version }: ReviewProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: "reviews" });

    const reviews: ReviewCardProps[] = Array.from({ length: 3 }).map((_, i) => ({
        name: t(`${version}.${i + 1}.name`),
        location: t(`${version}.${i + 1}.location`),
        comment: t(`${version}.${i + 1}.comment`),
        imageSrc: `/images/${version}-review-${i + 1}.webp`,
    }));

    return (
        <section className="w-full px-[40px] md:px-[80px] lg:px-[120px] py-[80px]">
            <h2 className="text-4xl font-bold text-center mb-6">
                {t("title")}
            </h2>
            <p className="text-center text-lg text-gray-800 mb-12">
                {t(`${version}.description`)}
            </p>

            <div className="flex flex-col lg:flex-row  justify-center items-stretch gap-12">
                {reviews.map((review, idx) => (
                    <div key={idx} className="flex-1 min-w-[280px]">
                        <ReviewCard {...review} />
                    </div>
                ))}
            </div>
        </section>
    );
}