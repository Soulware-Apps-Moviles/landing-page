"use client";

import {getDownloadUrl, Version} from "@/i18n/routing";
import NavLogo from "@/components/nav/NavLogo";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import Image from "next/image";

interface FooterProps {
    version: Version;
}

export default function Footer({ version }: FooterProps) {
    const t = useTranslations("footer");

    return (
        <footer className="bg-black text-white flex flex-col p-6 lg:py-12 lg:px-20 gap-8">
            <div className="flex justify-center lg:justify-start items-center">
                <NavLogo version={version} />
            </div>

            <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[48px]">
                <div className="flex flex-col items-center lg:items-start w-full max-w-[260px] gap-4 lg:flex-1">
                    <h3 className="text-[18px] font-semibold text-center lg:text-left">{t("contact.title")}</h3>

                    <div className="flex flex-col w-full gap-2">
                        <a
                            href={`mailto:${t("contact.email")}`}
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 text-[16px] leading-[24px] hover:underline w-full"
                        >
                            <Image
                                src="/mail-icon.svg"
                                alt="Email icon"
                                width={24}
                                height={24}
                                className="inline-block align-middle"
                            />
                            <span className="align-middle">{t("contact.email")}</span>
                        </a>

                        <a
                            href="https://wa.me/51958432741"
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 text-[16px] leading-[24px] hover:underline w-full"
                        >
                            <Image
                                src="/whatsapp-logo.svg"
                                alt="WhatsApp icon"
                                width={24}
                                height={24}
                                className="inline-block align-middle"
                            />
                            <span className="align-middle">{t("contact.phone")}</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full max-w-[260px] gap-4 lg:flex-1">
                    <h3 className="text-[18px] font-semibold text-center lg:text-left">{t("about.title")}</h3>

                    <div className="flex flex-col w-full gap-2 text-[16px] leading-[24px]">
                        <Link
                            href={`/${version}/terms-and-conditions`}
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 hover:underline w-full"
                        >
                            {t("about.terms")}
                        </Link>
                        <Link
                            href={`/${version}/privacy-policy`}
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 hover:underline w-full"
                        >
                            {t("about.privacy")}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start w-full max-w-[260px] gap-4 lg:flex-1">
                    <h3 className="text-[18px] font-semibold text-center lg:text-left">{t("download.title")}</h3>

                    <div className="flex flex-col w-full gap-2 text-[16px] leading-[24px]">
                        <Link
                            href={getDownloadUrl(version)}
                            className="flex flex-row items-center justify-center lg:justify-start gap-2 hover:underline w-full"
                        >
                            {t("download.label")}
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center lg:text-start">
                <p className="text-sm text-gray-400">{t("copyNotice")}</p>
            </div>
        </footer>
    );
}
