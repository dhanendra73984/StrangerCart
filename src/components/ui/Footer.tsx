import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-400 text-gray-200 py-6">
      <div className="container mx-auto px-4">
        {/* Copyright and Info */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm md:text-base">
            © 2035 by <strong>PUNE</strong>. Powered and secured by <strong>Dhanendra</strong>.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#faq" className="hover:text-gray-100 transition">
              FAQ
            </a>
            <a href="#groups" className="hover:text-gray-100 transition">
              Groups
            </a>
            <a href="#shipping-returns" className="hover:text-gray-100 transition">
              Shipping & Returns
            </a>
            <a href="#terms-conditions" className="hover:text-gray-100 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
