import React from "react";
import { motion } from "framer-motion";
import TypewriterText from "../components/ui/TypewriterText";
import ModalComponent from "../components/ui/ModalComponent";
import Footer from "./ui/Footer";
import JoinMailingList from "./ui/JoinMailingList";
import { ContactForm } from "./ui/ContactForm";
import AboutUs from "./About";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content with Background Image */}
      <div
        className="flex flex-col items-center justify-center bg-cover bg-center flex-grow relative"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",  // Ensure the image fully covers the container
          backgroundPosition: "center", // Keep the image centered
          backgroundAttachment: "fixed", // This keeps the background fixed while scrolling
          height: "80vh", // Make sure the section takes up the full viewport height
        }}
      >
        {/* Typewriter Text centered */}
        <div className="text-center text-white">
          <TypewriterText />
        </div>

        {/* Modal Trigger (Now below TypewriterText) */}
        <ModalComponent />
      </div>

        {/* About Us Section */}
        <AboutUs /> {/* Add the AboutUs component here */}

      {/* Contact Form */}
      <div className="bg-black text-white ">
        <ContactForm />
      </div>

      {/* Mailing List Section */}
      <div className="bg-black text-white ">
        <JoinMailingList />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
