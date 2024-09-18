import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchComponent = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

 

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    // fetchData();

    if (searchQuery.trim() !== "") {
      router.push(`/s/photos/${encodeURIComponent(searchQuery)}`);
    }

    console.log("form submitted");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="relative mx-auto flex items-center gap-2"
      >
        <button className="absolute left-[10px]" type="submit">
          <MagnifyingGlassIcon></MagnifyingGlassIcon>
        </button>

        <Input
          className="pl-8 bg-gray-100 border-gray-100 h-10 rounded-xl"
          type="text"
          placeholder="Search for an image..."
          onChange={handleChange}
          value={searchQuery}
        ></Input>
        {/* <Button type="submit" variant={"default"}>
          Search
        </Button> */}
      </form>

    
    </div>
  );
};

export default SearchComponent;

