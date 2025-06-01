import Logo from '@/assets/logo.svg';
import MainNavigation from './MainNavigation';
import Cta from './Cta';

export default function Header() {
  return (
    <header className="site-header bg-white fixed top-0 start-0 w-full z-100 border-b border-gray-300">
      <div className="site-nav container max-w-6xl px-4 py-4 mx-auto flex items-center justify-between">
        <div className="site-branding">
          <a href="/" className="site-branding__logo flex items-center gap-2">
            <Logo width={40} height={40} className="site-branding__logo" />
          </a>
        </div>
        <div className='site-cta flex items-center gap-2 md:order-2'>
          {/* <a href="#" className='flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-3xl font-bold border border-primary hover:bg-white hover:text-primary after:content-["\02192"]'>Get in Touch</a> */}
          <Cta href="#" variant="primary">Get Started</Cta>
        </div>
        <div className='site-navigation items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id="navbar-cta">
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}
