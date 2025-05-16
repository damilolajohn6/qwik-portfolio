import React from "react";

interface WorkExperienceEntryProps {
  title: string;
  company: string;
  year: string;
}

const WorkExperienceEntry: React.FC<WorkExperienceEntryProps> = ({
  title,
  company,
  year,
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6">
        {/* Job Title */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl md:text-2xl font-normal text-white">
            {title}
          </h3>
        </div>

        {/* Company and Year Pills */}
        <div className="flex items-center space-x-4">
          {/* Company Pill */}
          <span className="bg-neutral-700 text-white text-sm px-4 py-1 rounded-full">
            {company}
          </span>
          {/* Year Pill */}
          <span className="bg-neutral-700 text-white text-sm px-4 py-1 rounded-full">
            {year}
          </span>
        </div>
      </div>
      {/* Divider Line */}
      <div className="border-b border-neutral-800 w-full"></div>
    </>
  );
};

const WorkExperienceSection: React.FC = () => {
  // Placeholder data - in a real app, this would likely come from a prop or API call
  const workEntries = [
    { title: "Product Designer", company: "Qwiktech", year: "2024" },
    { title: "UI/UX Designer", company: "Octavialy", year: "2024" },
    { title: "Product Designer", company: "Qwiktech", year: "2024" },
    { title: "UX Researcher", company: "Lanred", year: "2023" },
    { title: "UX Researcher", company: "Lanred", year: "2023" },
  ];

  return (
    <section className=" text-white py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Column: Title and Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-decorative text-white mb-6">
            Work Experience
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>

        {/* Right Column: Work Experience Entries */}
        <div>
          {workEntries.map((entry, index) => (
            <WorkExperienceEntry
              key={index} // Using index as key is okay for static lists, use a unique ID if available
              title={entry.title}
              company={entry.company}
              year={entry.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
