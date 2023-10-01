import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { BsFillPersonFill } from 'react-icons/bs';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-11/12 m-auto relative">
      <div className="flex items-center justify-between h-[10vh] ">
        <NavLink to={`/`}>
          <img
            src={logo}
            className="w-12 sm:w-10 h-auto object-cover cursor-pointer "
            alt=""
          />
        </NavLink>

        <ul className="flex items-center gap-x-3">
          <li className="z-50 md:hidden sm:hidden">
            {' '}
            <div className="relative inline-block text-left">
              <p className="text-xs mb-1 text-center text-gray-700">
                Login / Signup
              </p>
              <button
                type="button"
                className="inline-flex justify-center  w-full px-4 py-1 text-sm font-medium transition-all ease-in-out duration-500 text-gray-700 border border-gray-300 rounded-md shadow-sm "
                onClick={toggleDropdown}>
                My account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ml-2 transition-transform duration-200 transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="origin-top-right select-none rounded-lg p-3 absolute top-14 transition-all ease-in-out duration-500 -right-32 shadow-lg  ring-opacity-5 z-50">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div
                      href="#"
                      className="block  text-sm max-w-5xl max-h-[50rem] text-gray-700  hover:text-gray-900"
                      role="menuitem">
                      <h2 className="text-xl font-bold text-center">
                        Login to my account
                      </h2>
                      <p className="text-sm font-bold text-center mt-4">
                        Enter your e-mail and password:
                      </p>
                      <div className="flex flex-col items-center">
                        <input
                          type="email"
                          className="bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 w-[300px] my-3 px-3 py-3"
                          placeholder="Email"
                        />
                        <input
                          type="password"
                          className="bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 w-[300px]  px-3 py-3"
                          placeholder="Password"
                        />
                        <button className="bg-orange-400 focus:ring-2 focus:ring-orange-700  text-white w-[300px] my-3 hover:bg-opacity-90 px-3 py-3">
                          Login
                        </button>
                      </div>{' '}
                      <div>
                        <p className="text-xs text-center">
                          New customer?{' '}
                          <a
                            href="/"
                            className="text-orange-500 hover:underline">
                            Create your account
                          </a>
                        </p>
                        <p className="text-xs text-center my-2">
                          Lost password?{' '}
                          <a
                            className="text-orange-500 hover:underline"
                            href="/">
                            Recover Password
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className="z-50 hidden  md:inline sm:inline">
            {' '}
            <div className="relative inline-block text-left">
              <button
                type="button"
                className=" transition-all ease-in-out duration-500 text-gray-700 "
                onClick={toggleDropdown}>
                <BsFillPersonFill className="w-auto h-5" />
              </button>

              {isOpen && (
                <div className="origin-top-right select-none rounded-lg p-3 absolute top-14 transition-all ease-in-out duration-500 -right-32 shadow-lg  ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <div
                      href="#"
                      className="block  text-sm max-w-5xl max-h-[50rem] text-gray-700  hover:text-gray-900"
                      role="menuitem">
                      <h2 className="text-xl font-bold text-center">
                        Login to my account
                      </h2>
                      <p className="text-sm font-bold text-center mt-4">
                        Enter your e-mail and password:
                      </p>
                      <div className="flex flex-col items-center">
                        <input
                          type="email"
                          className="bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 w-[300px] my-3 px-3 py-3"
                          placeholder="Email"
                        />
                        <input
                          type="password"
                          className="bg-white focus:outline-none focus:ring-1 focus:ring-orange-500 w-[300px]  px-3 py-3"
                          placeholder="Password"
                        />
                        <button className="bg-orange-400 focus:ring-2 focus:ring-orange-700  text-white w-[300px] my-3 hover:bg-opacity-90 px-3 py-3">
                          Login
                        </button>
                      </div>{' '}
                      <div>
                        <p className="text-xs text-center">
                          New customer?{' '}
                          <a
                            href="/"
                            className="text-orange-500 hover:underline">
                            Create your account
                          </a>
                        </p>
                        <p className="text-xs text-center my-2">
                          Lost password?{' '}
                          <a
                            className="text-orange-500 hover:underline"
                            href="/">
                            Recover Password
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li>
            <AiOutlineSearch className="w-auto h-5 cursor-pointer active:scale-105"></AiOutlineSearch>
          </li>
          <li>
            <AiOutlineHeart className="w-auto h-5 cursor-pointer active:scale-105"></AiOutlineHeart>
          </li>
          <li>
            <AiOutlineShoppingCart className="w-auto h-5 cursor-pointer active:scale-105"></AiOutlineShoppingCart>
            <div className="absolute bg-red-600 px-0.5 text-white rounded-full top-2 -right-2">
              0
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
