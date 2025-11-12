import Link from 'next/link';
import LocaleSwitcher from "@/components/nav/LocaleSwitcher";

interface NavMobileMenuProps {
    open: boolean;
    items?: { href: string; label: string }[];
    showLinks?: boolean;
}

export default function NavMobileMenu({ open, items = [], showLinks = true}: NavMobileMenuProps) {
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
            <LocaleSwitcher />
        </div>
    );
}
