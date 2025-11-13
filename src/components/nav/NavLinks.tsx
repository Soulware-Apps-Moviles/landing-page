import Link from 'next/link';
import LocaleSwitcher from "@/components/nav/LocaleSwitcher";
import {Version} from "@/i18n/routing";
import VersionSwitcher from "@/components/nav/VersionSwitcher";

interface NavLinksProps {
    version: Version;
    items?: { href: string; label: string }[];
    className?: string;
    showLinks?: boolean;
}

export default function NavLinks({ version, items = [], className, showLinks = true}: NavLinksProps) {
    return (
        <div className={`items-center gap-8 text-[16px] font-medium ${className}`}>
            {showLinks &&
                items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="hover:opacity-80 transition-opacity"
                    >
                        {item.label}
                    </Link>
                ))}
            <VersionSwitcher version={version}/>
            <LocaleSwitcher />
        </div>
    );
}
