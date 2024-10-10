import Link from "next/link";
import React, { useState, useEffect } from "react";

const Topic = () => {
  return (
    <ul className="flex items-center gap-7 overflow-hidden">
      {topics.map((topic, index) => (
        <Link
          href={`/t/${topic.slug}`}
          key={index}
          className="hover:text-black text-nowrap"
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
