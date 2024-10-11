import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
const Topic = () => {

  const router = useRouter();
  const isActive = (pathname: string) => router.asPath === pathname;


  return (
    <ul className="flex items-center gap-7 overflow-hidden">
      {topics.map((topic, index) => (
        <Link
          href={`/t/${topic.slug}`}
          key={index}
          className={`${isActive(`/t/${topic.slug}`) ? 'text-black font-semibold' : '' } hover:text-black transition-colors text-nowrap`}
        >
          {topic.name}
        </Link>
      ))}
    </ul>
  );
}; 

const topics = [
  { name: "3D Renders", slug: "3d-renders" },
  { name: "Animals", slug: "animals" },
  { name: "Architecture & Interiors", slug: "architecture-interior" },
  { name: "Experimental", slug: "experimental" },
  { name: "Fashion & Beauty", slug: "fashion-beauty" },
  { name: "Film", slug: "film" },
  { name: "Food & Drink", slug: "food-drink" },
  { name: "Nature", slug: "nature" },
  { name: "People", slug: "people" },
  { name: "Sports", slug: "sports" },
  { name: "Travel", slug: "travel" },
  { name: "Rising Stars", slug: "rising-stars" },
];

export default Topic;
