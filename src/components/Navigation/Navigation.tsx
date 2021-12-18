import React from 'react';

import { StyledNavLink } from './components';

export const Navigation = () => (
  <nav id="header" className="top-0 z-10 w-full">
    <div className="flex flex-wrap items-center justify-between w-full py-3 mx-auto mt-0 md:max-w-4xl">
      <div className="pl-4">
        <a
          className="text-base font-extrabold text-gray-900 no-underline hover:no-underline"
          href="/"
        >
          <div className="flex items-center">
            <img src="/images/midk.png" alt="website logo" className="object-contain w-8" />
            <span className="h-full ml-3">Mieke in de Keuken</span>
          </div>
        </a>
      </div>

      {/* Mobile */}
      <div className="block pr-4 lg:hidden">
        <button
          id="nav-toggle"
          className="flex items-center px-3 py-2 text-gray-500 border border-gray-600 rounded appearance-none hover:text-gray-900 hover:border-green-500 focus:outline-none"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Desktop */}
      <div
        className="z-20 flex-grow hidden w-full mt-2 bg-gray-100 lg:flex lg:items-center lg:w-auto lg:mt-0 md:bg-transparent"
        id="nav-content"
      >
        <ul className="items-center justify-end flex-1 list-reset lg:flex">
          <li className="mr-3">
            <StyledNavLink to="/list" text="Blog" />
          </li>

          <li className="mr-3">
            <StyledNavLink to="/shop" text="Shop" />
          </li>

          <li className="mr-3">
            <StyledNavLink to="/about" text="About" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
