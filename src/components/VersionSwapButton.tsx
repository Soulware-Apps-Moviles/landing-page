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
        <Link href={version == 'customers' ? 'stores' : 'customers'}>
            <button
                className={`absolute bottom-8 right-8 text-white p-4 rounded-xl shadow-lg flex items-center transition hover:brightness-90 bg-black`}
            >
                <span>{label}</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
            </button>
        </Link>
    );
}