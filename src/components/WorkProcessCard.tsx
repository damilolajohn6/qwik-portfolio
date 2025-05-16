import React from "react";

interface WorkProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WorkProcessCard: React.FC<WorkProcessCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-neutral-800 text-white rounded-lg p-6 flex flex-col items-start">
      {/* Icon */}
      <div className="text-orange-500 text-3xl mb-4">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default WorkProcessCard;
