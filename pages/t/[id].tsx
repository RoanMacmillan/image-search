import ContributorsCard from "@/components/containers/contributors";
import Overlay from "@/components/containers/image-overlay";
import Layout from "@/components/containers/layout";
import Nav from "@/components/containers/nav";
import TopicCard from "@/components/containers/topic-card";
import { Button } from "@/components/ui/button";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

interface PhotoProps {
  photo: Topic;
}

interface Topic {
  slug: string;
  title: string;
  preview_photos: Preview[];
  description: string;
  top_contributors: [];

  cover_photo: {
    urls: {
      full: string;
      regular: string;
    };

    user: {
      name: string;
    };
  };
}

interface Preview {
  urls: {
    regular: string;
  };
  slug: string;
  id: string;
  user: {
    name: string;
    username: string;

    profile_image: { small: string };
  };
}

const Photo: React.FC<PhotoProps & { photos: Preview[] }> = ({
  photo,
  photos,
}) => {
  useEffect(() => {
    console.log(photos);
  }, []);

  return (
    <Layout title={photo.slug}>
      <Nav></Nav>
      <div className="flex justify-between">
        <div className="mt-10 flex flex-col items-start justify-end lg:mt-0">
          <h1 className="text-3xl font-bold lg:text-5xl">{photo.title}</h1>
          <h2 className="mt-2 text-sm text-gray-500 lg:text-base">
            Curated by Photop
          </h2>
          <p className="mb-4 mt-3 max-w-[500px] sm:text-sm lg:text-lg">
            {/* {photo.description} */}
            {photo.slug === "rising-stars"
              ? "Discover the best new photographers on Photop"
              : photo.description}
          </p>
          <Button
            variant={"default"}
            size={"lg"}
            className="text-md font-semibold lg:mt-4"
          >{`Submit to ${photo.title}`}</Button>
        </div>
        <div className="flex gap-4">
          <ContributorsCard
            contributors={photo.top_contributors}
          ></ContributorsCard>
          <TopicCard
            imgUrl={photo.cover_photo.urls.regular}
            author={photo.cover_photo.user.name}
          ></TopicCard>
        </div>
      </div>
      <ul className="mx-auto mt-3 md:columns-2 lg:mt-7 lg:columns-3 lg:gap-6">
        {photos.slice(1, 10).map((item, index) => (
          <li key={index}>
            {/* {item.slug} */}

            <Overlay
              imgSrc={item.urls.regular}
              imgName={item.id}
              avatarSrc={item.user.profile_image.small}
              name={item.user.name}
              slugUrl={item.slug}
              accountName={item.user.username}
            ></Overlay>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.unsplash.com/topics/${id}?client_id=${apiKey}`;
  const photosUrl = `https://api.unsplash.com/topics/${id}/photos?client_id=${apiKey}`;

  try {
    // const response = await fetch(url);
    // const data = await response.json();

    const [urlReponse, photosUrlReponse] = await Promise.all([
      fetch(url),
      fetch(photosUrl),
    ]);

    const topicData = await urlReponse.json();
    const photosData = await photosUrlReponse.json();

    return {
      props: {
        photo: topicData,
        photos: photosData,
      },
    };
  } catch (error) {
    return {
      props: {
        photo: null,
        photos: null,
      },
    };
  }
};

export default Photo;
