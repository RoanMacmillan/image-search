import React, { useEffect, useState } from "react";
import Overlay from "./image-overlay";

interface SimilarProps {
  related: UnsplashImage[];
}

interface UnsplashImage {

  id: string;
  likes: number;
  views: number;
  slug: string;
  downloads: number;
  created_at: string;

  description: string | null;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
  blur_hash: string;
  width: number;
  height: number;
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
    };
  };
}

const Similar: React.FC<SimilarProps> = ({related}) => {


  return (

    <ul className="mx-auto md:columns-2  lg:columns-3 lg:gap-6">

    {related.map((item: UnsplashImage) => (

      <li key={item.id}>

        <Overlay
          avatarSrc={item.user.profile_image.small}
          imgSrc={item.urls.regular}
          slugUrl={item.slug}
          name={item.user.name}
          imgName={item.alt_description}
          accountName={item.user.username}
        ></Overlay>

      </li>
      

    ))}
</ul>

  )
};

export default Similar;
