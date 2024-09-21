import React from 'react';

const StoreEvents = () => {
  const events = [
    {
      title: 'Ambience Mall, Vasant Kunj',
      description: 'Collection drop: Evening Glamour',
      date: '26-Aug-2024',
      image: 'https://images.pexels.com/photos/5490969/pexels-photo-5490969.jpeg?auto=compress&cs=tinysrgb&w=600', 
    },
    {
      title: 'Ambience Mall, Vasant Kunj',
      description: 'Independence Day Celebration',
      date: '26-Aug-2024',
      image: 'https://images.pexels.com/photos/5013571/pexels-photo-5013571.jpeg?auto=compress&cs=tinysrgb&w=600', 
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-sm">
      <h2 className="font-bold mb-4">STORE EVENTS</h2>
      <div className="overflow-x-scroll flex space-x-4">
        {events.map((event, index) => (
          <div key={index} className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-md">{event.title}</h3>
              <p className="text-gray-500 text-sm">{event.description}</p>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <a href="#" className="text-blue-600 font-semibold mt-2 block">
                BOOK A SLOT <span className="font-light">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreEvents;
