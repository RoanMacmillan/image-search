import React, { useEffect } from "react";
import { Collections } from "@/pages/user/[id]/collections";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import { Button } from "../ui/button";

interface CollectionsProps {
  collectionData: Collections[];
}

const CollectionsContainer: React.FC<CollectionsProps> = ({
  collectionData,
}) => {
  const classNames = ["div1", "div2", "div3"];

  useEffect(() => {


    // console.log(collectionData.map((item) => item.preview_photos.length));
    console.log(collectionData);

  }, []);

  return (
    <>
    

      {collectionData.length === 0 && <p>No collections available</p>}

      <ul className="mx-auto mt-4 grid sm:grid-cols-2 lg:mt-10 sm:gap-4 lg:gap-6 pb-10 lg:grid-cols-3">
        {collectionData.slice(0, 3).map((item) => (
          <div className="mb-10 sm:mb-0" key={item.id}>
            <Link href={`/collections/${item.id}`} className="as flex w-full gap-1 overflow-hidden rounded-md hover:opacity-80">
              <div className={`relative w-[70%]`}>
                <Image
                  src={item.preview_photos[0].urls.regular}
                  alt={item.preview_photos[0].id}
                  fill={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                ></Image>
              </div>

              <div className="flex w-[30%] flex-col gap-1">
    {Array.from({ length: 2 }).map((_, index) => {
      const photo = item.preview_photos[index + 1]; // Get the second and third images if they exist
      return (
        <div key={index} className="relative flex-grow">
          <Image
            src={photo?.urls.regular || placeholder}
            alt={photo?.id || "Placeholder"}
            fill={true}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      );
    })}
  </div>
            </Link>

            <div className="mt-3">
              <h1 className="text-lg font-semibold">{item.title}</h1>
              <div className="text-sm flex items-center gap-1">
                <p>{item.total_photos} images</p>
                <p>-</p>
                <p>Created by {item.user.name}</p>
              </div>

              {item.tags.length > 0 ? (
                <div className="flex items-center gap-1 mt-2">
                  {item.tags.slice(1, 4).map((tag, index) => (
                    <Button
                      className="h-7 text-sm px-[12px]"
                      size={"default"}
                      variant={"secondary"}
                      key={index}
                    >
                      {capitalizeFirstLetter(tag.title)}
                    </Button>
                  ))}
                </div>
              ) : (
                <p>No tags available</p>
              )}
            </div>
          </div>


        ))}
      </ul>

      {/* 

      <div className="flex gap-1 as rounded-md overflow-hidden max-w-[416px]">
        <div className="w-[70%] relative">
          <Image
            src={images[0]}
            alt="A collection"
            fill={true}
            className="object-cover"
          ></Image>
        </div>

        <div className="w-[30%] flex flex-col gap-1">
          <div className="relative flex-grow">
            <Image
              src={images[1]}
              alt="A collection"
              fill={true}
              className="object-cover"
            ></Image>
          </div>

          <div className="relative flex-grow">
            <Image
              src={images[2]}
              alt="A collection"
              fill={true}
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div> */}

    </>
  );
};

const placeholder = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';

const images = [
  "https://images.unsplash.com/photo-1512737594936-baf87e4b0924?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1492943070567-a3717f648f9b?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1497515098781-e965764ab601?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
];

export default CollectionsContainer;
