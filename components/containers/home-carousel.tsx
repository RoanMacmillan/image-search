import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Item from "./carousel-slideshow";
import Collections from "./carousel-collections";
const HomeCarousel = () => {
  return (
    <>
      <h1 className="text-3xl mt-12 font-bold lg:hidden">Photop</h1>

      <Carousel className="mt-3">
        <CarouselContent className="">
          <CarouselItem className="lg:basis-3/3 basis-3/4 sm:basis-1/2">
            <Item></Item>
          </CarouselItem>
          <CarouselItem className="lg:basis-3/3 basis-3/4 sm:basis-1/2">
          <Collections></Collections>

          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default HomeCarousel;
