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
import { HoverCardDemo } from "@/components/containers/hover-card";
import UserProfile from "@/components/containers/user-profile";
import Link from "next/link";
import NewTabs from "@/components/containers/new-tabs";
interface UserProps {
  userData: User;
  userPhotosData: Photos[];
}

export interface User {
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
  total_likes: string;
  total_photos: string;
  total_collections: string;
  social: {
    instagram_username: string;
    twitter_username: string;
    paypal_email: string;
    portfolio_url: string;

  }
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
    console.log(userData.total_likes);
  }, []);

  return (
    <Layout title={`${userData.name}`}>
      <Nav></Nav>


        <UserProfile userData={userData}></UserProfile>



        <NewTabs userData={userData}></NewTabs>



      {/*  */}






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
