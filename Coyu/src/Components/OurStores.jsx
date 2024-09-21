import React, { useState, useRef, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { RiStore2Line } from "react-icons/ri";

const StoreCard = ({ image, mallName, address, timing }) => (
  <div className="flex-shrink-0 w-full max-w-xs mr-2 py-4 border rounded-lg shadow-md bg-white">
    <img src={image} alt={mallName} className="w-full h-48 object-cover rounded-md mb-4" />
    <div className='flex items-center justify-between'>
    <h3 className="font-bold px-3 text-sm">{mallName}</h3>
    <div className="text-blue-600 font-semibold ">VIEW DETAILS <span className="font-light mr-2">➜</span></div>
    </div>

    
    <p className="text-gray-500 px-3">{address}</p>
    <p className="text-gray-400 px-3">{timing}</p>
    
  </div>
);

const OurStores = () => {
  const [activeTab, setActiveTab] = useState('Delhi');
  const [scrollingByTabClick, setScrollingByTabClick] = useState(false); // New state to track if scrolling is triggered by tab click
  const tabs = ['Delhi', 'Gurgaon'];
  const scrollRef = useRef(null);

  // Each city has one store
  const stores = {
    Delhi: {
      image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600',
      mallName: 'Ambience Mall',
      address: 'Ambience Island, Vasant Kunj, Delhi',
      timing: '10:00 AM to 09:00 PM',
    },
    Gurgaon: {
      image: 'https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg?auto=compress&cs=tinysrgb&w=600',
      mallName: 'Ambience Mall',
      address: 'Ambience Island, Gurgaon',
      timing: '10:00 AM to 09:00 PM',
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setScrollingByTabClick(true); // Disable scroll event handler during tab click scrolling

    if (scrollRef.current) {
      const element = scrollRef.current;
      const scrollWidth = element.scrollWidth / 2;

      // Scroll to the respective tab: Delhi (left) or Gurgaon (right)
      const scrollLeft = tab === 'Delhi' ? 0 : scrollWidth;
      element.scrollTo({ left: scrollLeft, behavior: 'smooth' });

      // Re-enable scroll event handler after the scroll animation finishes
      setTimeout(() => {
        setScrollingByTabClick(false);
      }, 300); // Adjust delay according to scroll animation duration
    }
  };

  const handleScroll = () => {
    // Prevent scroll handler if scrolling is caused by tab click
    if (scrollingByTabClick) return;

    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const scrollPercentage = (scrollLeft / scrollWidth) * 100;

      // Change active tab based on scroll position (50% is the midpoint)
      if (scrollPercentage < 50) {
        setActiveTab('Delhi');
      } else {
        setActiveTab('Gurgaon');
      }
    }
  };

  useEffect(() => {
    // Sync scroll position when the tab changes manually by click
    if (scrollRef.current && !scrollingByTabClick) {
      const scrollLeft = activeTab === 'Delhi' ? 0 : scrollRef.current.scrollWidth / 2;
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeTab, scrollingByTabClick]);

  return (
    <div className="container mx-auto px-4 py-4 text-sm ">
      <h2 className="font-bold mb-4">OUR STORES</h2>

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
          <RiStore2Line className='mr-3'/>
            {tab}
          </button>
        ))}
      </div>


      {/* Store cards slider */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll no-scrollbar space-x-2 scrollbar-hide scroll-smooth"
      >
        <StoreCard
          key="Delhi"
          image={stores.Delhi.image}
          mallName={stores.Delhi.mallName}
          address={stores.Delhi.address}
          timing={stores.Delhi.timing}
        />
        <StoreCard
          key="Gurgaon"
          image={stores.Gurgaon.image}
          mallName={stores.Gurgaon.mallName}
          address={stores.Gurgaon.address}
          timing={stores.Gurgaon.timing}
        />
      </div>
    </div>
  );
};

export default OurStores;
