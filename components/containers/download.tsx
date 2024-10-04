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

interface DownloadProps {
  username: string;
  attributionImg: string;
}

const Download: React.FC<DownloadProps> = ({ username, attributionImg }) => {
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

      <DialogContent className="bg-white">
        <DialogHeader className="text-left">
          <DialogTitle className="mb-2 mt-2">Say Thanks!</DialogTitle>
          <DialogDescription className="">
            Give a shoutout to {username} or copy the text below to attribute.
          </DialogDescription>
          <Image src={attributionImg} alt='attribution image' width={100} height={100}></Image>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Download;
