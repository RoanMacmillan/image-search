import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Download from "./download";
import Favourite from "./favourite";



interface OverlayProps {

    imgSrc: string;
    slugUrl: string;
    name: string;

}


const Overlay: React.FC<OverlayProps> = ({imgSrc, slugUrl, name}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoad = () => {
    setLoading(true);
  };

  return (
    <div className="overflow-hidden image-container relative">
      <Link className="" href={`/photos/${slugUrl}`}>
        <Image
          src={imgSrc}
          alt="hello"
          width={500}
          className={`${!loading ? "animate-pulse" : ""} relative mt-4 bg-slate-200 lg:mt-6`}
          height={500}
          onLoad={handleLoad}
          priority={true}
        ></Image>

     
      

      </Link>
      <div className="hover-element flex justify-between">

<Download username={imgSrc}></Download>
<Favourite></Favourite>

<span className="text-white">{name}</span>

</div>



    </div>
  );
};

export default Overlay;
