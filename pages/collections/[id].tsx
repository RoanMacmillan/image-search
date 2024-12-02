import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Overlay from "@/components/containers/image-overlay";
import { UnsplashImage } from "../s/photos/[id]";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import { Collections } from "../user/[id]/collections";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CollectionDetailProps {
  collectionData: UnsplashImage[];
collectionData2: Collections;

}



const CollectionDetail: React.FC<CollectionDetailProps> = ({
  collectionData, collectionData2
}) => {

    useEffect(() => {

        console.log(collectionData);
        console.log(collectionData2);

        // !collectionData && console.log('no data');

        collectionData.length === 0 && console.log('no data');

    }, [])

  return (
    <>
    <Layout title="Collections">
    <Nav></Nav>

      <div className="mt-6 lg:mt-0">
    <h1 className="text-4xl font-semibold mb-2">{collectionData2.title}</h1>
    <p>{!collectionData2.description ? `A collection by ${collectionData2.user.username}` : `${collectionData2.description}` }</p>

    <div className="flex items-center gap-2 mt-6">

    <Avatar>
    <AvatarImage src={collectionData2.user.profile_image.small} alt={collectionData2.user.name} ></AvatarImage>
    <AvatarFallback>{collectionData2.user.username}</AvatarFallback>
    </Avatar>

    <span>{collectionData2.user.username}</span>


    </div>
    

    </div>

    <h2 className="mt-10">{collectionData2.total_photos} images</h2>


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

    const collectionResponse2 = await axios.get(`https://api.unsplash.com/collections/${id}?client_id=${apiKey}`);

    const collectionData2 = collectionResponse2.data;

    const collectionData = collectionResponse.data;

    return {
      props: {
        collectionData,
        collectionData2,
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
