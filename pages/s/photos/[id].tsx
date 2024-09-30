import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import BlurFade from '../../../components/animations/blurfade';
import { Button } from "@/components/ui/button";

interface UnsplashImage {
  id: string;
  description: string | null;
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

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photoData, error, slug }) => {
  const [loading, setLoading] = useState<boolean>(false);


  const handleLoad = () => {
    setLoading(true);
  };

 

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Layout title='search'>
      <Nav></Nav>

      <div className="hidden lg:block mt-auto w-full">
      <h1 className="text-3xl font-bold ">{capitalizeFirstLetter(slug)}</h1>
      {/* <p className="hidden lg:block mt-4 text-lg">The internets source for images.</p> */}
      {/* <p className="hidden lg:block mb-4 text-lg">Powered by creators around the world.</p> */}

    <div className="flex gap-2 mt-4">
      {related.map((item, index) => (

        <Button size={'lg'} variant={'outline'} key={index}>{capitalizeFirstLetter(item)}</Button>


      ))}

      </div>

      </div>

      <ul className="md:columns-2 lg:columns-3 lg:gap-6 mt-6 mx-auto lg:mt-2">
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

            <div className="overflow-hidden">

              <Link href={`/photos/${item.id}`}>
              <Image
                src={item.urls.regular}
                alt="hello"
                width={500}
                className={`${!loading ? "animate-pulse" : ""} bg-slate-200 mt-4 lg:mt-6`}
                height={500}
                onLoad={handleLoad}
                priority={true}
              ></Image>

              </Link>

              </div>

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


const related = ['related', 'tags', 'placeholder', 'goes', 'here', 'images', 'photos', 'illustrations']