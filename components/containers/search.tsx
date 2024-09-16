import React, { useReducer, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/router";
import { setServers } from "dns";

const SearchComponent = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

  const handleCategory = (e: any, category: string) => {
    e.preventDefault();
    console.log(category);

    router.push(`/photos/${encodeURIComponent(category)}`);
  };

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    // fetchData();

    if (searchQuery.trim() !== "") {
      router.push(`/photos/${encodeURIComponent(searchQuery)}`);
    }

    console.log("form submitted");
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
          Search
        </Button>
      </form>

      <ul className="mt-4 w-full mx-auto max-w-[500px] flex flex-wrap gap-2">
        {buttons.map((btn, index) => (
          <li key={index}>
            <Button
              onClick={(e) => handleCategory(e, btn)}
              variant={"secondary"}
            >
              {btn}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

const buttons = ["Interior", "Nature", "Ocean", "Beach", "Food"];
