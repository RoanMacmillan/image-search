import React, { useEffect, useState } from "react";
import Overlay from "./image-overlay";

interface SimilarProps {
  relatedPhoto: string;
}

interface UnsplashImage {

  id: string;
  likes: number;
  views: number;
  slug: string;
  downloads: number;
  created_at: string;

  description: string | null;
  alt_description: string;
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

const Similar: React.FC<SimilarProps> = (relatedPhoto) => {
  const [state, setState] = useState<UnsplashImage[]>([]);

  useEffect(() => {
    fetchSimilarPhotos();
  }, []);

  const fetchSimilarPhotos = async () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${relatedPhoto}&per_page=10&client_id=${apiKey}`,
      );
      const data = await response.json();
      setState(data.results);
    console.log(data); 

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <ul className="mx-auto md:columns-2  lg:columns-3 lg:gap-6">

    {state.map((item:any) => (

      <li key={item.id}>

        <Overlay
          avatarSrc={item.user.profile_image.small}
          imgSrc={item.urls.regular}
          slugUrl={item.slug}
          name={item.user.name}
          imgName={item.alt_description}
          accountName={item.user.username}
        ></Overlay>

      </li>
      

    ))}
</ul>

  )
};

export default Similar;
