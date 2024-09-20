import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsGrid, BsStar } from "react-icons/bs";

const MenuBar = () => {
  const [active, setActive] = useState("home");
  const [stylistActive, setStylistActive] = useState(false);

  return (
    <div className="z-50 pt-2 fixed -bottom-1 w-full bg-white flex justify-around items-center border-t shadow-lg">
      {/* Home Icon */}
      <button
        className={`flex flex-col items-center ${
          active === "home" ? "text-blue-500" : ""
        }`}
        onClick={() => setActive("home")}
      >
        <AiOutlineHome className="text-3xl" />
        <span className="text-sm mt-1 pb-4">Home</span>
      </button>

      {/* Categories Icon */}
      <button
        className={`flex flex-col items-center ${
          active === "categories" ? "text-blue-500" : ""
        }`}
        onClick={() => setActive("categories")}
      >
        <BsGrid className="text-3xl" />
        <span className="text-sm mt-1 pb-4">Categories</span>
      </button>

      {/* Speak to Stylist (Profile) */}
      <div className="relative flex flex-col items-center -mt-6">
        <button
          className={`${stylistActive ? "" : "rounded-full "}`}
          onClick={() => {
            setActive("stylist");
            setStylistActive(!stylistActive);
          }}
        >
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Stylist"
            className="w-14 h-14 rounded-full border-2 border-blue-600 object-cover"
          />
        </button>
        <span
          className={`pb-4 font-bold text-sm mt-0.5 ${
            active === "stylist" ? "text-blue-500" : ""
          }`}
        >
          Speak to stylist
        </span>
      </div>

      {/* Occasions Icon */}
      <button
        className={`flex flex-col items-center ${
          active === "occasions" ? "text-blue-500" : ""
        }`}
        onClick={() => setActive("occasions")}
      >
        <BsStar className="text-3xl" />
        <span className="text-sm mt-1 pb-4">Occasions</span>
      </button>

      {/* Search Icon */}
      <button
        className={`flex flex-col items-center ${
          active === "search" ? "text-blue-500" : ""
        }`}
        onClick={() => setActive("search")}
      >
        <AiOutlineSearch className="text-3xl" />
        <span className="text-sm mt-1 pb-4">Search</span>
      </button>
    </div>
  );
};

export default MenuBar;
