import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscVerified } from "react-icons/vsc";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CoyuAssurance = () => {
  return (
    <div className="p-4 w-full mt-4 flex flex-col items-center">
      <div className="flex flex-col font-bold w-full max-w-sm">
        <h1>COYU ASSURANCE</h1>
        <h3>Premium Quality | Perfect Fit | 24x7 Support</h3>
      </div>
      <div id="overflow" className="z-0 m-4 w-full max-w-sm">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full max-w-full"
        >
          <SwiperSlide>
            <div className="my-6 text-left bg-[url('https://th.bing.com/th/id/OIP.-u1e82POQwlfP7RG71HzXAHaEK?pid=ImgDet&w=474&h=266&rs=1')] bg-cover bg-center p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center p-2">
                  <VscVerified className="text-5xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">PREMIUM QUALITY</p>
                  <p className="text-sm">
                    Each product is tested in store for premium fabric and
                    exceptional craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-6 text-left bg-[url('https://th.bing.com/th/id/OIP.-u1e82POQwlfP7RG71HzXAHaEK?pid=ImgDet&w=474&h=266&rs=1')] bg-cover bg-center p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center p-2">
                  <VscVerified className="text-5xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">PERFECT FIT</p>
                  <p className="text-sm">
                    Each product is tested in store for premium fabric and
                    exceptional craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-6 text-left bg-[url('https://th.bing.com/th/id/OIP.-u1e82POQwlfP7RG71HzXAHaEK?pid=ImgDet&w=474&h=266&rs=1')] bg-cover bg-center p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="flex items-center p-2">
                  <VscVerified className="text-5xl" />
                </div>
                <div>
                  <p className="font-bold text-lg">24x7 SUPPORT</p>
                  <p className="text-sm">
                    Each product is tested in store for premium fabric and
                    exceptional craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CoyuAssurance;
