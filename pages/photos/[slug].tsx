import React, { useEffect, useState } from "react";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { decode } from "blurhash";


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
}

interface PhotoDetailProps {
  photoData: UnsplashImage[];
  error: string | null;
}

const PhotoDetail: React.FC <PhotoDetailProps> = ({photoData, error}) => {

  const [loading, setLoading] = useState<boolean>(false);
  

  const handleLoad = () => {

    setLoading(true);

  }

  if (error) {
    return <div>{error}</div>;
  }

  

  return (
    <>

      <ul className="mt-4 flex flex-wrap px-2">
        {photoData.length > 0 &&
          photoData.map((item) => (
            <li key={item.id} className='mt-2'>

              {/* {loading ?   (   <div className="bg-red-500" style={{ width: `${item.width}px`, height: `${item.height}px` }}> */}
              {/* </div> */}
              
            
            {/* ) : ( */}

              <Image
              src={item.urls.regular}
              alt="hello"
              width={item.width}
              className={`${!loading ? 'animate-pulse' : ''} bg-slate-200`}
              height={item.height}
              onLoad={handleLoad}
            ></Image>

            {/* ) */}
              
            
            
            {/* } */}
            

            



             
            </li>
          ))}
      </ul>
    </>
  );
};

export default PhotoDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${slug}&per_page=3&client_id=${apiKey}`;

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
