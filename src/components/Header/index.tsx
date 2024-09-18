import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoDark from "../../assets/logo-dark.svg";
import logoLight from "../../assets/logo-light.svg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "About Me", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Header = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(activeTheme);
  };

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <header className="border-b-2 border-primary-dark px-4 dark:border-primary-light sm:px-6 lg:px-8">
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <Link to="/">
              {activeTheme === "dark" ? (
                <img src={logoDark} className="w-36" alt="Dark Logo" />
              ) : (
                <img src={logoLight} className="w-36" alt="Dark Logo" />
              )}
            </Link>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <nav className="flex items-baseline space-x-4">
              {navLinks.map((nav) => (
                <Link
                  key={nav.title}
                  to={nav.link}
                  className="rounded-md px-4 font-roboto text-lg font-bold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-primary-dark"
                  aria-label={nav.title}
                >
                  {nav.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex h-16 items-center gap-4">
            {/* theme switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Theme Switcher"
              className="cursor-pointer rounded-md bg-primary-light p-2 shadow-sm dark:bg-ternary-dark"
            >
              {activeTheme === "dark" ? (
                <FiMoon className="text-2xl text-ternary-dark hover:text-gray-400" />
              ) : (
                <FiSun className="text-2xl text-gray-200 hover:text-white" />
              )}
            </button>
            {/* hamburguer button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Open Main Menu"
              className="rounded-md p-2 text-2xl text-primary-dark hover:bg-primary-light dark:text-primary-light dark:hover:bg-ternary-dark md:hidden"
            >
              {openMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
      {/* mobile navlinks */}
      {openMenu ? (
        <div className="border-b-2 border-primary-dark dark:border-primary-light md:hidden">
          <nav className="space-y-1 px-4 pb-3 pt-3 sm:px-3">
            {navLinks.map((nav) => (
              <Link
                key={nav.title}
                to={nav.link}
                className="flex justify-center rounded-md font-roboto text-lg font-bold text-primary-dark transition-all duration-500 hover:bg-primary-dark hover:text-primary-light dark:text-primary-light dark:hover:bg-primary-light dark:hover:text-primary-dark"
                aria-label={nav.title}
              >
                {nav.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default Header;
