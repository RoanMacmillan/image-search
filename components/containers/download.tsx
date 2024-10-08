import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
  CopyIcon,
  LockClosedIcon,
  PlusIcon,
} from "@radix-ui/react-icons";

interface DownloadProps {
  name: string;
  attributionImg: string;
  username: string;
}

const Download: React.FC<DownloadProps> = ({ username, attributionImg, name }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="pointer-events-auto h-8 px-[14px]"
        >
          <DownloadIcon></DownloadIcon>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white w-[90%] max-w-[400px] md:max-w-[512px] rounded-sm px-4 py-6 md:py-4">
        <DialogHeader className="text-left ">
          <div className="md:flex flex-row-reverse justify-between gap-4">
          <div className="flex flex-col">
          <DialogTitle className="mb-2 md:mb-4 mt-0 md:mt-2">Say Thanks!</DialogTitle>
          <DialogDescription className="">
            Give a shoutout to {name} or copy the text below to attribute.
          </DialogDescription>

          <ul className="flex gap-4 md:gap-5">
          {icons.map((Item, index) => (
              <li className="mt-2 mb-2 md:mt-4" key={index}>
              <Item className="md:h-[18px] md:w-[18px]"></Item>
              </li>

          ))}

          </ul>

          <div className="flex items-center justify-between p-3 bg-slate-100 rounded-sm mt-4 md:mt-auto">
              <DialogDescription>
                Photo by {username} on Photop
              </DialogDescription>
              <Button
                variant={"ghost"}
                type="submit"
                size="sm"
                className="px-3"
              >
                <span className="sr-only">Copy</span>
                <CopyIcon className="h-4 w-4 " />
              </Button>
            </div>
            </div>
          <div className="w-[150px] h-[190px] bg-red-200 relative">
          <Image className="hidden md:flex rounded-sm" src={attributionImg} alt='attribution image' objectFit="cover" fill={true}></Image>
          </div>
          </div>

        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Download;

const icons = [

  TwitterLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,


]