import React from "react";
import { Button } from "@/components/ui/button"; 

const Header: React.FC = () => {
  return (
    <header className=" container text-white py-4 px-6 md:px-12 flex items-center justify-between w-full">
      {/* Name */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold">Oluwasegun Onafowokan</h1>
      </div>
      <div className="hidden md:block text-gray-400 text-sm md:text-base">
        Abuja/Nigeria
      </div>

      {/* Get In Touch Button */}
      <div>
        <Button className="bg-orange-600 hover:bg-white text-white hover:text-black font-semibold py-2 px-6 rounded-full">
          Get In Touch
        </Button>
      </div>
    </header>
  );
};

export default Header;
