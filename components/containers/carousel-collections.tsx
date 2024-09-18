import Link from "next/link";
import React from "react";
import photoGallery from "@/data/photos";
import Image from "next/image";

const Collections = () => {
  return (
    <div className="relative p-4 h-[150px] flex flex-col justify-between sm:h-[150px] md:h-[200px] lg:h-[275px] lg:w-[300px] lg:rounded-md overflow-hidden rounded-sm border">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-base">Collections</h1>
        <Link className="text-sm underline" href="/">See all</Link>
      </div>

      <ul className="flex flex-col gap-2">
        {photoGallery.slice(0, 2).map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            <div className="w-[36px] relative bg-red-200 rounded-sm overflow-hidden h-[36px]">
            <Image fill src={item.url} alt={item.title}></Image>
            </div>
            <div>
            <h2 className="text-sm font-semibold">{item.category.slice(0, 1)}</h2>
            <p className="text-xs">by Photop+ Collections</p>
            </div>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Collections;
