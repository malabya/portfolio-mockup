'use client';

import Logo from '@/assets/logo.svg';
import MainNavigation from './MainNavigation';
import Cta from './Cta';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header bg-white/30 backdrop-blur-2xl fixed top-0 start-0 w-full z-100 border-b border-primary md:border-none">
      <div className="site-nav container max-w-6xl px-6 py-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="site-branding">
          <Link href="/" className='site-branding__logo'>
            <Logo width={40} height={40} className="site-branding__logo" />
          </Link>
        </div>
        <div className='site-cta flex items-center gap-2 md:order-2'>
          <Cta href="#" variant="secondary">Get Started</Cta>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="relative group inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary focus:outline-primary rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>

            {/* Top bar */}
            <span
              className={clsx(
                "absolute h-0.5 w-6 bg-primary transition-all duration-300 ease-in-out",
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              )}
            ></span>

            {/* Middle bar */}
            <span
              className={clsx(
                "absolute h-0.5 w-6 bg-primary transition-all duration-300 ease-in-out",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            ></span>

            {/* Bottom bar */}
            <span
              className={clsx(
                "absolute h-0.5 w-6 bg-primary transition-all duration-300 ease-in-out",
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              )}
            ></span>
          </button>

        </div>
        <div className={`site-navigation w-full md:block translate-0 md:w-auto md:order-1 fixed top-[75px] right-0 md:static ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
