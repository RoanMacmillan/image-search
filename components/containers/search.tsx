import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

interface UnsplashImage {
  id: string;
  description: string | null;
  urls: {
    small: string;
    full: string;
    regular: string;
  };
}

const SearchComponent = () => {
  const [photoData, setPhotoData] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Error state


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);
    console.log(`input: ${inputValue}`);
    console.log(`State: ${searchQuery}`);
  };

  const fetchData = async () => {
    // const url = `https://api.unsplash.com/photos/?client_id=${apiKey}`
    setLoading(true);
    setError(null);  // Reset error state before new fetch

    const url = `https://api.unsplash.com/search/photos?query=${searchQuery}&per_page=10&client_id=${apiKey}`;

    try {
      const response = await fetch(url);

      const data = await response.json();

      setPhotoData(data.results);

      console.log(data.results);
    } catch (error) {
        setError('Failed to fetch images. Please try again later.');

      console.error("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="w-full max-w-[800px] p-4">

      <form
        onSubmit={handleSearch}
        className="mx-auto flex max-w-[500px] items-center gap-2"
      >
        <Input
          className=""
          type="text"
          placeholder="Search for an image..."
          onChange={handleChange}
          value={searchQuery}
        ></Input>
        <Button type="submit" variant={"default"}>
          {loading ? "Loading..." : "Search"}
        </Button>
      </form>

      {error && <p>{error}</p>}        {/* Display error message */}


      <ul className="mt-4 flex flex-wrap">
        {photoData.length > 0 &&
          photoData.map((item) => (
            <li key={item.id} className="mt-2">
              <Image
                src={item.urls.regular}
                alt="hello"
                width={800}
                height={800}
              ></Image>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
