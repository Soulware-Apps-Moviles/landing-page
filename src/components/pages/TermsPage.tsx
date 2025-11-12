import Footer from "@/components/sections/Footer";
import { Version } from "@/i18n/routing";
import SimpleNavBar from "@/components/nav/SimpleNavbar";
import { getLocale, getTranslations } from "next-intl/server";

interface TermsPageProps {
    version: Version;
}

export default async function TermsPage({ version }: TermsPageProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: "terms-and-conditions" });

    return (
        <>
            <SimpleNavBar version={version} />
            <section className="mt-[72px] sm:mt-[92px] max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
                <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>

                <p className="mb-4">
                    {t.rich("intro", {
                        strong: (children) => <strong>{children}</strong>,
                    })}
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section1.title")}</h2>
                <p className="mb-4">{t("section1.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section2.title")}</h2>
                <p className="mb-4">{t("section2.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section3.title")}</h2>
                <p className="mb-4">{t.rich("section3.description", {
                    strong: (children) => <strong>{children}</strong>,
                    a: (children) => (
                        <a
                            href="mailto:soporte@tcompro.app"
                            className="text-blue-600 hover:underline"
                        >
                            {children}
                        </a>
                    ),
                })}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section4.title")}</h2>
                <p className="mb-4">{t("section4.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section5.title")}</h2>
                <p className="mb-4">{t("section5.description")}</p>

                <p className="mt-8 text-sm text-gray-500">{t("lastUpdated")}</p>
            </section>
            <Footer version={version} />
        </>
    );
}
