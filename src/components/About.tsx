// src/components/ui/AboutUs.tsx

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div
      className="flex items-center justify-start bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('/about.jpg')", // Your background image
        backgroundSize: "cover", // Full cover without cropping
        backgroundPosition: "center", // Centers the image
        height: "40vh", // Adjust height as necessary
      }}
    >
      <div className="w-1/2 bg-black bg-opacity-50 p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
        <p>
        We understand that your luggage is an important part of your travel experience, and that's why we focus on creating bags that combine durability, convenience, and style. With a variety of sizes, colors, and designs, we offer the perfect bag for every traveler — from carry-ons to checked luggage, backpacks to duffels.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
