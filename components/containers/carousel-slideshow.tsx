import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slideshow from "./slideshow";

const Item = () => {
  return (
    <div className="relative flex h-[150px] items-end overflow-hidden rounded-sm border p-4 sm:h-[150px] md:h-[200px] lg:h-[275px] lg:w-[300px] lg:rounded-md">
      <div className="relative z-20 text-white">
        <h1 className="text-xs text-white">Discover Photop+</h1>
        <div>Unlimited Downloads.</div>
        <div>Premium Images.</div>
        <div>No ads.</div>
      </div>

      <div className="absolute inset-0">


      <Slideshow></Slideshow>

      </div>
    </div>
  );
};

export default Item;
