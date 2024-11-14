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

    const classNames = ['div1', 'div2', 'div3'];

  return (
    <>
      <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
        {collectionData.map((item) => (
          <li className="" key={item.id}>
            <Link href="" className="parent overflow-hidden rounded-md">
              {item.preview_photos.slice(0, 3).map((photo, index) => (
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
      </ul>
    </>
  );
};

export default CollectionsContainer;
