import React from "react";

const Navbar = () => {
  return (
    <nav className="flex lg:flex-row flex-col lg:justify-between items-center bg-black text-indigo-300 lg:px-10 py-5">
      <div className="logo">
        <h3 className="uppercase font-bold text-4xl">
          J<span className="text-orange-600">oshi</span>m
        </h3>
      </div>
      <ul className="flex lg:gap-5">
        <li className="text-xl hover:bg-indigo-400 hover:text-black px-3 py-2">
          Portfolio
        </li>
        <li className="text-xl hover:bg-indigo-400 hover:text-black px-3 py-2">
          Blogs
        </li>
        <li className="text-xl hover:bg-indigo-400 hover:text-black px-3 py-2">
          About Me
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
