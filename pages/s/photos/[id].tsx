import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import { capitalizeFirstLetter } from "@/utils/capitilize";
import Overlay from "@/components/containers/image-overlay";
import { SelectDemo } from "@/components/containers/search-filter";
import { Button } from "@/components/ui/button";

export interface UnsplashImage {
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
  likes: number;
  created_at: string;
}

interface PhotoDetailProps {
  photoData: UnsplashImage[];
  error: string | null;
  slug: string;
}

const PhotoDetail: React.FC<PhotoDetailProps> = ({
  photoData,
  error,
  slug,
}) => {
  const [filteredImages, setFilteredImages] =
    useState<UnsplashImage[]>(photoData);
  const [activeBtn, setActiveBtn] = useState("all");
  const [activeSort, setActiveSort] = useState("Newest");

  const landScapeState = photoData.filter((item) => item.width > item.height);
  const portraitState = photoData.filter((item) => item.width < item.height);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const n = [2, 1, 5, 4, 9, 1];


  const handleCalc = () => {

    n.sort((a, b) => b - a);
    console.log(n)

  }

  
  

  useEffect(() => {

    console.log(photoData);
    // console.log(filteredImages);

    const x = photoData.map((item) => item.description);



  }, []);

  const handleFilter = (value: string) => {
    setActiveBtn(value);
    console.log(value);

    if (value === "Landscape") {
      setFilteredImages(landScapeState);
    } else if (value === "Portrait") {
      setFilteredImages(portraitState);
    } else {
      setFilteredImages(photoData);
    }
  };

  const handleSort = (value: string) => {
    const sortByLikes = [...filteredImages].sort((a, b) => b.likes - a.likes);
    const sortByNewest = [...filteredImages].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );

    const sortByRelevance = [...filteredImages].sort((a, b) => b.width - a.width);

    setActiveSort(value);
    console.log(value);

    if (value === "Popular") {
      setFilteredImages(sortByLikes);
    } else if (value === "Newest") {
      // setFilteredImages(sortByNewest);
      setFilteredImages(sortByNewest)
    } else {
      setFilteredImages(sortByRelevance);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Layout title="search">
        <Nav></Nav>

        <div className="mt-6 flex w-full justify-between">
          <h1 className="text-3xl font-bold">{capitalizeFirstLetter(slug)}</h1>

          <div className="hidden items-center gap-2 lg:flex">
            <SelectDemo
              filterType="sort"
              placeholder="Sort by: Relevance"
              valueChange={handleSort}
            ></SelectDemo>
            <SelectDemo
              filterType="orientation"
              placeholder="Orientation: All"
              valueChange={handleFilter}
            ></SelectDemo>
          </div>
        </div>

        <ul className="mx-auto mt-0 md:columns-2 lg:mt-2 lg:columns-3 lg:gap-6">
          {photoData.length > 0 &&
            filteredImages.map((item) => (
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
