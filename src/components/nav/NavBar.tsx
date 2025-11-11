'use client';

import {useEffect, useState} from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavToggle from './NavToggle';
import NavMobileMenu from './NavMobileMenu';
import {Version} from "@/i18n/routing";
import {useTranslations} from "next-intl";

interface NavBarProps {
    version: Version;
}

export default function NavBar({version}: NavBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const t = useTranslations('navbar');

    const items = [
        { href: '#features', label: t('features') },
        { href: '#reviews', label: t('reviews') },
        ...(version === 'stores' ? [{ href: '#pricing', label: t('pricing') }] : []),
        { href: '#contact', label: t('contact') },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) {
                setScrolled(window.scrollY > 40);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
                menuOpen
                    ? 'bg-black'
                    : scrolled
                        ? 'bg-black/80 backdrop-blur-md'
                        : 'md:bg-transparent bg-black'
            } text-white`}
        >
            <div className="flex items-center justify-between md:justify-start px-6 py-4">
                <NavLogo version={version} />
                <NavLinks items={items} className="hidden md:flex ml-auto" />
                <NavToggle open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
            </div>

            <NavMobileMenu open={menuOpen} items={items} onClose={() => setMenuOpen(false)} />
        </nav>
    );
};
