import Link from 'next/link';
import LocaleSwitcher from "@/components/nav/LocaleSwitcher";

interface NavLinksProps {
    items?: { href: string; label: string }[];
    className?: string;
    showLinks?: boolean;
}

export default function NavLinks({ items = [], className, showLinks = true}: NavLinksProps) {
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
            <LocaleSwitcher />
        </div>
    );
}
