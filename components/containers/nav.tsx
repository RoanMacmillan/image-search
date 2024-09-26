import React, { ReactEventHandler, useState } from "react";
import Link from "next/link";
import SearchComponent from "./search";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PopoverDemo } from "./navmenu";
import NavigationSlider from "./navigation-slider";
import { Button } from "../ui/button";
import { EmblaCarousel } from "./embla";
interface NavProps {
  photo?: any;
}

const Nav: React.FC<NavProps> = ({ photo }) => {
  return (
    <>
      <div className="lg:fixed left-0 top-0 z-[50] w-full overflow-hidden bg-white px-2 pt-3 pb-0 lg:pt-4 shadow-none lg:px-4">
        <nav className="flex items-center justify-between gap-4 border-b-0 lg:gap-8">
          <div className="flex w-full items-center gap-4 lg:gap-6">
            <Link href="/">
              <div className="flex gap-1">
                <div className="h-6 w-4 bg-slate-950"></div>
                <div className="h-4 w-4 bg-slate-950"></div>
              </div>
            </Link>

            <SearchComponent inputClassName="h-9 md:h-10"></SearchComponent>
          </div>

          <div className="flex items-center gap-4 lg:gap-8">
            <Link
              className="hidden whitespace-nowrap text-sm sm:block"
              href="/"
            >
              Get Photop+
            </Link>
            <Link className="hidden text-sm sm:block" href="/">
              <Button className="" variant='outline'>Submit an image</Button>
            </Link>
            {/* <Link className="hidden text-sm sm:block lg:font-medium" href="/">
              Ipsum
            </Link> */}

            <Avatar className="hidden h-8 w-8 lg:block">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>

            <PopoverDemo></PopoverDemo>
          </div>

          
        </nav>
        {/* {photo &&  
        
        <div className="flex justify-between items-center mt-0 mb-0 lg:mb-0 lg:mt-[12px] pb-[12px]">
        <div className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <div className="">
            <h1 className="text-sm leading-tight font-semibold">
              {photo.photographerFullName}
            </h1>
            <h2 className="text-xs leading-tight text-gray-500">
              {photo.username}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Favourite item={photo}></Favourite>
          <PopoverDownload photo={photo}/>
        </div>
      </div>

        
        } */}
        {/* <PopoverDownload photo={photo}></PopoverDownload> */}

        {/* <NavigationSlider></NavigationSlider> */}
        {/* <CarouselSize></CarouselSize> */}
          <NavigationSlider></NavigationSlider>
          {/* <EmblaCarousel></EmblaCarousel> */}

      </div>
    </>
  );
};

export default Nav;
