import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { User } from "@/pages/user/[id]";
import { HeartFilledIcon, ImageIcon } from "@radix-ui/react-icons";
import { RiFolder2Fill, RiImage2Fill } from "react-icons/ri";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import { Separator } from "../ui/separator";
interface NewTabsProps {
  userData: User;
}

const NewTabs: React.FC<NewTabsProps> = ({ userData }) => {
  const triggers = [
    {
      id: 1,
      name: "photos",
      total: `${userData.total_photos}`,
      icon: <RiImage2Fill />,
      url: ``,
    },
    {
      id: 2,
      name: "likes",
      total: `${userData.total_likes}`,
      icon: <HeartFilledIcon />,
      url: `/likes`,
    },
    {
      id: 3,
      name: "collections",
      total: `${userData.total_collections}`,
      icon: <RiFolder2Fill />,
      url: `/collections`,
    },
  ];

  const router = useRouter();

  const isActive = (pathname: string) => {
    console.log("Current path:", router.asPath);
    console.log("Item path:", pathname);
    return router.asPath === pathname;
  };

  return (
    <>
      <div className="mt-20 w-full">
        <ul className="flex items-center gap-6 md:gap-10">
          {triggers.map((item) => (
            <li key={item.id}>
              <Link
                href={`/user/${userData.username.toLowerCase()}${item.url}`}
                className={`${isActive(`/user/${userData.username.toLowerCase()}${item.url}`) ? "text-neutral-950" : ""} flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-neutral-950`}
              >
                <span className="hidden md:block">{item.icon}</span>
                <div className="flex items-center gap-1">
                  <span>{capitalizeFirstLetter(item.name)}</span>
                  <span className="hidden md:block">({item.total})</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Separator className="mt-4 w-full"></Separator>
      </div>
    </>
  );
};

export default NewTabs;
