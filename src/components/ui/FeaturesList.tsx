import React from "react";
import { PlaneIcon, ElevatorIcon, VacationIcon, FoodIcon, MicIcon, ParachuteIcon } from "./Icons";

const FeaturesList: React.FC = () => {
  const features = [
    { Icon: PlaneIcon, text: "Light Weight" },
    { Icon: ElevatorIcon, text: "Reinforced Stitching" },
    { Icon: VacationIcon, text: "Water-Resistant" },
    { Icon: FoodIcon, text: "Good for everyday" },
    { Icon: MicIcon, text: "Minimalist" },
    { Icon: ParachuteIcon, text: "Long-Lasting Material" },
  ];

  return (
    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
      {features.map(({ Icon, text }, idx) => (
        <div key={idx} className="flex items-center justify-center">
          <Icon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
          <span className="text-neutral-700 dark:text-neutral-300 text-sm">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
