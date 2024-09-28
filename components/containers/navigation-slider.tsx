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

const NavigationSlider = () => {
  const router = useRouter();


  const isActive = (pathname: string) => router.asPath === pathname;

  const handleItem = (item: string) => {
    console.log(item);
    // router.push(`/s/photos/${encodeURIComponent(item.toLowerCase())}`);
  };

  return (
    <>
      <div className="mt-6 flex items-center text-sm text-gray-500">
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

        <EmblaCarousel
        ></EmblaCarousel>

        {/* <Carousel
          opts={{
            align: "start",
          }}
          className=" mt-0 mr-auto "
        >
          <CarouselContent>
            {buttons.map((btn, index) => (
              <CarouselItem key={index} className="basis-1/10 pl-8">
                <button
                    onClick={() => handleCategory(btn)}
                    type="button"
                    className="p-0 text-sm font-semibold text-[#767676]"
                  >
                {btn}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="" />
        </Carousel> */}
      </div>
      <Separator className="mt-4 block" orientation="horizontal"></Separator>
    </>
  );
};

export default NavigationSlider;

const buttons = [
  "Interior",
  "Nature",
  "Ocean",
  "Beach",
  "Food",
  "Architecture",
  "Technology",
  "Fashion",
  "Wildlife",
  "Travel",
  "Landscape",
  "Art",
  "Music",
  "Sports",
  "Automotive",
  "Fitness",
  "Health",
  "Education",
  "Business",
  "Photography",
  "Science",
  "Space",
  "History",
  "Movies",
  "Books",
];

const mainBtns = ["Photos", "Illustrations", "Photop+"];
