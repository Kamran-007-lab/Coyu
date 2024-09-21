import React from 'react';

const WhatsApp = () => {
  return (
    <div className="flex items-center text-sm justify-between  p-4 rounded-lg shadow-lg max-w-sm mx-auto">
    <div className='bg-green-50 w-full flex items-center justify-between py-5 px-2'>
    <div>
        <p className="font-bold">Need any help? Simply</p><p className='font-bold'>drop us a text.</p>
        <a href="https://wa.me" className="text-blue-500 hover:underline flex items-center font-semibold mt-2">
          WHATSAPP US <span className="ml-2">→</span>
        </a>
      </div>
      <div className="w-12 h-12">
        <img 
          src="https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-721985.png?f=webp&w=128" 
          alt="WhatsApp Logo" 
          className="w-full h-full"
        />
      </div>
    </div>
      
    </div>
  );
}

export default WhatsApp;
