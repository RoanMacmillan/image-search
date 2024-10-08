import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import BlurFade from "../../../components/animations/blurfade";
import { Button } from "@/components/ui/button";
import { getRelatedWords } from "@/lib/getRelatedWords";
import Overlay from "@/components/containers/image-overlay";
import { Toaster } from "@/components/ui/toaster";

interface UnsplashImage {
  id: string;
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  description: string;
  alt_description: string;
  urls: {
    small: string;
    full: string;
    regular: string;
  };

  blur_hash: string;
  width: number;
  height: number;
  slug: string;
}

interface PhotoDetailProps {
  photoData: UnsplashImage[];
  error: string | null;
  slug: string;
}

interface RelatedWords {
  word: string;
  score: number;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({
  photoData,
  error,
  slug,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  // const [wordData, setWordData] = useState<RelatedWords[]>([]);

  // useEffect(() => {
  //   const fetchWords = async () => {
  //     const words = await getRelatedWords(slug);
  //     setWordData(words);
  //   };

  //   fetchWords();
  // }, [wordData]);

  useEffect(() => {
    console.log(photoData);
  }, []);

  const handleLoad = () => {
    setLoading(true);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Layout title="search">
        <Nav></Nav>

        <div className="mt-6  w-full overflow-hidden">
          <h1 className="text-3xl font-bold">{capitalizeFirstLetter(slug)}</h1>
          {/* <p className="hidden lg:block mt-4 text-lg">The internets source for images.</p> */}
          {/* <p className="hidden lg:block mb-4 text-lg">Powered by creators around the world.</p> */}

          {/* <div className="mt-4 flex gap-2">
            {wordData.map((item, index) => (
              <Button size={"lg"} variant={"outline"} key={index}>
                {capitalizeFirstLetter(item.word)}
              </Button>
            ))}
          </div> */}
        </div>

        <ul className="mx-auto mt-0 md:columns-2 lg:mt-2 lg:columns-3 lg:gap-6">
          {photoData.length > 0 &&
            photoData.map((item) => (
              <li key={item.id} className="">
                {/* {loading ?   (   <div className="bg-red-500" style={{ width: `${item.width}px`, height: `${item.height}px` }}> */}
                {/* </div> */}

                {/* ) : ( */}
                {/* <BlurFade
              className="overflow-hidden md:mt-0"
              delay={0.1}
              inView
            > */}

                <Overlay
                  avatarSrc={item.user.profile_image.small}
                  imgSrc={item.urls.regular}
                  slugUrl={item.slug}
                  name={item.user.name}
                  imgName={capitalizeFirstLetter(item.alt_description)}
                  accountName={item.user.username}
                ></Overlay>
                {/* <Image src={item.profile_image.large} alt='d' width={50} height={50}></Image> */}

                {/* </BlurFade> */}

                {/* ) */}

                {/* } */}
              </li>
            ))}
        </ul>
      </Layout>
    </>
  );
};

export default PhotoDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${id}&per_page=10&client_id=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return {
      props: {
        photoData: data.results,
        error: null,
        slug: id,
      },
    };
  } catch (error) {
    return {
      props: {
        photoData: [],
        error: "Failed to fetch images. Try again later.",
        slug: id,
      },
    };
  }
};

const related = [
  "related",
  "tags",
  "placeholder",
  "goes",
  "here",
  "images",
  "photos",
  "illustrations",
];
