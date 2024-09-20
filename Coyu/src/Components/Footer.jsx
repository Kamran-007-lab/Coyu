import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook } from "react-icons/fa";
// If using newer icons for X (Twitter rebranding)

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4 mb-40">
      {/* Social Media Icons */}
      <div className="flex space-x-6">
        <FaInstagram className="text-3xl" />
        <FaFacebook className="text-3xl" />
        <FaXTwitter className="text-3xl" />
      </div>

      {/* Copyright Text */}
      <p className="text-gray-500 text-lg">
        &copy; 2024 COYU.COM. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Footer;
