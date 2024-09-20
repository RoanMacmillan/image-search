import React, { useState } from 'react';
import SearchComponent from './search';
import photoGallery from '@/data/photos';
import { PhotoItem } from "@/data/photos";
import Image from 'next/image';
import BlurFade from '../animations/blurfade';

const Masonry = () => {

    const [initialList, setInitialList] = useState<PhotoItem[]>(photoGallery);


    return (

        <ul className="md:columns-2 lg:columns-3 lg:gap-6 mt-10 max-w-[1300px] mx-auto lg:mt-10">
        {initialList.map((item) => (
          <li
            className={`relative  mb-6 group lg:hover:brightness-100 lg:mb-0`}
            key={item.id}
          >
            {/* <Link
              className=" z-10 w-full h-full lg:absolute top-0"
              href={`/photos/${item.slug}`}
            > */}
             
            {/* </Link> */}

              <div className="lg:absolute z-10 left-4  bottom-6 lg:hover:cursor-pointer lg:opacity-0 group-hover:opacity-100 transition-opacity">
                <h1 className="font-semibold mt-0 lg:text-white">
                  {item.title}
                </h1>
                <p className="text-xs text-gray-500 lg:text-gray-200">
                  {item.description}
                </p>
              </div>
            <BlurFade
              className="rounded-sm overflow-hidden md:mt-0"
              delay={0.1}
              inView
            >
              <div className="relative">
                {/* <Link className="absolute top-0 w-full h-full hidden z-30 lg:block" href={`/photos/${item.slug}`}></Link> */}
                <Image
                  src={item.url}
                  alt={item.title}
                  width={800}
                  height={800}
                  priority={true}
                  className="mt-4 lg:mb-0"
                ></Image>
                <div className="absolute hidden hover:cursor-pointer opacity-0 lg:block bg-black lg:group-hover:opacity-30 top-0 left-0 w-full h-full"></div>
              </div>
            </BlurFade>


            <div className="flex justify-between mt-2 lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity z-50 lg:absolute top-4 right-4">
              <div className="flex justify-between w-full">
              {/* <Link className="lg:hidden" href={`/photos/${item.slug}`}>

              <Button className="" variant={'outline'}><MagnifyingGlassIcon/></Button>
            </Link> */}

                <div className="flex items-center gap-2">
                {/* <Favourite item={item}></Favourite> */}
                {/* <Button size={'sm'} variant={"outline"}><DownloadIcon/></Button> */}
                {/* <PopoverDownload photo={item}/> */}
                </div>

                {/* <Button className="shadow-sm" variant="outline">
                  <PlusIcon></PlusIcon>
                </Button> */}
              </div>

              {/* <Button className="shadow-sm" variant="outline">
                Download
              </Button> */}
            </div>
          </li>
        ))}
        </ul>
            
    );
};

export default Masonry;
