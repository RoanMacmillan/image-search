import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowBottomLeftIcon, ArrowBottomRightIcon, ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const logIndex = () => {
    console.log(`The current index is ${currentIndex}`);
    console.log(`${buttons.length} buttons`)
    // console.log(buttons.length - 2);
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("scroll", onScroll);
    onScroll(); // Initialize the current index on mount
    return () => {
      emblaApi.off("scroll", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <div className="embla relative overflow-hidden">
      <div className="" ref={emblaRef}>
        <div className="flex gap-7">
          {buttons.map((item) => (
            <div className="embla__slide flex gap-7" key={item.id}>
              {item.categories.map((category, index) => (
                    <Link href='/' key={index} className="hover:text-black transition-colors">
                  {category}
                  </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${currentIndex === 0 ? "hidden" : "md:block"} hidden  embla__prev h-full absolute left-0 z-50 top-[0px]`}
        onClick={scrollPrev}
        disabled={currentIndex === 0}
      >
        <ArrowLeftIcon className="w-4 h-4"></ArrowLeftIcon>
      </button>
      <div className={` ${currentIndex === 0 ? 'hidden' : 'block'} gradient-background w-[70px] absolute z-1 left-0 top-0 h-full`}></div>

      <button
        className={`${currentIndex === buttons.length - 1 ? "hidden" : "md:block"} hidden embla__prev z-50 absolute right-0 top-0`}
        onClick={scrollNext}
      >
        <ArrowRightIcon className="w-4 h-4"></ArrowRightIcon>
      </button>
      <div className={` ${currentIndex === buttons.length - 1 ? 'hidden' : 'block'} rotate-180 gradient-background w-[70px] absolute z-1 right-0 top-0 h-full`}></div>

      {/* <button onClick={logIndex}>log</button> */}
    </div>
  );
};



// const buttons = [
//   { id: 1, categories: ["Interior", "Nature", "Ocean"] },
//   { id: 2, categories: ["Beach", "Food", "Architecture"] },
//   { id: 3, categories: ["Technology", "Fashion", "Wildlife"] },
//   { id: 4, categories: ["Travel", "Landscape", "Art"] },
//   { id: 5, categories: ["Music", "Sports", "Automotive"] },
//   { id: 6, categories: ["Fitness", "Health", "Education"] },
//   { id: 7, categories: ["Business", "Photography", "Science"] },
//   { id: 8, categories: ["Space", "History", "Movies", "Books"] },
// ];

const buttons = [
    { id: 1, categories: ["Interior", "Nature", "Ocean", "Beach"] },
    { id: 2, categories: ["Food", "Architecture", "Technology", "Fashion"] },
    { id: 3, categories: ["Wildlife", "Travel", "Landscape", "Art"] },
    { id: 4, categories: ["Music", "Sports", "Automotive", "Fitness"] },
    { id: 5, categories: ["Health", "Education", "Business", "Photography"] },
    { id: 6, categories: ["Science", "Space", "History", "Movies"] },
    { id: 7, categories: ["Books", "Design", "Travel", "Nature"] },
    { id: 8, categories: ["Innovation", "Culture", "Tech", "Sports"] },
  ];
  