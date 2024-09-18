import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
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
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({ photoData, error }) => {
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
      <ul className="mt-4 flex flex-col gap-2 justify-center px-2">
        {photoData.length > 0 &&
          photoData.map((item) => (
            <li key={item.id} className="">
              {/* {loading ?   (   <div className="bg-red-500" style={{ width: `${item.width}px`, height: `${item.height}px` }}> */}
              {/* </div> */}

              {/* ) : ( */}
              <Link href={`/photos/${item.id}`}>
              <Image
                src={item.urls.regular}
                alt="hello"
                width={500}
                className={`${!loading ? "animate-pulse" : ""} bg-slate-200`}
                height={500}
                onLoad={handleLoad}
              ></Image>

              </Link>

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
  const url = `https://api.unsplash.com/search/photos?query=${id}&per_page=3&client_id=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return {
      props: {
        photoData: data.results,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        photoData: [],
        error: "Failed to fetch images. Try again later.",
      },
    };
  }
};
