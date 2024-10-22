import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import { CalendarIcon, CameraIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import TagList from "@/components/containers/tags";
import Overlay from "@/components/containers/image-overlay";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import Similar from "@/components/containers/similar";

interface Topic {
  title: string;
  id: string;
  slug: string;
}

interface Tag {

  title: string;
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
  alt_description: string;
  tags: Tag[];
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
  photoData2: UnsplashImage[];
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({
  photoData,
  photoData2,
}) => {
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
    // console.log(`/photos/${photoData.slug}`);
    // console.log(`topic: ${photoData.topics[0].title}`);

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
          className="mx-auto bg-slate-200"
          priority={true}
        />

        <div className="mt-3 lg:mt-8">
          <div className="flex justify-between">
            <div className="justify-between lg:flex lg:gap-14">
              <div>
                <p className="text-sm text-gray-500">Views</p>
                <span>{photoData.views.toLocaleString()}</span>
              </div>

              <div>
                <p className="mt-4 text-sm text-gray-500 lg:mt-0">Downloads</p>
                <span>{photoData.downloads.toLocaleString()}</span>
              </div>

              <div className="hidden lg:block">
                <p className="mt-4 text-sm text-gray-500 lg:mt-0">
                  Featured in
                </p>

                {photoData.topics.length > 0 ? (
                  <span>{photoData.topics[0].title}</span>
                ) : (
                  <span>--</span>
                )}
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
        <TagList btns={photoData.tags}></TagList>
      </div>

   

      <div className="max-w-[1300px] mx-auto mt-10 lg:mt-20">

      <h2 className="font-bold text-xl lg:text-2xl">Related Images</h2>
        
        {/* {photoData.tags.length > 0 ? (
          <Similar relatedPhoto={photoData.tags[0].title}></Similar>
        ) : ( 
          <div>No related photos found</div>
        )} */}

      {/* <Similar relatedPhoto={photoData.topics[0].title}></Similar> */}

      </div>

    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`;
  const url2 = `https://api.unsplash.com/search/photos?query=${id}&per_page=10&client_id=${apiKey}`;

  try {
    // const response = await fetch(url);
    // const data = await response.json();

    const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);

    const data1 = await response.json();
    const data2 = await response2.json();

    return {
      props: {
        photoData: data1,
        photoData2: data2.results,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PhotoDetailPage;
