import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Techneik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;