import Link from "next/link";

export default function MainNavigation() {
  return(
    <nav className="navigation bg-white shadow-2xl  z-20 md:w-full md:shadow-none md:bg-transparent">
      <ul className="menu flex flex-col gap-0 md:flex-row md:items-center md:gap-6">
        <li className="menu__item px-10 py-3 text-right border-b border-gray-200 md:border-none md:px-0 md:py-0">
          <Link href="/" className="text-dark font-semibold hover:text-primary">Home</Link>
        </li>
        <li className="menu__item px-10 text-right py-3 border-b border-gray-200 md:border-none md:px-0 md:py-0">
          <Link href="#" className="text-dark font-semibold hover:text-primary">About</Link>
        </li>
        <li className="menu__item px-10 text-right py-3 border-b border-gray-200 md:border-none md:px-0 md:py-0">
          <Link href="/services" className="text-dark font-semibold hover:text-primary">Offerings</Link>
        </li>
        <li className="menu__item px-10 text-right py-3 md:px-0 md:py-0">
          <Link href="#" className="text-dark font-semibold hover:text-primary">Resources</Link>
        </li>
      </ul>
    </nav>
  )
}
