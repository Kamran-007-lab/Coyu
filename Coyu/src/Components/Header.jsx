import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex justify-between gap-x-5 items-center shadow-md w-full overflow-x-hidden">
      <HiBars3 className="text-2xl" />
      <h1 className="text-coyu-blue text-5xl font-hanken font-bold">COYU</h1>
      <FiShoppingBag className="text-2xl" />
      <div className="hidden">
        <button className="text-coyu-blue">Menu</button>
      </div>
    </header>
  );
};

export default Header;
