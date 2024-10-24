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
import axios from "axios";
import Related from "@/components/containers/related";

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
  relatedData: UnsplashImage[];
}

const PhotoDetailPage: React.FC<PhotoDetailPageProps> = ({
  photoData,
  relatedData,
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
    // console.log(photoData);
    // console.log(relatedData);

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <Layout slug={photoData.slug} title="Photos">
      <Nav photo={photoData}></Nav>

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

      <div className="mx-auto mt-10 max-w-[1300px] lg:mt-20">
        <h2 className="text-xl font-bold lg:text-2xl">Related Images</h2>

        <Similar related={relatedData}></Similar>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const mainImageResponse = await axios.get(
    `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`,
  );

  const photoData = mainImageResponse.data;

  const relatedKeyWord = photoData.tags[0].title || "dog";
  console.log('Related Keyword:', relatedKeyWord);

  const relatedImagesReponse = await axios.get(
    `https://api.unsplash.com/search/photos?query=${relatedKeyWord}&per_page=10&client_id=${apiKey}`,
  );

  const relatedData = relatedImagesReponse.data.results;

  return {
    props: {
      photoData,
      relatedData,
    },
  };
};

export default PhotoDetailPage;







// import { GetServerSideProps } from 'next';
// import axios from 'axios';

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params!;
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;

//   try {
//     // Fetch main image
//     const mainImageResponse = await axios.get(
//       `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`
//     );
//     const photoData = mainImageResponse.data;

//     // Fallback if there are no tags on the main photo
//     const relatedKeyWord = photoData.tags.length > 0 ? photoData.tags[0].title : 'dog';

//     // Fetch related images based on the keyword
//     const relatedImagesResponse = await axios.get(
//       `https://api.unsplash.com/search/photos?query=${relatedKeyWord}&per_page=10&client_id=${apiKey}`
//     );
//     const relatedData = relatedImagesResponse.data.results;

//     return {
//       props: {
//         photoData,
//         relatedData,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data from Unsplash API:', error.message);

//     // Optional: Customize error handling behavior
//     if (error.response) {
//       // The server responded with a status other than 2xx
//       console.error('Error Response Data:', error.response.data);
//     } else if (error.request) {
//       // The request was made, but no response was received
//       console.error('No response received:', error.request);
//     } else {
//       // Some other error occurred
//       console.error('Error Message:', error.message);
//     }

//     // Option 1: Return a 404 page if the image is not found or an error occurs
//     return {
//       notFound: true, // Will render the 404 page
//     };

//     // Option 2: You could return fallback data if needed
//     // return {
//     //   props: {
//     //     photoData: null,
//     //     relatedData: [],
//     //   },
//     // };
//   }
// };
