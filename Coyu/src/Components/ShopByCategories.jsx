import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ShopByCategories = () => {
  return (
    <div className="w-full text-sm">
    <div className="flex justify-between">
        <h1 className="px-4 font-bold">SHOP BY CATEGORIES</h1>
        <span className="text-blue-600 px-4 flex items-center"><h1 className="mr-2 font-semibold">VIEW ALL</h1><FaArrowRight/></span>
    </div>
      <div className="grid grid-cols-2 grid-rows-5 gap-1 p-4">
        {/* Topwear image spans 2 rows */}
        <div className="relative h-48">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/7575892/pexels-photo-7575892.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Topwear"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Topwear</span>
          </div>
        </div>

        {/* Bottomwear image */}
        <div className="relative row-span-2 h-96">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/5836950/pexels-photo-5836950.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Bottomwear"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Dresses</span>
          </div>
        </div>

        {/* Dresses image spans 2 rows */}
        <div className="relative h-[188px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/5705643/pexels-photo-5705643.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Dresses"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Bottomwear</span>
          </div>
        </div>

        {/* Co-ord Sets image */}
        <div className="relative row-span-2 h-96">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/5674482/pexels-photo-5674482.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Co-ord Sets"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Co-ord Sets</span>
          </div>
        </div>

        {/* Jackets image */}
        <div className="relative h-48">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/5543017/pexels-photo-5543017.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Jackets"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Jackets</span>
          </div>
        </div>

        {/* Jeans image */}
        <div className="relative h-[188px]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/28471101/pexels-photo-28471101/free-photo-of-casual-reading-in-minimalist-setting.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Jeans"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Jeans</span>
          </div>
        </div>

        {/* Bags image */}
        <div className="relative h-40">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Bags"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Bags</span>
          </div>
        </div>

        {/* Jewellery image */}
        <div className="relative h-40">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://images.pexels.com/photos/22669954/pexels-photo-22669954/free-photo-of-a-woman-standing-in-front-of-a-tree.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Jewellery"
          />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end justify-center">
            <span className="text-white font-bold text-lg">Jewellery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
