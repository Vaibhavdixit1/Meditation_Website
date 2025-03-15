import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black text-white py-4">
      <nav className="mx-auto max-w-screen-xl flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">Guru Atmananda ji</Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <Link href="/" className="px-4">
              Home
            </Link>
            <Link href="/programs" className="px-4">
              Programs
            </Link>
            <Link href="/meditation" className="px-4">
              Meditation
            </Link>
            <Link href="/events" className="px-4">
              Events
            </Link>
            <Link href="/testimonials" className="px-4">
              Experiences
            </Link>
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 focus:outline-none flex items-center"
              >
                Knowledge Archives
                <KeyboardArrowDownIcon />
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-30 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  href="/supramental-yoga-supramentalization"
                  className="block px-4 py-2 border-b hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Superamental Yoga
                </Link>
                <Link
                  href="/podcast"
                  className="block px-4 py-2 border-b hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Podcast
                </Link>
                <Link
                  href="/videos"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Discourses
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-[80%] h-full bg-white text-black shadow-lg z-40 transition-transform duration-300 ease-in-out transform translate-x-0">
          <div className="flex justify-between items-center p-4 border-b">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4">
            <Link
              href="/"
              className="block px-4 py-2 text-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-2 text-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/meditation"
              className="block px-4 py-2 text-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Meditation
            </Link>
            <Link
              href="/events"
              className="block px-4 py-2 text-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/testimonials"
              className="block px-4 py-2 text-lg hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </Link>
            <div className="relative mt-4" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 flex items-center w-full text-left text-lg font-semibold"
              >
                Knowledge Archives
                <KeyboardArrowDownIcon />
              </button>
              <div
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } bg-gray-100 text-black rounded-md shadow-lg mt-2`}
              >
                <Link
                  href="/supramental-yoga-supramentalization"
                  className="block px-4 py-2 border-b hover:bg-gray-200"
                  onClick={() => {
                    closeDropdown();
                    setIsMenuOpen(false);
                  }}
                >
                  Superamental Yoga
                </Link>
                <Link
                  href="/podcast"
                  className="block px-4 py-2 border-b hover:bg-gray-200"
                  onClick={() => {
                    closeDropdown();
                    setIsMenuOpen(false);
                  }}
                >
                  Podcast
                </Link>
                <Link
                  href="/videos"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => {
                    closeDropdown();
                    setIsMenuOpen(false);
                  }}
                >
                  Discourses
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
