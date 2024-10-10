import React, { ReactEventHandler, useState } from "react";
import Link from "next/link";
import SearchComponent from "./search";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PopoverDemo } from "./navmenu";
import NavigationSlider from "./navigation-slider";
import { Button } from "../ui/button";
import { EmblaCarousel } from "./embla";
import Favourite from "./favourite";
import Download from "./download";
interface NavProps {
  photo?: any;
}

const Nav: React.FC<NavProps> = ({ photo }) => {
  return (
    <>
      <div className="left-0 top-0 z-[50] w-full overflow-hidden bg-white px-0 pb-0 pt-3 shadow-none lg:fixed lg:px-4 lg:pt-4">
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
              className="hidden whitespace-nowrap text-sm text-gray-500 hover:text-black sm:block"
              href="/"
            >
              Get Photop+
            </Link>
            <Link className="hidden text-sm sm:block" href="/">
              <Button className="" variant="outline">
                Submit an image
              </Button>
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

        {!photo && 
        
        <NavigationSlider></NavigationSlider>
        // <div>place</div>
        
        }

        {photo && (
          
          <div className="mb-0 mt-6 flex items-center justify-between pb-[12px] lg:mb-0 lg:mt-8">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={photo.user.profile_image.medium} />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
              <div className="">
                <h1 className="text-sm font-semibold leading-tight">
                  {photo.user.name}
                </h1>
                <h2 className="text-xs leading-tight text-gray-500">
                  {photo.user.username}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Favourite item={photo.description}></Favourite>
              <Download
                name={photo.user.name}
                username={photo.user.username}
                attributionImg={photo.urls.regular}>

                </Download>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
