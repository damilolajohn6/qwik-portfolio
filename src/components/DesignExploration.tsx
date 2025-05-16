"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DesignExplorationProps {
  images: { src: string; alt: string }[];
}

const DesignExploration: React.FC<DesignExplorationProps> = ({ images }) => {
  return (
    <section className="text-white py-16 px-4 sm:px-6 md:px-12">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
        Some Design Exploration
      </h2>

      <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="overflow-hidden rounded-lg h-full">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default DesignExploration;
