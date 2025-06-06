import Logo from '@/assets/logo.svg';
import MainNavigation from './MainNavigation';
import Cta from './Cta';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header bg-white/30 backdrop-blur-2xl fixed top-0 start-0 w-full z-100 border-b border-primary">
      <div className="site-nav container max-w-6xl px-6 py-4 mx-auto flex items-center justify-between">
        <div className="site-branding">
          <Link href="/" className='site-branding__logo'>
            <Logo width={40} height={40} className="site-branding__logo" />
          </Link>
        </div>
        <div className='site-cta flex items-center gap-2 md:order-2'>
          <Cta href="#" variant="secondary">Get Started</Cta>
        </div>
        <div className='site-navigation items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id="navbar-cta">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
