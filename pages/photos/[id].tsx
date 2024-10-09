import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import { CalendarIcon, CameraIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Tags from "@/components/containers/tags";


interface Topic {

  title: string;
  id: string;
}

interface UnsplashImage {
  id: string;
  likes: number;
  views: number;
  slug: string;
  downloads: number;
  created_at: string;
  topics: Topic[];
  description: string | null;
  alt_description: string | null;
  tags: [];
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
      text: "Free to use under Photop License",
    },
  ];

  useEffect(() => {
    console.log(photoData);
    console.log(`/photos/${photoData.slug}`);

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <Layout slug={photoData.slug} title="Photos">
      <Nav photo={photoData}></Nav>

      {/* slug detail component begins here (extract to own module) */}

      <div className="">
        <Image
          src={photoData.urls.regular}
          alt={photoData.description || "Unsplash Image"}
          width={500}
          height={500}
          className="bg-slate-200 mx-auto"
          priority={true}
        />

        <div className="mt-3 lg:mt-8">
          <div className="flex justify-between">
            <div className="justify-between lg:flex lg:w-1/4">
              <div>
                <p className="text-sm text-gray-500">Views</p>
                <span>{photoData.views.toLocaleString()}</span>
              </div>

              <div>
                <p className="mt-4 text-sm text-gray-500 lg:mt-0">Downloads</p>
                <span>{photoData.downloads.toLocaleString()}</span>
              </div>

              <div className="hidden lg:block">
                <p className="mt-4 text-sm text-gray-500 lg:mt-0">Featured in</p>
                <span>{photoData.topics[0].title}</span>
              </div>

            </div>

            <div className="flex gap-2">
              <Button
                className="h-8 px-[14px]"
                size={"default"}
                variant={"outline"}
              >
                Info
              </Button>
              <Button
                className="h-8 px-[14px]"
                size={"default"}
                variant={"outline"}
              >
                Share
              </Button>
            </div>
          </div>

          <ul className="mt-6 flex flex-col gap-[6px]">
            {iconsList.map((item, index) => (
              <li className="flex items-center gap-2" key={index}>
                <item.component />
                <p className="text-sm text-slate-500">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* slug detail ends here */}

      <div className="mb-4 mt-6 lg:mb-6 lg:mt-6">
        <Tags btns={photoData.tags}></Tags>
      </div>
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
