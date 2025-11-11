'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {Link} from "@/i18n/navigation";
import {Version} from "@/i18n/routing";

interface VersionSwapButtonProps {
    label: string;
    version: Version;
}

export default function VersionSwapButton({ label, version }: VersionSwapButtonProps) {
    return (
        <Link href={version === 'customers' ? 'stores' : 'customers'}>
            <button
                className={`
                    absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-6 md:right-6
                    text-white rounded-xl shadow-lg flex items-center transition hover:brightness-90 
                    bg-black
                    px-4 py-2 sm:px-6 sm:py-4
                `}
            >
                <span className="text-[9px] leading-[11px] sm:text-[16px] sm:leading-[24px] md:text-[20px] md:leading-[30px]">
                    {label}
                </span>
                <FontAwesomeIcon icon={faArrowRight} className="hidden sm:inline ml-4" />
            </button>
        </Link>
    );
}