import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

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

interface PhotoDetailPageProps {
  photoData: UnsplashImage;
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({ photoData }) => {
  return (
    <div className="p-4">
      <Image
        src={photoData.urls.regular}
        alt={photoData.description || "Unsplash Image"}
        width={500}
        height={500}
        className="bg-slate-200"
      />
      <p className="mt-4">{photoData.description || "No description available"}</p>
      {/* <div className="bg-red-400 w-[50px] h-[50px]"></div> */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      props: {
        photoData: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PhotoDetailPage;
