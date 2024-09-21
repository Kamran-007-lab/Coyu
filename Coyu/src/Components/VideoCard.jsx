import { FaVideo, FaComments } from "react-icons/fa";

const VideoCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 max-w-md mx-auto text-sm">
      <div>
        <h1 className="font-bold pb-4">SHOP FROM OUR STORE VIA VIDEO CALL</h1>
      </div>
      {/* https://wallpapers.com/images/hd/clean-background-w4ezih6ialmlu29o.jpg */}
      <div className="bg-[url('https://wallpapers.com/images/hd/clean-background-w4ezih6ialmlu29o.jpg')] bg-cover bg-center w-full rounded-lg">
        {/* Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src="https://images.pexels.com/photos/5720633/pexels-photo-5720633.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Store Tour"
          />
        </div>

        {/* Description */}
        <div className="mt-4 px-3">
          <p className="text-gray-700 text-sm font-bold text-left">
            Let our stylist give you a store tour and show you the perfect items
            for your needs – fast and easy!
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-3 py-3 flex justify-around">
          <button className="flex items-center justify-center bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold w-40 hover:bg-blue-200 transition">
            <FaVideo className="mr-2" />
            VIDEO CALL
          </button>
          <button className="flex items-center justify-center bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold w-40 hover:bg-blue-200 transition">
            <FaComments className="mr-2" />
            CHAT NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
