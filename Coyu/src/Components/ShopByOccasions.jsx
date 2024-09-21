import React, { useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { LuPartyPopper } from "react-icons/lu";
import { PiTreePalm } from "react-icons/pi";
import { MdOutlineFestival } from "react-icons/md";
import { BsArrowRightSquareFill } from "react-icons/bs";

const ShopByOccasions = () => {
  const [activeOccasion, setActiveOccasion] = useState("Day-Out");

  const occasions = [
    { icon: <IoIosSunny />, name: "Day-Out", images: ["https://images.pexels.com/photos/2425734/pexels-photo-2425734.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/5542977/pexels-photo-5542977.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/4126273/pexels-photo-4126273.jpeg?auto=compress&cs=tinysrgb&w=400"] },
    { icon: <LuPartyPopper />, name: "Party", images: ["https://images.pexels.com/photos/3687550/pexels-photo-3687550.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/3879730/pexels-photo-3879730.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/3049493/pexels-photo-3049493.jpeg?auto=compress&cs=tinysrgb&w=400"] },
    { icon: <PiTreePalm />, name: "Vacation", images: ["https://images.pexels.com/photos/2403104/pexels-photo-2403104.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/1436985/pexels-photo-1436985.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/3159937/pexels-photo-3159937.jpeg?auto=compress&cs=tinysrgb&w=400"] },
    { icon: <MdOutlineFestival />, name: "Festive", images: ["https://images.pexels.com/photos/2122363/pexels-photo-2122363.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/3081575/pexels-photo-3081575.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/2761002/pexels-photo-2761002.jpeg?auto=compress&cs=tinysrgb&w=400"] },
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto text-sm">
      {/* Shop by Occasions */}
      <h2 className="font-bold mb-4">SHOP BY OCCASIONS</h2>
      
      {/* Occasion Tabs */}
      <div className="flex justify-between mb-6">
        {occasions.map((occasion) => (
          <button
            key={occasion.name}
            onClick={() => setActiveOccasion(occasion.name)}
            className={`flex items-center px-2 py-2 rounded-md font-medium border ${
              activeOccasion === occasion.name
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {occasion.icon} {/* Render the icon */}
            <span className="ml-1 text-sm">{occasion.name}</span>
          </button>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-2 relative">
          <img
            src={occasions.find(o => o.name === activeOccasion).images[0]}
            alt={activeOccasion}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Occasion name below the first image */}
          <div className="absolute bottom-2  bg-opacity-50 text-white text-sm px-2 py-1 rounded w-full flex flex-col ">
          <h1>OCCASION</h1>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{activeOccasion}</h1>
            <BsArrowRightSquareFill className="text-2xl"/></div>

            
          </div>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <img
            src={occasions.find(o => o.name === activeOccasion).images[1]}
            alt={activeOccasion}
            className="w-full h-full object-cover rounded-md"
          />
          <img
            src={occasions.find(o => o.name === activeOccasion).images[2]}
            alt={activeOccasion}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Dynamic collection button */}
      <div className="mt-4 text-center bg-blue-50 rounded-md">
        <button className="text-blue-600 py-2">
          {activeOccasion.toUpperCase()} COLLECTION ➜
        </button>
      </div>
    </div>
  );
};

export default ShopByOccasions;
