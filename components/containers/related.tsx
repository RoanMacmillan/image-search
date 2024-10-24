import React, { useState, useEffect } from "react";
import Link from "next/link";
import Overlay from "./image-overlay";
import { UnsplashImage } from "@/pages/s/photos/[id]";
import Image from "next/image";
import Download from "./download";
import Favourite from "./favourite";
interface RelatedProps {
  images: UnsplashImage[];
}

const Related: React.FC<RelatedProps> = ({ images }) => {
  return (
    <ul className="mx-auto mt-0 md:columns-2 lg:mt-8 lg:columns-3 lg:gap-6">
      {images.map((item, index) => (
        <li
          className={`group relative lg:mb-0 lg:hover:brightness-100`}
          key={index}
        >

          <div className="flex md:hidden items-center mt-16 gap-2">
          <Image
            src={item.user.profile_image.medium}
            alt={item.user.name}
            width={36}
            height={36}
            className="rounded-full"
          ></Image>
          <p>{item.user.name}</p>
          </div>

          <Overlay
            avatarSrc={item.user.profile_image.medium}
            imgSrc={item.urls.regular}
            name={item.user.name}
            imgName={item.alt_description}
            accountName={item.user.username}
            slugUrl={item.slug}
            
          ></Overlay>
          <div className="flex justify-between md:hidden mt-3">
          <Favourite item={item.id}></Favourite>
          <Download
            name={item.user.name}
            attributionImg={item.urls.small}
            username={item.user.username}
          ></Download>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Related;
