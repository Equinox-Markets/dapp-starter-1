import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img src="/images/logo-white.png" alt="Logo" className="h-8" />
          </div>
          <div className="w-full md:w-auto flex items-center justify-center md:justify-end">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/twitter.png" alt="Twitter" className="h-6" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/facebook.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/instagram.png" alt="Instagram" className="h-6" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/linkedin.png" alt="LinkedIn" className="h-6" />
            </a>
          </div>
        <p className="text-center mt-4">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
