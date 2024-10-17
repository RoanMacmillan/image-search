import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Image from "next/image";

export function Upload() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Submit an image</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-sm bg-white lg:p-10 sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="text-left text-4xl font-bold">
            Hi Guest!
          </DialogTitle>
          <DialogDescription className="text-left ">
              <p className="mt-3 hidden lg:block">
                Thanks for contributing to Unsplash! You are awesome.
              </p>
              <p className="mt-3">
                To save you time and increase your chance of being featured,
                please ensure that your images meet our submission guidelines.
              </p>
              <ul>
                {list.map((item, index) => (
                  <li className="list-disc" key={index}>
                    <p className="mt-3 text-xs">{item}</p>
                  </li>
                ))}
              </ul>

          </DialogDescription>
        </DialogHeader>

       
          <div className="flex items-center justify-center gap-2 mt-3">
            <Checkbox onClick={handleChange} id="terms1" />
            <div className="leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              
            </div>
           
          </div>

          <Button
            className={`${checked ? "" : "pointer-events-none opacity-50"}`}
            type="submit"
          >
            Start Uploading
          </Button>
      </DialogContent>
    </Dialog>
  );
}

const img =
  "https://images.unsplash.com/photo-1678133284350-9738bd594a45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D";

const list = [
  "Only upload high quality images. A standard landscape photo should be at least 5 MP and 2,500 x 2,000 pixels in size.",
  "Images are clear, original and are not over edited. Images do not contain nudity or violence. Unsplash is a place for people of all ages.",
  "You must own the rights to any image you share on Unsplash. You can read more about this in our Terms.",
];
