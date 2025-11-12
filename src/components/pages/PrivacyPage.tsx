import Footer from "@/components/sections/Footer";
import { Version } from "@/i18n/routing";
import SimpleNavBar from "@/components/nav/SimpleNavbar";
import {getLocale, getTranslations} from "next-intl/server";

interface PrivacyPageProps {
    version: Version;
}

export default async function PrivacyPage({ version }: PrivacyPageProps) {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: 'privacy-policy' });

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
                <ul className="list-disc pl-6 mb-4">
                    <li>{t("section1.items.userData")}</li>
                    <li>{t("section1.items.preferences")}</li>
                    <li>{t("section1.items.orderHistory")}</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section2.title")}</h2>
                <p className="mb-4">{t("section2.description")}</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>{t("section2.items.processOrders")}</li>
                    <li>{t("section2.items.improveExperience")}</li>
                    <li>{t("section2.items.contact")}</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section3.title")}</h2>
                <p className="mb-4">
                    {t.rich("section3.description", {
                        a: (children) => (
                            <a
                                href="mailto:soporte@tcompro.app"
                                className="text-blue-600 hover:underline"
                            >
                                {children}
                            </a>
                        ),
                    })}
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section4.title")}</h2>
                <p className="mb-4">{t("section4.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section5.title")}</h2>
                <p className="mb-4">{t("section5.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section6.title")}</h2>
                <p className="mb-4">{t("section6.description")}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t("section7.title")}</h2>
                <p className="mb-4">
                    {t.rich("section7.description", {
                        a: (children) => (
                            <a
                                href="mailto:soporte@tcompro.app"
                                className="text-blue-600 hover:underline"
                            >
                                {children}
                            </a>
                        ),
                    })}
                </p>

                <p className="mt-8 text-sm text-gray-500">{t("lastUpdated")}</p>
            </section>
            <Footer version={version} />
        </>
    );
}
