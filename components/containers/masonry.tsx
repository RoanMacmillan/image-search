import React, { useState } from "react";
import SearchComponent from "./search";
import photoGallery from "@/data/photos";
import { PhotoItem } from "@/data/photos";
import Image from "next/image";
import BlurFade from "../animations/blurfade";
import Overlay from "./image-overlay";

const Masonry = () => {
  const [initialList, setInitialList] = useState<PhotoItem[]>(photoGallery);

  return (
    <ul className="mx-auto mt-10 md:columns-2 lg:mt-10 lg:columns-3 lg:gap-6">
      {initialList.map((item) => (
        <li
          className={`group relative mb-6 lg:mb-0 lg:hover:brightness-100`}
          key={item.id}
        >
          <BlurFade className="overflow-hidden md:mt-0" delay={0.1} inView>
            <Overlay
              avatarSrc={item.profilePic}
              imgSrc={item.url}
              name={item.username}
            ></Overlay>
          </BlurFade>

          <div className="right-4 top-4 z-50 mt-2 flex justify-between lg:absolute lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Masonry;
