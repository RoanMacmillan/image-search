// import React from "react";
// import { Button } from "../ui/button";
// import { useRouter } from "next/router";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

// const NavigationSlider = () => {
//   const router = useRouter();

//   const handleCategory = (category: string) => {
//     console.log(category);

//     router.push(`/s/photos/${encodeURIComponent(category.toLowerCase())}`);
//   };

//   return (
//     <>
//       <Carousel>
//         <CarouselContent>
//           <CarouselItem>
//             <ul className="flex w-full items-center gap-10 pt-6">
//               {buttons.map((btn, index) => (
//                 <li key={index}>
//                   <button
//                     // onClick={() => handleCategory(btn)}
//                     type="button"
//                     className="p-0 text-sm font-semibold text-[#767676]"
//                   >
//                     {btn}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </CarouselItem>
//         </CarouselContent>
//       </Carousel>
//     </>
//   );
// };

// export default NavigationSlider;

// const buttons = [
//   "Interior",
//   "Nature",
//   "Ocean",
//   "Beach",
//   "Food",
//   "Architecture",
//   "Technology",
//   "Fashion",
//   "Wildlife",
//   "Travel",
//   "Landscape",
//   "Art",
//   "Music",
//   "Sports",
//   "Automotive",
//   "Fitness",
//   "Health",
//   "Education",
//   "Business",
//   "Photography",
//   "Science",
//   "Space",
//   "History",
//   "Movies",
//   "Books",
// ];


import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[93%] mx-auto mt-6 hidden lg:block"
    >
      <CarouselContent>
        {Array.from({ length: 30 }).map((_, index) => (
          <CarouselItem key={index} className="basis-10 lg:basis-20">
            <div className="p-1">
              {/* <Card className="p-0"> */}
                {/* <CardContent className="flex aspect-square items-center justify-center p-0"> */}
                  <span className="text-sm font-semibold">{index + 1}</span>
                {/* </CardContent> */}
              {/* </Card> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext className="" />
    </Carousel>
  )
}

