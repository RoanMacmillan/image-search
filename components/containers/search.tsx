import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const SearchComponent = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchQuery(inputValue);
  };

  const handleCategory = ( category: string) => {
    console.log(category);

    router.push(`/s/photos/${encodeURIComponent(category.toLowerCase())}`);
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
              onClick={() => handleCategory(btn)}
              variant={"secondary"}
              type='button'
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
