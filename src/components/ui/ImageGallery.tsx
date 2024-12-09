import React from "react";
import { motion } from "framer-motion";

const images = [
  "/images/bag1.jpg",
  "/images/bag2.jpg",
  "/images/bag3.jpg",
  "/images/bag4.jpg",
  "/images/bag5.jpg",
];

const ImageGallery: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
          <img
            src={image}
            alt="bags images"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
