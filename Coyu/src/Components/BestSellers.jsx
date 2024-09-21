import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const BestSellers = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
//   const [val,setVal] = useState(1.5);

  const imagesRow1 = [
    'https://images.pexels.com/photos/1877729/pexels-photo-1877729.jpeg?auto=compress&cs=tinysrgb&w=400', 
    'https://images.pexels.com/photos/1148960/pexels-photo-1148960.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/291738/pexels-photo-291738.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3265974/pexels-photo-3265974.png?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2908678/pexels-photo-2908678.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1270013/pexels-photo-1270013.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8996010/pexels-photo-8996010.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  const imagesRow2 = [
    'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=400', 
    'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5128688/pexels-photo-5128688.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5699153/pexels-photo-5699153.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5046356/pexels-photo-5046356.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7723774/pexels-photo-7723774.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  // Function to scroll to the center of the first image
  useEffect(() => {
    const scrollToCenter = (ref,val) => {
      if (ref.current) {
        const element = ref.current;
        const imageWidth = element.firstChild.offsetWidth; // Width of one image
        element.scrollLeft = (imageWidth *val) - (element.clientWidth / 2); 
        // setVal(1);
        // Center the middle image
      }
    };

    scrollToCenter(row1Ref,2);
    scrollToCenter(row2Ref,1.5);
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 text-sm">
      <div className='flex justify-between mb-4'>
        <h2 className="font-bold ">BESTSELLERS</h2>
        <h2 className='text-blue-600 flex font-semibold items-center '>VIEW ALL<span className="font-light ml-1">➜</span></h2>
      </div>

      {/* First row of images */}
      <div className=" overflow-x-hidden ">
        <div ref={row1Ref} className="flex -space-x-4 overflow-x-scroll no-scrollbar scroll-smooth ">
          {imagesRow1.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 transform scale-90">
              <img src={image} alt={`Bestseller ${index + 1}`} className="w-full h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Second row of images */}
      <div className=" overflow-x-hidden">
        <div ref={row2Ref} className="flex -space-x-4 overflow-x-scroll no-scrollbar scroll-smooth">
          {imagesRow2.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-48 transform scale-90">
              <img src={image} alt={`Bestseller ${index + 1}`} className="w-full h-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
