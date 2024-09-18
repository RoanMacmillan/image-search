import Image from "next/image";
import React, { useEffect, useState } from "react";

const Item = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const images = [
    "https://images.unsplash.com/photo-1722338366671-29a40959fad3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722100348715-7c6d9f97d6a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1533172634255-be2cc549c7e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlnbmV0dGV8ZW58MHx8MHx8fDA%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-4 h-[150px] flex items-end sm:h-[150px] md:h-[200px] lg:h-[275px] lg:w-[300px] lg:rounded-md overflow-hidden rounded-sm border">
      <div className="text-white relative z-20">
        <h1 className="text-white text-xs">Discover Photop+</h1>
        <div>Unlimited Downloads.</div>
        <div>Premium Images.</div>
        <div>No ads.</div>
      </div>

      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Picture"
            width={500}
            height={500}
            className={`absolute w-full brightness-75 h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Item;
