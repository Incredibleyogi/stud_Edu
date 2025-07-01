import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-700"><FaFacebook /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="#" className="hover:text-indigo-400"><FaDiscord /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Contact Us</h2>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📧 support@studedu.com</p>
        </div>

        {/* Copyright */}
        <div className="flex items-center md:justify-end">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} StudEdu. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
