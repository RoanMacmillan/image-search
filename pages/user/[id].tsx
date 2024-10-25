import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Image from "next/image";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { RiExternalLinkLine, RiMapPin2Line } from "react-icons/ri";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import { Button } from "@/components/ui/button";
import Overlay from "@/components/containers/image-overlay";
import TagList from "@/components/containers/tags";
import { Separator } from "@/components/ui/separator";
import TabsDemo from "@/components/containers/user-tabs";

interface UserProps {
  userData: User;
  userPhotosData: Photos[];
}

interface User {
  name: string;
  first_name: string;
  last_name: string;
  profile_image: { large: string; medium: string; small: string };
  location: string;
  tags: Tags;
  username: string;
  photos: Photos[];
  bio: string;
  twitter_username: string;
  instagram_username: string;
  portfolio_url: string;
  likes: string[];
}

export interface Photos {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
    profile_image: { small: string; large: string };
  };
  slug: string;
}

interface Tags {
  custom: CustomTags[];
}

interface CustomTags {
  title: string;
}

const UserPage: React.FC<UserProps> = ({ userData, userPhotosData }) => {
  useEffect(() => {
    console.log(userData);
    // console.log(userPhotosData);
    console.log(userData.username);
  }, []);

  return (
    <Layout title={`${userData.name}`}>
      <Nav></Nav>

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
            <p>{userData.location || "Unknown"}</p>
          </div>
          <div className="flex items-center gap-1">
            <RiExternalLinkLine></RiExternalLinkLine>

            <p>Connect with {userData.username}</p>
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


      <TabsDemo data={userPhotosData} activeUser={userData.username}></TabsDemo>


      {/* <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
        {userPhotosData.map((item, index) => (
          <li key={index}>


            <Overlay
              imgSrc={item.urls.regular}
              imgName={item.id}
              avatarSrc={item.user.profile_image.small}
              name={item.user.name}
              slugUrl={item.slug}
              accountName={item.user.username}
            ></Overlay>
          </li>
        ))}
      </ul> */}

      {/* <p>{userData.name}</p> */}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const userResponse = await axios.get(
      `https://api.unsplash.com/users/${id}?client_id=${apiKey}`,
    );
    const userData = userResponse.data;

    const userPhotosResponse = await axios.get(
      `https://api.unsplash.com/users/${id}/photos?client_id=${apiKey}`,
    );

    const userPhotosData = userPhotosResponse.data;

    // console.log(userData);
    // console.log(id);
    // console.log(userPhotosData);

    return {
      props: {
        userData,
        userPhotosData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
    };
  }
};

export default UserPage;
