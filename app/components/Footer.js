import Link from 'next/link';
import './Footer.css';


export default function Footer() {
    return (
        <footer className="site-footer">
            <Link href="/" className="footer-brand">
                <span className="brand-mark" aria-hidden="true"><span className="brand-mark-inner" /></span>
                <span><strong>Industrial Machine Anomaly Detection</strong><small>Towards safer, smarter and more reliable industrial operations.</small></span>
            </Link>
            <nav className="footer-socials" aria-label="Social links">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook profile link" title="Facebook">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.6V3.5c-.8-.1-1.7-.2-2.6-.2-2.7 0-4.5 1.6-4.5 4.6v2H6.8V13h2.8v8z" /></svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile link" title="GitHub">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.5v-2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.3 3.2 1.6.1-.7.5-1.2.8-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-3 0 0 .9-.3 3.1 1.1a10.6 10.6 0 0 1 5.6 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.6.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v2.9c0 .3.2.6.8.5A11.1 11.1 0 0 0 12 .9z" /></svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile link" title="LinkedIn">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.4a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v6.4h-3.7v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9.3V9Z" /></svg>
                </a>
            </nav>
            <span className="footer-copyright">Copyright © Made by Dhanashri Pawar. Deployed on 2026.</span>
        </footer>
    );
}
