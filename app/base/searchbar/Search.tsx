"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from '@atlaskit/icon/core/search';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 120);

  useEffect(() => {
    router.replace(pathname);
  }, [pathname, router]);

  return (
    <form className="flex items-center w-full max-w-md mx-auto">
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
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500
      placeholder-gray-500"
        placeholder="Search"
        aria-label="Search. Please write an episode number and season to begin the search"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button
        className="px-4
      py-2
      bg-gray-200
      hover:bg-gray-300
      rounded-r-full
      border
      border-l-0
      border-gray-300
      text-sm
       focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      focus:border-blue-500"
        type="submit"
      >
        <SearchIcon label="submit search" aria-label="Submit search"/>
      </button>
    </form>
  );
};

export default Search;
