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

interface LikesProps {
  userData: User;
  likesData: Photos[];
}

const UserLikes: React.FC<LikesProps> = ({ userData, likesData }) => {
  useEffect(() => {
    console.log(likesData);
  }, []);

  return (
    <>
      <Layout title={`${userData.first_name}'s likes`}>
        <Nav></Nav>
        <UserProfile userData={userData}></UserProfile>

        

        <NewTabs userData={userData}></NewTabs>

        {likesData.length === 0 && <p>No likes available.</p>}

        <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">
          {likesData.map((item) => (
            <li key={item.id}>
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
        </ul>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const userResponse = await axios.get(
      `https://api.unsplash.com/users/${id}?client_id=${apiKey}`,
    );

    const likesResponse = await axios.get(
      `https://api.unsplash.com/users/${id}/likes?client_id=${apiKey}`,
    );

    const userData = userResponse.data;

    const likesData = likesResponse.data;

    return {
      props: {
        userData,
        likesData,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {},
    };
  }
};

export default UserLikes;
