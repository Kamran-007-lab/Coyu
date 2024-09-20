import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineMail } from "react-icons/ai"; // Import icons
import { GoLocation } from "react-icons/go"; // Import location icon

const Social = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showConnect, setShowConnect] = useState(false);

  return (
    <div className="bg-white py-8">
      {/* Email Signup Section */}
      <div className="max-w-lg mx-auto text-start px-4">
        <h2 className="text-lg font-semibold">SIGN UP FOR EMAIL</h2>
        <p className="text-sm text-gray-600">
          Receive early access to new arrivals, sales, exclusive content, events
          and much more!
        </p>
        <div className="mt-4">
        <h2 className="text-lg font-semibold my-2">EMAIL ADDRESS*</h2>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
        <p className="mt-4 text-xs text-gray-500">
          By signing up, you will receive Coyu offers, Promotions and other
          commercial messages. You are also agreeing to Coyu{" "}
          <a href="#" className="underline">
            Privacy policy.
          </a>{" "}
          You may unsubscribe any time.
        </p>
      </div>

      {/* Store Locator and Get Email Section */}
      <div className="flex justify-between space-x-4 mt-8 px-4">
        <button className="flex items-center space-x-2">
          <GoLocation className="text-lg" /> {/* Location Icon */}
          <span>STORE LOCATOR</span>
        </button>
        <button className="flex items-center space-x-2">
          <AiOutlineMail className="text-lg" /> {/* Mail Icon */}
          <span>GET EMAIL</span>
        </button>
      </div>

      {/* Dropdown Sections */}
      <div className="mt-8 w-full font-semibold">
        {/* Products Dropdown */}
        <div className="">
          <button
            className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-md"
            onClick={() => setShowProducts(!showProducts)}
          >
            <span>PRODUCTS</span>
            <span>{showProducts ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </button>
          {showProducts && (
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
              <p>Product Information is here.</p>
            </div>
          )}
        </div>

        {/* Services Dropdown */}
        <div>
          <button
            className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-md"
            onClick={() => setShowServices(!showServices)}
          >
            <span>SERVICES</span>
            <span>{showServices ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </button>
          {showServices && (
            <div className="p-4 bg-gray-100 border border-gray-300  rounded-md">
              <p>Services Information is here.</p>
            </div>
          )}
        </div>

        {/* Connect Dropdown */}
        <div>
          <button
            className="w-full flex justify-between items-center p-4 bg-white border border-gray-300 rounded-md"
            onClick={() => setShowConnect(!showConnect)}
          >
            <span>CONNECT</span>
            <span>{showConnect ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
          </button>
          {showConnect && (
            <div className="p-4 bg-gray-100 border border-gray-300 rounded-md">
              <p>Connect Information is here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Social;
