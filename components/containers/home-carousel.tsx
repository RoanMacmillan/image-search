import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Item from "./carousel-slideshow";
import Collections from "./carousel-collections";
import SearchComponent from "./search";
const HomeCarousel = () => {
  return (
    <>

      

      <div className="lg:flex mt-10 lg:mt-0 max-w-[1300px] justify-between lg:mx-auto gap-8">

      <h1 className="text-3xl lg:hidden block font-bold">Photop</h1>


      <div className="hidden lg:block mt-auto w-full">
      <h1 className="text-3xl lg:text-5xl font-bold">Photop</h1>
      <p className="hidden lg:block mt-4 text-lg">The internets source for images.</p>
      <p className="hidden lg:block mb-4 text-lg">Powered by creators around the world.</p>
      <SearchComponent btnClassName="left-[16px]" inputClassName="h-14 text-base pl-12" iconClassName='h-5 w-5'></SearchComponent>

      </div>


      <Carousel className="mt-3 lg:mt-0">
        <CarouselContent className="">
          <CarouselItem className="lg:basis-3/3 basis-3/4 lg:pr-8 sm:basis-1/2">
            <Item></Item>
          </CarouselItem>
          <CarouselItem className="lg:basis-3/3 basis-3/4 sm:basis-1/2">
          <Collections></Collections>

          </CarouselItem>
        </CarouselContent>
      </Carousel>

      </div>

    </>
  );
};

export default HomeCarousel;
