import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa"; 

// You might want to define a custom color in your tailwind.config.js for the pink text
// For example:
// extend: {
//   colors: {
//     peach-pink: '#F0B5B5', // Example color code based on image
//   }
// },

// You might also want to define a custom font family in your tailwind.config.js
// For example:
// extend: {
//   fontFamily: {
//     decorative: ['"Great Vibes"', 'cursive'], // Example using Great Vibes font
//   }
// },

const CallToAction: React.FC = () => {
  return (
    <section className="text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full gap-8">
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Inspired to build something exceptional?
        </h2>
        {/* Using arbitrary value for text color and a placeholder class for font */}
        <p className="text-[#F4C2C2] text-3xl md:text-5xl">
          I am Always Happy To Talk
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Get In Touch Button (consistent with Header) */}
        <Button className="bg-orange-600 hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-full w-48 md:w-auto">
          Get In Touch
        </Button>

        <Link
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1E1E1E] hover:bg-gray-700 text-white p-3 rounded-full flex items-center justify-center transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedinIn size={24} />
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
