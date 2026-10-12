"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Prediction', href: '/prediction' },
    { label: 'Datasets', href: '/datasets' },
    { label: 'Models', href: '/models' },
    { label: 'Reports', href: '/reports' },
    { label: 'About', href: '/about' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="topbar">
            <Link className="brand-wrap" href="/" onClick={() => setMenuOpen(false)}>
                <div className="brand-mark" aria-hidden="true">
                    <span className="brand-mark-inner" />
                </div>
                <span className="brand-title">Industrial Machine Anomaly Detection</span>
            </Link>

            <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
                <span />
            </button>

            <nav
                id="main-navigation"
                className={`main-nav${menuOpen ? ' nav-open' : ''}`}
                aria-label="Main navigation"
            >
                {navItems.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className={pathname === href ? 'nav-link active' : 'nav-link'}
                        aria-current={pathname === href ? 'page' : undefined}
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </nav>

            <Link className="upload-button" href="/prediction">
                ⤴ Upload Data
            </Link>
        </header>
    );
};

export default Header;
