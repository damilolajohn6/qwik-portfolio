"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className=" text-white px-4 py-10 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        <h1 className="text-2xl md:text-4xl font-medium">
          Hello, I’m Orijide Olatunde,{" "}
          <span className="font-bold text-white">a Product Designer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          dedicated to creating products that add value and elevate your brand.
        </p>

        <div className="w-48 h-64 relative rounded-md overflow-hidden shadow-lg">
          <Image
            src="/hero.png"
            alt="Orijide Olatunde"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-between items-center gap-36">
          <p className="text-xl font-bold text-gray-300 max-w-lg">
            I&apos;m a freelance designer with a passion for creating across
            diverse industries. In Sass, B2b, B2C.
          </p>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-sm">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
