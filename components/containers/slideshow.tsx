import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface SlideshowProps {

imageClass?: string;

}

const Slideshow: React.FC<SlideshowProps> = ({imageClass}) => {

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const images = [
      "https://images.unsplash.com/photo-1511860810434-a92f84c6f01e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzZXJ0fGVufDB8fDB8fHwy",
      'https://images.unsplash.com/photo-1597649260553-3863dfbc8559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D',
    //   'https://images.unsplash.com/photo-1565309314992-eab1ad836d0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11dGVkJTIweWVsbG93fGVufDB8fDB8fHwy',
      '/fruits.jpg'
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
      }, 6000);
  
      return () => clearInterval(interval);
    }, []);
    return (
        <>
             {/* <div className="absolute inset-0"> */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Picture"
            width={500}
            height={500}
            className={`${imageClass || ''} absolute w-full brightness-100  h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      {/* </div> */}
        </>
    );
};

export default Slideshow;
