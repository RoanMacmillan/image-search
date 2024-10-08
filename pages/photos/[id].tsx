import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import { CalendarIcon, CameraIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface UnsplashImage {
  id: string;
  likes: number;
  views: number;
  downloads: number;
  created_at: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
  blur_hash: string;
  width: number;
  height: number;
  user: {
    name: string;
    username: string;
    profile_image: {
      small: string;
      medium: string;
    };
  };
}

interface PhotoDetailPageProps {
  photoData: UnsplashImage;
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({ photoData }) => {
  const dateStr = photoData.created_at;

  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const iconsList = [
    {
      component: CalendarIcon,
      text: `Published on ${formattedDate}`,
    },
    {
      component: CameraIcon,
      text: photoData.user.username,
    },
    {
      component: CheckIcon,
      text: 'Free to use under Photop License' 
    },
  ];

  useEffect(() => {
    console.log(photoData);

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <Layout title="Photos">
      <Nav photo={photoData}></Nav>
      <Image
        src={photoData.urls.regular}
        alt={photoData.description || "Unsplash Image"}
        width={500}
        height={500}
        className="bg-slate-200"
        priority={true}
      />
      {/* <p className="mt-4">
        {photoData.description || "No description available"}
      </p> */}
      {/* <div className="bg-red-400 w-[50px] h-[50px]"></div> */}

      <div className="mt-3 lg:mt-6">
        <div className="flex justify-between">
          <div className="justify-between lg:flex lg:w-1/4">
            <div>
              <p className="text-sm text-gray-500">Views</p>
              <span>{photoData.views.toLocaleString()}</span>
            </div>

            <div>
              <p className="text-sm mt-4 lg:mt-0 text-gray-500">Downloads</p>
              <span>{photoData.downloads.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size={"default"} variant={"outline"}>
              Info
            </Button>
            <Button size={"default"} variant={"outline"}>
              Share
            </Button>
          </div>
        </div>

        {/* <div className="mt-6">
          <h1 className="font-semibold">{photoData.description}</h1>
          <p className="mt-2 max-w-[500px] text-sm text-slate-500">
            {photoData.alt_description}
          </p>
        </div> */}

        <ul className="mt-6 flex flex-col gap-[6px]">
          {iconsList.map((item, index) => (
            <li className="flex items-center gap-2" key={index}>
              <item.component />
              <p className="text-sm text-slate-500">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 mt-6 lg:mb-6 lg:mt-6"></div>
    </Layout>
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
