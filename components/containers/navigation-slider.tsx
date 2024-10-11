import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Separator } from "../ui/separator";
import { EmblaCarousel } from "./embla";
import Link from "next/link";
import Topic from "./topic";

const NavigationSlider = () => {
  const router = useRouter();


  const isActive = (pathname: string) => router.asPath === pathname;

  const handleItem = (item: string) => {
    console.log(item);
    // router.push(`/s/photos/${encodeURIComponent(item.toLowerCase())}`);
  };

  return (
    <>
      <div className="mt-6 flex items-center overflow-hidden text-sm text-gray-500">
        <ul className="hidden items-center gap-7 md:flex">
          {mainBtns.map((item, index) => (
            <Link
              href={`/s/photos/${encodeURIComponent(item.toLowerCase())}`}
              passHref
              onClick={() => handleItem(item)}
              className={`${isActive(`/s/photos/${item.toLowerCase()}`) ? "text-black font-semibold" : ""} hover:text-black transition-colors`}
              key={index}
            >
              {item}

              {/* {activeLink === item && <div className="w-4 h-1 bg-red-400"></div>} */}
            </Link>
          ))}
        </ul>

        <Separator
          orientation="vertical"
          className="ml-7 mr-7 hidden h-8 md:block"
        ></Separator>
{/* 
        <EmblaCarousel
        ></EmblaCarousel> */}

        <Topic></Topic>

     
      </div>
      <Separator className="mt-4 block" orientation="horizontal"></Separator>
    </>
  );
};

export default NavigationSlider;



const mainBtns = ["Photos", "Illustrations", "Featured"];
