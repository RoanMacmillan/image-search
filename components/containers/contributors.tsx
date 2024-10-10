import Image from "next/image";
import React from "react";
interface ContributorsCardProps {
  contributors: Contributors[];
  // first_name: string;
}

export interface Contributors {
  name: string;
  username: string;
  profile_image: {
    small: string;
    medium: string;
  };
}

const ContributorsCard: React.FC<ContributorsCardProps> = ({
  contributors,
}) => {
  return (
    <div className="relative hidden h-[150px] flex-col justify-between overflow-hidden rounded-sm border p-4 sm:h-[150px] md:h-[200px] lg:mt-7 lg:flex lg:h-[275px] lg:w-[300px] lg:rounded-md">
      <h1>Top contributors</h1>

      <ul>
        {contributors.map((item, index) => (
          <li className="flex items-center" key={index}>
            <Image
              className="rounded-full"
              src={item.profile_image.medium}
              alt={item.name}
              width={36}
              height={36}
            ></Image>
            <div>

            <p>{item.name}</p>
            <p>{item.username}</p>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContributorsCard;
