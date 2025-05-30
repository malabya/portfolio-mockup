export default function MainNavigation() {
  return(
    <nav className="navigation">
      <ul className="menu flex align-middle gap-6">
        <li className="menu__item">
          <a href="#" className="text-gray-900 font-semibold px-2 py-4 hover:text-primary">Home</a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-gray-900 font-semibold px-2 py-4 hover:text-primary">About</a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-gray-900 font-semibold px-2 py-4 hover:text-primary">Services</a>
        </li>
        <li className="menu__item">
          <a href="#" className="text-gray-900 font-semibold px-2 py-4 hover:text-primary">Resources</a>
        </li>
      </ul>
    </nav>
  )
}
