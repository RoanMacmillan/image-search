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

const NavigationSlider = () => {
  console.log(buttons.length);
  const router = useRouter();

  const handleCategory = (category: string) => {
    console.log(category);

    router.push(`/s/photos/${encodeURIComponent(category.toLowerCase())}`);
  };

  return (
    <>
      <div className="mt-6 hidden md:flex items-center font-semibold text-gray-500 text-sm">
        <ul className="flex items-center gap-8">
          {mainBtns.map((item, index) => (
            <li key={index}>{item}</li>
          ))}


        </ul>

        <Separator orientation="vertical" className="h-8 ml-8 mr-4"></Separator>



        <Carousel
          opts={{
            align: "start",
          }}
          className=" mt-0 w-[70%] ml-16"
        >
          <CarouselContent>
            {buttons.map((btn, index) => (
              <CarouselItem key={index} className="basis-1/10 pl-8">
                {/* <button
                    onClick={() => handleCategory(btn)}
                    type="button"
                    className="p-0 text-sm font-semibold text-[#767676]"
                  > */}
                {btn}
                {/* </button> */}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="" />
        </Carousel>
      </div>
      <Separator className="mt-4 hidden md:block" orientation="horizontal"></Separator>

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
