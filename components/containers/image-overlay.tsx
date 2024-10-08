import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Download from "./download";
import { AvatarDemo } from "./avatar";
import Favourite from "./favourite";

interface OverlayProps {
  imgSrc: string;
  avatarSrc: string;
  slugUrl?: string;
  name: string;
  imgName: string;
  accountName: string;
}

const Overlay: React.FC<OverlayProps> = ({ imgSrc, slugUrl, name, avatarSrc, imgName, accountName }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoad = () => {
    setLoading(true);
  };

  return (
    <div className="image-container relative overflow-hidden">
      <Link className="" href={`/photos/${slugUrl}`}>
        <Image
          src={imgSrc}
          alt="hello"
          width={500}
          className={`${!loading ? "animate-pulse" : ""} relative bg-slate-200 mt-6`}
          height={500}
          onLoad={handleLoad}
          priority={true}
        ></Image>
      </Link>

      <div className="gradient"></div>
      <div className="hover-element hidden md:flex flex-col justify-between p-4 pb-10">
        <div className="flex justify-end gap-2">
        <Favourite item={imgName}></Favourite>

        <Download attributionImg={imgSrc} username={accountName} name={name}></Download>
        </div>


        <div className="flex items-center gap-2">
        <AvatarDemo img={avatarSrc}></AvatarDemo>

        <span className="text-white font-medium pointer-events-auto">{name}</span>
        </div>
      </div>

    </div>
  );
};

export default Overlay;
