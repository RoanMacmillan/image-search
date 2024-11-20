import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Overlay from "@/components/containers/image-overlay";
import { UnsplashImage } from "../s/photos/[id]";
import { capitalizeFirstLetter } from "@/utils/capitilize";

interface CollectionDetailProps {
  collectionData: UnsplashImage[];
}

const CollectionDetail: React.FC<CollectionDetailProps> = ({
  collectionData,
}) => {

    useEffect(() => {

        console.log(collectionData);

    }, [])

  return (
    <>
    <Layout title="Collections">
    <Nav></Nav>

    

      <ul className="mx-auto mt-4 md:columns-2 lg:columns-3 lg:gap-6">

        {collectionData.map((item, index) => (

          <li key={index}>

            <Overlay
            
            avatarSrc={item.user.profile_image.small}
            imgSrc={item.urls.regular}
            slugUrl={item.slug}
            name={item.user.name}
            // imgName={capitalizeFirstLetter(item.alt_description)}
            imgName={item.alt_description}
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
    const collectionResponse = await axios.get(
      `https://api.unsplash.com/collections/${id}/photos?client_id=${apiKey}`,
    );

    const collectionData = collectionResponse.data;

    return {
      props: {
        collectionData,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
};

export default CollectionDetail;
