import React from "react";
import WorkProcessCard from "./WorkProcessCard";
import { FiSearch, FiBarChart2, FiFeather } from "react-icons/fi";

const WorkProgressSection: React.FC = () => {
  const processSteps = [
    {
      icon: <FiSearch />,
      title: "Research",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
    },
    {
      icon: <FiFeather />,
      title: "Ideate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
    },
    {
      icon: <FiBarChart2 />,
      title: "Analyze",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
    },
    {
      icon: <FiFeather />,
      title: "Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
    },
  ];

  return (
    <section className=" text-white py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column: Title and Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-decorative text-white mb-6">
            Work Progress
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {processSteps.map((step, index) => (
            <WorkProcessCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProgressSection;
