import React from "react";
import { Collections } from "@/pages/user/[id]/collections";
import Image from "next/image";
import Link from "next/link";

interface CollectionsProps {
  collectionData: Collections[];
}

const CollectionsContainer: React.FC<CollectionsProps> = ({
  collectionData,
}) => {
  const classNames = ["div1", "div2", "div3"];

  return (
    <>
      {/* <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
        {collectionData.map((item) => (
          <li className="" key={item.id}>
            <Link href="" className="parent overflow-hidden rounded-md">
              {item.preview_photos.slice(1, 3).map((photo, index) => (
                <div
                  key={index}
                  className={`${classNames[index]} relative bg-red-200`}
                >
                  <Image
                    src={photo.urls.regular}
                    alt={photo.id}
                    fill={true}
                    className="object-cover"
                  ></Image>
                </div>
              ))}
            </Link>
          </li>
        ))}
      </ul> */}

      <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 space-y-6 lg:space-y-0 gap-6">
        {collectionData.map((item) => (
          <div className="as flex w-full gap-1 overflow-hidden rounded-md">
            <div className="relative w-[70%]" key={item.id}>
              <Link href={`/collection/${item.id}`}>
                <Image
                  src={item.preview_photos[0].urls.regular}
                  alt={item.preview_photos[0].id}
                  fill={true}
                  className="object-cover"
                ></Image>
              </Link>
            </div>

            <div className="flex w-[30%] flex-col gap-1">
              {item.preview_photos.slice(1, 3).map((photo, index) => (
                <div key={index} className="relative flex-grow">
                  <Link href={`/collection/${item.id}`}>
                    <Image
                      src={photo.urls.regular}
                      alt={photo.id}
                      fill={true}
                      className="object-cover"
                    ></Image>
                  </Link>
                </div>
              ))}
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

const images = [
  "https://images.unsplash.com/photo-1512737594936-baf87e4b0924?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1492943070567-a3717f648f9b?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1497515098781-e965764ab601?w=126&dpr=2&h=147&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTkyMDYxfHxlbnwwfHx8fHw%3D",
];

export default CollectionsContainer;
