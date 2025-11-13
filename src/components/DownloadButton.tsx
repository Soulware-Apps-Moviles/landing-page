"use client";

import Image from "next/image";
import Link from "next/link";
import {getDownloadUrl, Version} from "@/i18n/routing";

interface DownloadButtonProps {
    label: string;
    version: Version;
}

export default function DownloadButton({ label, version }: DownloadButtonProps) {
    return (
        <Link
            href={getDownloadUrl(version)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 md:mt-[16px]"
        >
            <button
                className={`
                  flex items-center justify-center gap-2 md:gap-3
                  px-4 py-3 md:px-8 md:py-5
                  bg-black text-white font-semibold
                  border border-white rounded-xl
                  shadow-lg
                  transition-all
                  hover:scale-[1.03] hover:brightness-110 hover:shadow-2xl
                  active:scale-[0.98]
                `}
            >
                <span className="text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] tracking-wide">
                    {label}
                </span>
                <Image
                    src="/download-icon.svg"
                    alt="Download icon"
                    width={20}
                    height={20}
                    className="inline-block align-middle md:w-[24px] md:h-[24px]"
                />
            </button>
        </Link>
    );
}