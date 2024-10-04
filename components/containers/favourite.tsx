import React, { useState, useEffect } from "react";
import { PhotoItem } from "@/data/photos";
import photoGallery from "@/data/photos";
import { toast, Toaster } from "sonner";
import {
  HeartFilledIcon,
  HeartIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface FavouriteProps {
  item: any;
}

const Favourite: React.FC<FavouriteProps> = ({ item }) => {
  const [favourite, setFavourite] = useState<boolean>(false);

  const toggleFavourite = () => {
    setFavourite((prev) => {
      if (!prev) {
        console.log(`added ${item} to favourites`);

        toast.success(`${item} added to favourites!`, {
          icon: <HeartFilledIcon className="text-red-400" />,
          duration: 3000,
        });
      } else {
        console.log(`removed ${item} from favourites`);

        toast.success(`${item} removed from favourites!`, {
          icon: <HeartIcon />,
          duration: 3000,
        });
      }
      return !prev;
    });
  };

 

  return (
    <>
      <Button
        onClick={() => toggleFavourite()}
        // className={`${isFavourite(item) ? 'bg-red-400' : ''} shadow-sm`}
        variant="secondary"
        className="pointer-events-auto h-8 px-[14px]"
      >
       

        <HeartFilledIcon
        className={`${favourite === true ? "text-red-400" : ""}`}
        ></HeartFilledIcon>
      </Button>
    </>
  );
};

export default Favourite;
