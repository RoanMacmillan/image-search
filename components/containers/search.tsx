import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface SearchProps { 

inputClassName?: string;
iconClassName?: string;
btnClassName?: string;
className?: string;

}

const SearchComponent: React.FC <SearchProps> = ({inputClassName, iconClassName, btnClassName, className}) => {
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
    <div className={`w-full ${className || ''}`}>
      <form
        onSubmit={handleSearch}
        className="relative mx-auto flex items-center gap-2"
      >
        <button className={`absolute left-[10px] ${btnClassName || ''}`} type="submit">
          <MagnifyingGlassIcon className={`h-[15px] w-[15px] ${iconClassName || ''}`}></MagnifyingGlassIcon>
        </button>

        <Input
          // className="pl-8 bg-gray-100 border-gray-100 h-10 rounded-xl"
          className={`pl-8 bg-gray-100 border-gray-100 focus:bg-white text-sm h-10 rounded-xl ${inputClassName || ''}`}
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

