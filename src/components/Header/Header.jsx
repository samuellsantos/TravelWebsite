import React from 'react';
import './header.css';
import { FaUserCircle, FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { BsChevronCompactRight } from 'react-icons/bs';

export const Header = () => {
  return (
    <>
      <header className="xl:px-52 bg-[#0b1d27b9] text-white flex items-center justify-between h-12  lg:px-2 md:px-2">
        {/* CONTACT SECTION */}
        <section className="flex items-center gap-x-3">
          <FaRegEnvelope />
          <span>hellotravel@gmail.com</span>
          <FiPhone />
          <span>+123 45678 912</span>
        </section>

        {/* USER SECTION */}
        <section className="flex items-center gap-x-3 cursor-pointer">
          <FaUserCircle />
          <span>My Account</span>
        </section>
      </header>

      {/* NAVBAR */}
      <nav className="xl:mx-52 mt-5 border-2 border-white rounded flex justify-between items-center text-white p-2 bg-transparent-black2 lg:mx-2 md:mx-2">
        <div className="logo">
          <h1 className="text-lg font-bold">TRAVEL</h1>
        </div>
        <div className="navItems">
          <ul className="flex gap-x-5 items-center ">
            <li className="navLinks">About Us</li>
            <li className="navLinks">Destinations</li>
            <li className="navLinks">Packages</li>
            <li className="navLinks">Tour Guides</li>
            <li className="navLinks">Tour Guides</li>
            <li className="navLinks">Blogs</li>
            <li className="navLinks">Contact</li>
            <li>
              <a
                href="#"
                className="flex items-center bg-[#00C2C5] p-3 rounded transition duration-150 ease-out hover:bg-[#00c2c5d1] "
              >
                Book Now <BsChevronCompactRight />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
