import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import { FiTruck } from "react-icons/fi";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Hero = () => {
  const images = [img2, img3, img4, img1];


  const swiperRef = useRef(null);

  const handleArrowClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="hero-section w-full flex flex-col justify-center items-center bg-white py-8 px-4">
      <Swiper
        ref={swiperRef} 
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-sm relative z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative mb-12">
              {/* Oval Image */}
              <img
                src={image}
                alt={`slide-${index}`}
                className="w-full object-cover rounded-full mx-auto"
                style={{
                  borderRadius: "100% / 65%", 
                }}
              />
              {/* Headings (Overlay on Image) */}
              <div className="absolute bottom-5 w-full text-center flex flex-col items-center">
                <h2 className="text-white text-xl">NEW COLLECTION</h2>
                <h1 className="text-white text-4xl">Winter Edit</h1>
                <span
                  className="my-2 text-5xl text-white cursor-pointer"
                  onClick={handleArrowClick} 
                >
                  <BsArrowRightSquareFill />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*Delivery Section */}
      <div className="bg-[url('https://th.bing.com/th/id/OIP.p7ilqfCiOwnzzFSlQCW_rwHaEU?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')] bg-cover bg-center mt-10 w-full max-w-sm text-center flex items-center px-4 py-3 space-x-4">
        <div className="p-4 rounded-full bg-white">
          <FiTruck />
        </div>
        <h1 className="text-md">90 MINUTES EXPRESS DELIVERY</h1>
      </div>
    </div>
  );
};

export default Hero;
