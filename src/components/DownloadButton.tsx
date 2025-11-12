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
            className="inline-block mt-3 sm:mt-[16px]"
        >
            <button
                className={`
                  flex items-center justify-center gap-2 sm:gap-3
                  px-4 py-3 sm:px-8 sm:py-5
                  bg-black text-white font-semibold
                  border border-white rounded-xl
                  shadow-lg
                  transition-all
                  hover:scale-[1.03] hover:brightness-110 hover:shadow-2xl
                  active:scale-[0.98]
                `}
            >
                <span className="text-[14px] leading-[20px] sm:text-[18px] sm:leading-[28px] tracking-wide">
                    {label}
                </span>
                <Image
                    src="/download-icon.svg"
                    alt="Download icon"
                    width={20}
                    height={20}
                    className="inline-block align-middle sm:w-[24px] sm:h-[24px]"
                />
            </button>
        </Link>
    );
}