import React from "react";
import Typical from "react-typical";

const TypewriterText: React.FC = () => {
  return (
    <h1 className="text-5xl md:text-7xl font-bold text-neutral-600 mb-4">
      <Typical
        steps={["Plan Your Happiness", 2000, "Let Just Fill Your Bags", 2000]}
        loop={Infinity}
        wrapper="span"
      />
    </h1>
  );
};

export default TypewriterText;
