import React, { useEffect, useState } from "react";

const FreshDrops = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 15,
    minutes: 40,
    seconds: 29,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        // Decrease seconds
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          days--;
        } else {
          // When countdown reaches 0, stop the interval
          clearInterval(countdownInterval);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="bg-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-lg font-bold">FRESH DROPS OF THE WEEK</h1>
          <h3>300+ styles dropped</h3>
        </div>

        <button className="text-blue-500 text-sm">VIEW ALL</button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 grid-rows-3 gap-2">
        {/* New Brand Image spans 2 rows and 2 columns */}
        <div className="col-span-2 row-span-2 relative">
          <img
            src="https://images.pexels.com/photos/19417304/pexels-photo-19417304/free-photo-of-two-fashionable-women-standing-outside-back-to-back.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="New Brand"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm">NEW BRAND</p>
            <h2 className="text-xl font-bold">Stavoss</h2>
          </div>
        </div>

        {/* Other Images */}
        <div>
          <img
            src="https://images.pexels.com/photos/15044698/pexels-photo-15044698/free-photo-of-fashionable-women-posing.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="drop 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4831604/pexels-photo-4831604.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="drop 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/10431386/pexels-photo-10431386.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="drop 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/28497028/pexels-photo-28497028/free-photo-of-elegant-woman-with-umbrella-on-a-rainy-day.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="drop 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/5582230/pexels-photo-5582230.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="drop 5"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      {/* https://th.bing.com/th/id/OIP.ZRhzEjXI3LrqR2jbb_qZDQHaEK?rs=1&pid=ImgDetMain */}

      {/* WhatsApp Button */}
      <div className="text-center mt-4">
        <h1 className="font-bold">GET NEW DROPS & OFFERS ON WHATSAPP</h1>
      </div>

      <div className="mt-4 text-center relative bg-[url('https://th.bing.com/th/id/OIP.ZRhzEjXI3LrqR2jbb_qZDQHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center p-2 w-full rounded-lg">
        <div className="flex justify-between items-center font-bold">
          <span className="p-2 text-center ">NEXT DROP IN</span>
          <div className="flex">
            <div className="p-2 text-center">
              <p className="text-2xl">{String(time.days).padStart(2, "0")}</p>
              <p className="text-sm">DAYS</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl">{String(time.hours).padStart(2, "0")}</p>
              <p className="text-sm">HRS</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl">
                {String(time.minutes).padStart(2, "0")}
              </p>
              <p className="text-sm">MINS</p>
            </div>
            <div className="p-2 text-center">
              <p className="text-2xl">
                {String(time.seconds).padStart(2, "0")}
              </p>
              <p className="text-sm">SECS</p>
            </div>
          </div>
        </div>
        <form className="relative">
          <div className="relative">
            <input
              className="w-full border border-black p-2 pr-20 rounded-lg"
              placeholder="ENTER YOUR NUMBER"
              type="number"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 p-2 rounded-lg text-md"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreshDrops;
