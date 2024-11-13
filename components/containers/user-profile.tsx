import React from 'react';
import Image from 'next/image';
import { RiMapPin2Line, RiExternalLinkLine } from 'react-icons/ri';
import { capitalizeFirstLetter } from '../../utils/capitilize';
import TagList from './tags';
import { HoverCardDemo } from './hover-card';
import { User } from '@/pages/user/[id]';
type UserProfileProps = {
    // Define your props here
    userData: User;
};

const UserProfile: React.FC<UserProfileProps> = ({userData}) => {
    return (
        <>
            {/* Your component JSX goes here */}


            <div className="mt-10 items-start justify-center gap-6 md:flex lg:mt-16 lg:gap-10">
        <Image
          src={userData.profile_image.large}
          alt={userData.name}
          width={100}
          height={100}
          className="rounded-full"
        ></Image>

        <div>
          <h1 className="mt-5 text-3xl font-semibold md:mt-0 lg:text-5xl">{`${capitalizeFirstLetter(userData.first_name)} ${capitalizeFirstLetter(userData.last_name)}`}</h1>
          <p className="mt-3">
            {userData.bio ||
              `Download free high-resolution photos curated by ${userData.username}`}
          </p>

          <div className="mt-3 flex items-center gap-1">
            <RiMapPin2Line></RiMapPin2Line>
            <p className="text-gray-600 hover:text-black cursor-pointer">{userData.location || "Unknown"}</p>
          </div>
          <div className="flex items-center gap-1">
            <RiExternalLinkLine></RiExternalLinkLine>

            {/* <p>Connect with {userData.username}</p> */}

            <HoverCardDemo userData={userData}></HoverCardDemo>

          </div>

          <p className="mt-3">Interests</p>
          {userData.tags.custom.length > 0 ? (
            <div className="mt-4">
              <TagList btns={userData.tags.custom}></TagList>
            </div>
          ) : (
            <p>No custom tags available.</p>
          )}
        </div>
      </div>


        </>
    );
};

export default UserProfile;
