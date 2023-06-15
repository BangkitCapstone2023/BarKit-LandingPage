import React, { useEffect, useState } from 'react';
import NavbarDropdown from './navbarDropdown';
import PopUp from '../PopUp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  const handleExitClick = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPos);

    return () => {
      window.removeEventListener('scroll', handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className="relative bg-tertiary-300">
      <div className="container mx-auto max-w-[1344px]">
        <div className="relative z-20 flex items-center justify-between h-16 p-5 md:h-20 md:py-6 lg:px-5 bg-tertiary-300">
          {/* Icon */}
          <a href="#">
            <img
              className="w-[124px] h-9 lg:w-[180px] lg:h-[52px] object-cover z-20 relative"
              src="/main-logo.png"
              alt="barkit-icon"
            />
          </a>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`${
              isOpen ? 'open' : ''
            } flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20`}
          >
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-4 bg-black-500 rounded-full"></span>
            <span className="transition-all duration-500 ease-in-out h-[2px] w-5 bg-black-500 rounded-full"></span>
          </div>

          {/* Menu */}
          <div className="items-center hidden text-sm md:flex md:gap-4 lg:gap-8 text-black-200 lg:text-base font-body">
            <a href="#" className="navlink active-navlink">
              Home
            </a>
            <a href="#feature" className="navlink">
              Feature
            </a>
            <a href="#partner" className="navlink">
              Partner
            </a>
            <a href="#team" className="navlink">
              Team
            </a>
            <a href="#footer" className="navlink">
              Social
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:flex md:gap-4 lg:gap-[25px] items-center text-sm lg:text-base font-head font-medium">
            <a href="#">
              <button
                className="text-white bg-primary-100 md:py-2.5 py-3.5 px-[25px]"
                onClick={handleDownloadClick}
              >
                Download
              </button>
            </a>
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>

      <PopUp showPopup={showPopup} handleExitClick={handleExitClick} />
    </nav>
  );
}
