import React from "react";
import { Button } from "../ui/button";
import Slideshow from "./slideshow";
import { ImPlus } from "react-icons/im";

const WideCard = () => {
  return (
    <>
      <div className="relative hidden h-[295px] w-[100%] items-center justify-between overflow-hidden rounded-lg border p-5 lg:flex">
        <img
          className="absolute right-0 h-[306px] w-[410px] object-cover"
          alt="pattern"
          src={bg}
        ></img>
        <div className="flex h-full w-[45%] flex-col">
          <ImPlus className="h-6 w-6" />

          <h1 className="mt-5 text-lg font-semibold leading-snug">
            Unlock everything
          </h1>
          <p className="text-lg font-semibold leading-snug">
            Photop+ has to offer.
          </p>
          <p className="text-lg font-semibold leading-snug text-gray-600">
            Cancel anytime.
          </p>

          <Button className="mt-auto font-semibold text-sm flex gap-1 w-[170px]" variant={"default"} type="button">
            <span>Upgrade to</span><strong className="font-bold">Photop+</strong>
          </Button>
        </div>

        {/* <div className="absolute inset-0"> */}

        <div className="h-full w-full">
          <div className="absolute right-[88px] top-[46px] h-[213px] w-[177px] bg-white">
            <Slideshow imageClass="bg-white p-1 brightness-100"></Slideshow>
          </div>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default WideCard;

const bg =
  "https://unsplash-assets.imgix.net/unsplashplus/module-desktop-bg-v2.png?w=410&dpr=2&auto=format&fit=crop&q=60";
