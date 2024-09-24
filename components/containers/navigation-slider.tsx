import React from "react";
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

const NavigationSlider = () => {
  console.log(buttons.length);
  const router = useRouter();

  const handleCategory = (category: string) => {
    console.log(category);

    router.push(`/s/photos/${encodeURIComponent(category.toLowerCase())}`);
  };

  return (
    <>
      <div className="mt-6 flex items-center text-gray-500 text-sm">
        <ul className="hidden md:flex items-center gap-7">
          {mainBtns.map((item, index) => (
            <li key={index}>{item}</li>
          ))}


        </ul>

        <Separator orientation="vertical" className="h-8 ml-7 mr-7 hidden md:block"></Separator>
          

          <EmblaCarousel></EmblaCarousel>

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
