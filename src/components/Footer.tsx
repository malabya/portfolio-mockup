import Link from "next/link";
import Logo from "@/assets/logo-light.svg";
import IconLink from "./IconLink";

export default function Footer() {
  return (
    <footer className="site-footer bg-dark py-8 md:py-16">
      <div className="container max-w-6xl px-6 mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className='site-branding__logo'>
            <Logo width={40} height={40} className="site-branding__logo" />
          </Link>
          <div className="flex flex-col gap-0">
            <span className="text-lg font-metro text-gray-100">Malabya</span>
            <span className="text-sm text-gray-300">Acquia Certified Drupal Expert</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IconLink href="#" icon="/images/drupal.svg" alt="Drupal" />
          <IconLink href="#" icon="/images/github.svg" alt="Github" />
          <IconLink href="#" icon="/images/linkedin.svg" alt="LinkedIn" />
          <IconLink href="#" icon="/images/x.svg" alt="X" />
        </div>
      </div>
      <div className="container max-w-6xl mx-auto px-6 mt-6 pt-6 border-t border-white md:border-none">
        <div className="text-sm text-gray-300">Powered by <Link href='drupal.org' target="_blank">Drupal</Link>. &copy; 2025 imalabya.dev</div>
      </div>
    </footer>
  )
}
