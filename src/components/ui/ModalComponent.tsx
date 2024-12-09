import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../../components/ui/animated-modal";
import ImageGallery from "./ImageGallery";
import FeaturesList from "./FeaturesList";

const ModalComponent: React.FC = () => {
  return (
    <Modal>
      <ModalTrigger className="mt-4 px-8 py-3 border-2 border-white text-white font-medium text-lg hover:bg-white hover:text-black transition duration-300 relative flex justify-center items-center group">
        <span className="group-hover:translate-x-40 text-center transition duration-500">
          Shop Now
        </span>
        <div className="-translate-x-40 group-hover:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          ✈️
        </div>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Lets Pack Your Travell{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              Partner
            </span>{" "}
            now! ✈️
          </h4>

          {/* Image Gallery */}
          <ImageGallery />

          {/* Features List */}
          <FeaturesList />
        </ModalContent>
        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button>
          <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
            Book Now
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
