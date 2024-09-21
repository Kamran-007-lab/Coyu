import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../assets/instagram/img1.jpg"
import img2 from "../assets/instagram/img2.jpg"
import img3 from "../assets/instagram/img3.jpg"
import img4 from "../assets/instagram/img4.jpg"
import img5 from "../assets/instagram/img5.jpg"
import img6 from "../assets/instagram/img6.jpg"
import img7 from "../assets/instagram/img7.jpg"
import img8 from "../assets/instagram/img8.jpg"
import img9 from "../assets/instagram/img9.jpg"


const Instagram = () => {
  const instagramPosts = [
    img1,img2,img5,img4,img3,img6,img7,img8,img9,img6 
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="text-sm flex justify-between mb-4">
        <a href="https://www.instagram.com/coyuofficial/"><h2 className=" font-bold ">OUR INSTAGRAM @COYU</h2></a>
        <a href="#" className="text-blue-600 flex font-semibold items-center">
          INSTAGRAM <span className="font-light ml-1">➜</span>
        </a>
      </div>

      <div className="overflow-x-scroll">
        <div className="grid grid-rows-2 grid-flow-col gap-1">
          {instagramPosts.map((post, index) => (
            <div key={index} className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={post}
                alt={`Instagram Post ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
