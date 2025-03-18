import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0c0d0e] text-gray-400 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Stack Overflow Section */}
        <div>
            <img src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png" className="h-16" alt="" />
          <h3 className="text-white font-bold mb-2">STACK OVERFLOW</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Questions</Link></li>
            <li><Link to="/" className="hover:text-white">Help</Link></li>
            <li><Link to="/" className="hover:text-white">Chat</Link></li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h3 className="text-white font-bold mb-2">PRODUCTS</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Teams</Link></li>
            <li><Link to="/" className="hover:text-white">Advertising</Link></li>
            <li><Link to="/" className="hover:text-white">Talent</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-bold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">About</Link></li>
            <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Stack Exchange Section */}
        <div>
          <h3 className="text-white font-bold mb-2">STACK EXCHANGE NETWORK</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-white">Technology</Link></li>
            <li><Link to="/" className="hover:text-white">Science</Link></li>
            <li><Link to="/" className="hover:text-white">Business</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-600 pt-4">
        <p className="mb-2 space-x-4">
          <Link to="/" className="hover:text-white">Blog</Link>
          <Link to="/" className="hover:text-white">Facebook</Link>
          <Link to="/" className="hover:text-white">Twitter</Link>
          <Link to="/" className="hover:text-white">LinkedIn</Link>
        </p>
        <p>Site design / logo © 2025 Stack Exchange Inc; user contributions licensed under <Link to="/" className="text-[#009dff] hover:underline">CC BY-SA</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;
