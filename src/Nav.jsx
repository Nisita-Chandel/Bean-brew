import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Media", path: "/media" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md px-8 md:px-16 py-4">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="h-16 w-16 object-contain"
            src="https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-design-creative-idea-logo-elements-2.png"
            alt="Coffee Logo"
          />
          <h1 className="text-2xl font-bold font-serif text-brown-700">
            Brew Haven
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10 font-serif text-[16px] text-gray-700">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-amber-700 transition duration-300 ${
                  isActive ? "text-amber-700 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-700">
          <i className="ri-search-line cursor-pointer hover:text-amber-700 transition"></i>
          <i className="ri-user-fill cursor-pointer hover:text-amber-700 transition"></i>
          <i className="ri-shopping-cart-2-line cursor-pointer hover:text-amber-700 transition"></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;