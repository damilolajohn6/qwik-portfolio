"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Qwikitech",
    category: "Website",
    image: "/po1.png",
  },
  {
    title: "Mitchzech",
    category: "Website",
    image: "/po2.png",
  },
  {
    title: "Qwikitech",
    category: "Case Study",
    image: "/po3.png",
  },
  {
    title: "Mitchzech",
    category: "Landing Page",
    image: "/po4.png",
  },
];

const PortfolioSection = () => {
  return (
    <section className="text-white px-4 py-10 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-800">
              <div>
                <p className="text-sm text-gray-400">{project.category}</p>
                <h3 className="text-base font-semibold">{project.title}</h3>
              </div>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
