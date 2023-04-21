import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-4">
      <div className="flex justify-center items-center rounded-full bg-white mx-auto w-16 h-16 mb-4">
        <img src="/images/robot.png" alt="Logo" className="h-8" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <img src="/images/robot.png" alt="Logo" className="h-8" />
          </div>
          <div className="w-full md:w-auto flex items-center justify-center md:justify-end">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/robot.png" alt="Twitter" className="h-6" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/robot.png" alt="Facebook" className="h-6" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/robot.png" alt="Instagram" className="h-6" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="mr-4">
              <img src="/images/robot.png" alt="LinkedIn" className="h-6" />
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

