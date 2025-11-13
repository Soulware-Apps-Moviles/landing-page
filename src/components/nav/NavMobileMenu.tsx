import Link from 'next/link';
import LocaleSwitcher from "@/components/nav/LocaleSwitcher";
import {Version} from "@/i18n/routing";
import VersionSwitcher from "@/components/nav/VersionSwitcher";

interface NavMobileMenuProps {
    version: Version;
    open: boolean;
    items?: { href: string; label: string }[];
    showLinks?: boolean;
}

export default function NavMobileMenu({ version, open, items = [], showLinks = true}: NavMobileMenuProps) {
    if (!open) return null;

    return (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 text-[16px] font-medium bg-black">
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
