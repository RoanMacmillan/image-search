import React, { ReactEventHandler, useState } from "react";
import Link from "next/link";
import SearchComponent from "./search";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PopoverDemo } from "./navmenu";
interface NavProps {
  photo?: any;
}

const Nav: React.FC<NavProps> = ({ photo }) => {
  return (
    <>
      <div className="fixed w-full top-0 bg-white border-b-[0px] shadow-none overflow-hidden z-[50] px-2 lg:px-4 left-0">
        <nav className=" flex border-b-0 items-center justify-between gap-4 lg:gap-8 py-3">

          <div className="flex items-center gap-4 lg:gap-6 w-full">
          <Link href="/">
            <div className="flex gap-1">
              <div className="w-4 h-6 bg-slate-950"></div>
              <div className="w-4 h-4 bg-slate-950"></div>
            </div>
          </Link>

          <SearchComponent></SearchComponent>

          </div>

          <div className="flex items-center gap-4 lg:gap-8">

            <Link className="text-sm lg:font-medium hidden sm:block whitespace-nowrap" href="/">
              Get Photop+
            </Link>
            <Link className="text-sm lg:font-medium hidden sm:block" href="/">
              Lorem
            </Link>
            <Link className="text-sm lg:font-medium hidden sm:block" href="/">
              Ipsum
            </Link>



            <Avatar className="w-8 h-8 hidden lg:block">
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
      </div>
    </>
  );
};

export default Nav;
