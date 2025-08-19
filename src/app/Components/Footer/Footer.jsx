import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Student Portal. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Made with ❤️ for education
        </p>
      </div>
    </footer>
  );
};

export default Footer;