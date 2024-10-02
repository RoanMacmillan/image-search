import React, { useState, useEffect } from "react";
import { PhotoItem } from "@/data/photos";
import photoGallery from "@/data/photos";
import { toast, Toaster } from "sonner";
import {
  HeartFilledIcon,
  HeartIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface FavouriteProps  {

    item: any;
}

const Favourite: React.FC = () => {

 
   

  const [favourite, setFavourite] = useState<PhotoItem[]>([]);


  const toggleFavourite = () => {

    toast.success(`added to favourites!`, {
        icon: <HeartFilledIcon className="text-red-400" />,
        duration: 3000,
      });

      console.log('clicked')
   
  };

  const isFavourite = (photo: PhotoItem) => {
    return favourite.some((fav) => fav.id === photo.id);
  };


    return (
        <>
            <Button
                  onClick={() => toggleFavourite()}
                  // className={`${isFavourite(item) ? 'bg-red-400' : ''} shadow-sm`}
                  variant="secondary"
                  className="px-[14px] pointer-events-auto"
                >
                  {/* {isFavourite(item) ? (
                    <HeartFilledIcon className=""></HeartFilledIcon>
                  ) : (
                    <HeartIcon></HeartIcon>
                  )} */}

                  <HeartFilledIcon
                    // className={`${isFavourite(item) ? "text-red-400" : ""}`}
                  ></HeartFilledIcon>
                </Button>
        </>
    );
};

export default Favourite;
