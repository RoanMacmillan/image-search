import React, { useState, useEffect } from "react";
import Link from "next/link";
import Overlay from "./image-overlay";
import { UnsplashImage } from "@/pages/s/photos/[id]";

interface RelatedProps {
  images: UnsplashImage[];
}

const Related: React.FC<RelatedProps> = ({ images }) => {
  return (
    <ul className="mx-auto mt-0 md:columns-2 lg:mt-2 lg:columns-3 lg:gap-6">
      {images.map((item, index) => (
        <li
          className={`group relative mb-6 lg:mb-0 lg:hover:brightness-100`}
          key={index}
        >
          <Overlay
            avatarSrc={item.user.profile_image.medium}
            imgSrc={item.urls.regular}
            name={item.user.name}
            imgName={item.alt_description}
            accountName={item.user.username}
            slugUrl={item.slug}
          ></Overlay>
        </li>
      ))}
    </ul>
  );
};



export default Related;
