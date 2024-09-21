import React, { useState, useRef } from 'react';
import { RiStore2Line } from "react-icons/ri";

const StoreCard = ({ image, mallName, address, timing, locationUrl }) => (
  <div className="flex-shrink-0 w-full max-w-xs mr-2 py-4 border rounded-lg shadow-md bg-white">
    <img src={image} alt={mallName} className="w-full h-48 object-cover rounded-md mb-4" />
    <div className='flex items-center justify-between'>
      <h3 className="font-bold px-3 text-sm">{mallName}</h3>
      <div onClick={() => window.open(locationUrl, '_blank')}
        className="text-blue-600 font-semibold ">VIEW DETAILS <span className="font-light mr-2">➜</span></div>
    </div>
    <p className="text-gray-500 px-3">{address}</p>
    <p className="text-gray-400 px-3">{timing}</p>
  </div>
);

const OurStores = () => {
  const [activeTab, setActiveTab] = useState('Delhi');
  const tabs = ['Delhi', 'Gurgaon'];
  const scrollRef = useRef(null);

  // Each city now has two stores
  const stores = {
    Delhi: [
      {
        image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600',
        mallName: 'Ambience Mall',
        address: 'Ambience Island, Vasant Kunj, Delhi',
        timing: '10:00 AM to 09:00 PM',
        locationUrl: 'https://maps.app.goo.gl/rDdv9VScs11ikta29',
      },
      {
        image: 'https://images.pexels.com/photos/2611819/pexels-photo-2611819.jpeg?auto=compress&cs=tinysrgb&w=600',
        mallName: 'Ambience Mall',
        address: 'Ambience Island, Vasant Kunj, Delhi',
        timing: '10:00 AM to 09:00 PM',
        locationUrl: 'https://maps.app.goo.gl/q7j4xgpbp7TdLVuN7',
      },
    ],
    Gurgaon: [
      {
        image: 'https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg?auto=compress&cs=tinysrgb&w=600',
        mallName: 'Ambience Mall',
        address: 'Ambience Island, Gurgaon',
        timing: '10:00 AM to 09:00 PM',
        locationUrl: 'https://maps.app.goo.gl/rDdv9VScs11ikta29',
      },
      {
        image: 'https://images.pexels.com/photos/4913391/pexels-photo-4913391.jpeg?auto=compress&cs=tinysrgb&w=400',
        mallName: 'Ambience Mall',
        address: 'Ambience Island, Gurgaon',
        timing: '10:00 AM to 09:00 PM',
        locationUrl: 'https://maps.app.goo.gl/q7j4xgpbp7TdLVuN7',
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-4 text-sm ">
      <h2 className="font-bold mb-4 text-base">OUR STORES</h2>

      {/* Tabs for locations */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-3 py-2 text-sm rounded-lg flex items-center border border-black font-semibold ${
              activeTab === tab ? 'bg-blue-600 text-white border-none' : 'bg-gray-100 text-black'
            }`}
          >
            <RiStore2Line className='mr-3' />
            {tab}
          </button>
        ))}
      </div>

      {/* Store cards slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar space-x-2 scrollbar-hide scroll-smooth"
      >
        {stores[activeTab].map((store, index) => (
          <StoreCard
            key={index}
            image={store.image}
            mallName={store.mallName}
            address={store.address}
            timing={store.timing}
            locationUrl={store.locationUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default OurStores;
