import {getLocale, getTranslations} from "next-intl/server";

interface VideoSectionProps {
    labelKey: string;
    videoId: string;
}

export default async function VideoSection({ labelKey, videoId }: VideoSectionProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: "videoTitles" });

    return (
        <section className="w-full px-[40px] md:px-[80px] lg:px-[120px] py-[80px]">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl font-bold text-center mb-12 text-black">
                    {t(labelKey)}
                </h2>

                <div className="w-full max-w-4xl relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                            title={t(labelKey)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}