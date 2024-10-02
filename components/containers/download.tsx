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

interface DownloadProps {
  username: string;
}

const Download: React.FC<DownloadProps> = ({ username }) => {
  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'secondary'} className="pointer-events-auto">Download</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle className="mb-2 mt-2">Say Thanks!</DialogTitle>
            <DialogDescription className="">
              Give a shoutout to {username} or copy the text below to attribute.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    
  );
};

export default Download;
