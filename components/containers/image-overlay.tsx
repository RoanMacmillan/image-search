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
  userSlug?: string;
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
          width={800}
          className={`${!loading ? "animate-pulse" : ""} relative bg-slate-200 mt-3 lg:mt-6`}
          height={800}
          
          onLoad={handleLoad}
          priority={true}
        ></Image>
      </Link>

      <div className="gradient hidden md:block"></div>
      <div className="hover-element hidden md:flex flex-col justify-between p-4 pb-10">
        <div className="flex justify-end gap-2">
        <Favourite item={imgName}></Favourite>

        <Download attributionImg={imgSrc} username={accountName} name={name}></Download>
        </div>


        <Link href={`/user/${accountName}`} className="flex items-center gap-2">
        <AvatarDemo img={avatarSrc}></AvatarDemo>

        <span className="text-white font-medium pointer-events-auto">{name}</span>
        </Link>
      </div>
 
      

    </div>
  );
};

export default Overlay;
