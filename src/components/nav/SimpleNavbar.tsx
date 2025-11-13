'use client';

import { useState } from 'react';
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import NavToggle from './NavToggle';
import NavMobileMenu from './NavMobileMenu';
import { Version } from "@/i18n/routing";

interface SimpleNavBarProps {
    version: Version;
}

export default function SimpleNavBar({ version }: SimpleNavBarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
            <div className="flex items-center justify-between md:justify-start px-6 py-4">
                <NavLogo version={version} />
                <NavLinks version={version} className="hidden md:flex ml-auto" showLinks={false} />
                <NavToggle open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
            </div>
            <NavMobileMenu version={version} open={menuOpen} showLinks={false}/>
        </nav>
    );
}
