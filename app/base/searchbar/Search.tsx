"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SearchIcon from "@atlaskit/icon/core/search";
import { retrieveNumbersFromSearch } from "@/app/utils/SearchUtils";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (searchInput: string) => {
    setSearch(searchInput);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const retrievedNumbers = retrieveNumbersFromSearch(search);
    const season = retrievedNumbers[0];
    const episode = retrievedNumbers[1];
    router.push(`/search-result/${season}/${episode}`);
  };

  

  return (
    <form
      className="flex items-center w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        className="flex-1
                    px-4
                    py-2
                    rounded-l-full
                    border
                    border-gray-300
                    bg-gray-100
                    text-sm
                    text-black
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500
                    placeholder-gray-300"
        placeholder="Example: Season 2 Episode 7"
        aria-label="Search, Please write an episode number and season to begin the search, Example: Season 2 Episode 7"
        onChange={(e) => handleChange(e.target.value)}
        value={search}
      />
      <button
        className="px-4
      py-2
      bg-[var(--color-green)]
      hover:bg-[#6fcf66]
      rounded-r-full
      border
      border-l-0
      border-gray-300
      text-sm
      text-[#fffff]
       focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500"
        type="submit"
        aria-label="Submit search"
      >
        <SearchIcon label="submit search" size="small" />
      </button>
    </form>
  );
};

export default Search;
