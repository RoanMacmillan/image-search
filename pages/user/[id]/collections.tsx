import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import React, { useEffect } from "react";
import { User } from "@/pages/user/[id]";
import UserProfile from "@/components/containers/user-profile";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Photos } from "@/pages/user/[id]";
import Image from "next/image";
import NewTabs from "@/components/containers/new-tabs";
import Overlay from "@/components/containers/image-overlay";
import CollectionsContainer from "@/components/containers/collection-container";

interface CollectionsProps {
  userData: User;
  collectionsData: Collections[];
}

export interface Collections {
  title: string;
  id: number;
  preview_photos: Previews[];
  total_photos: number;
  tags: Tags[];
  user: {

    name: string;
    username: string;
    profile_image: { 
      small: string;
    }
  }
  description: string;
}

interface Tags {

    title: string;
}

interface Previews {
  id: string;
  slug: string;
  urls: {
    regular: string;
    small: string;
  };
  height: number;
}

const Collections: React.FC<CollectionsProps> = ({
  collectionsData,
  userData,
}) => {
  useEffect(() => {
    console.log(collectionsData);
  }, []);

  return (
    <>
      <Layout title={`${userData.first_name}'s collections`}>
        <Nav></Nav>
        <UserProfile userData={userData}></UserProfile>

        <NewTabs userData={userData}></NewTabs>

        <CollectionsContainer collectionData={collectionsData}></CollectionsContainer>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const perPage = 5;

  try {
    const collectionsResponse = await axios.get(
      `https://api.unsplash.com/users/${id}/collections?client_id=${apiKey}&per_page=${perPage}`,
    );

    const collectionsData = collectionsResponse.data;

    const userResponse = await axios.get(
      `https://api.unsplash.com/users/${id}?client_id=${apiKey}`,
    );

    const userData = userResponse.data;

    return {
      props: {
        collectionsData,
        userData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
};

export default Collections;
