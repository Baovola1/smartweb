import { Link } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logofinal.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Fonction pour fermer le menu en cliquant en dehors du contenu central
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-gray-200 bg-white dark:bg-white dark:border-gray-700 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo et titre */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">SMARTFLEX-IT</span>
        </Link>

        {/* Menu Burger */}
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {menuOpen ? (
            <FontAwesomeIcon icon={faCircleXmark} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="lg" />
          )}
        </button>

        {/* Modal pour les liens du menu (pour mobile) et navigation classique pour desktop */}
        <div className={`${menuOpen ? 'fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50' : 'hidden md:flex md:items-center md:justify-between'}`} onClick={menuOpen ? closeMenu : undefined}>
          <div className={`${menuOpen ? 'block' : 'hidden md:block'}`} onClick={(e) => e.stopPropagation()}>
            <ul className="flex flex-col md:flex-row font-medium bg-white rounded-lg p-5 space-y-4 md:space-y-0 md:p-0 md:bg-transparent shadow-lg md:shadow-none">
              <li>
                <Link to="/service" className="py-2 px-3 md:px-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent">Services</Link>
              </li>
              <li>
                <Link to="/approche" className="py-2 px-3 md:px-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent">Notre Approche</Link>
              </li>
              <li>
                <Link to="/about" className="py-2 px-3 md:px-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link to="/contact" className="py-2 px-3 md:px-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
