import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { capitalizeFirstLetter } from "@/utils/capitilize";

interface TagsProps {
  // Define your props here
  btns: Btn[];
  // item: string;
}

interface Btn {
    type: number;
    title: string;
  }
  
  

const Tags: React.FC<TagsProps> = ({ btns }) => {
  const router = useRouter();

  // Your component logic here

  return (
    <ul className="flex gap-2 flex-wrap">
      {btns.map((item, index) => (
        <li key={index}>
          <Link href={`/s/photos/${item.title}`}>
          <Button className="h-8 px-[14px]" size={'default'} variant={'secondary'}>{capitalizeFirstLetter(item.title)}</Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
