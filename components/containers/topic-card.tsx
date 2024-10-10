import Image from "next/image";
import React from "react";
interface TopicCardProps {
  // title: string;
  // description: string;
  author: string;
  imgUrl: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ imgUrl, author }) => {
  return (
    <div className="relative hidden lg:mt-7 lg:flex h-[150px] flex-col justify-between overflow-hidden rounded-sm border p-4 sm:h-[150px] md:h-[200px] lg:h-[275px] lg:w-[300px] lg:rounded-md">
      <div className="absolute bottom-4 text-white z-50">
      <p>Featured</p>
      <p>{author}</p>
      </div>

      <Image
        className="object-cover brightness-75"
        fill={true}
        src={imgUrl}
        alt={author}
      ></Image>
    </div>
  );
};

export default TopicCard;
