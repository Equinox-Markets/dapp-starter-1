import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
          </li>
        </ul>
        <p className="text-center mt-4">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
