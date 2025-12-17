"use client";

import Link from "next/link";
import Search from "../../common/searchbar/Search";
import Image from "next/image";
import logo from "../../assets/images/PageLogo.png";

const Navbar = () => {
  return (
    <nav aria-label="Navigation Bar,">
      <ul
        className=" grid 
                    grid-cols-[1fr_1fr_1fr]
                    md:grid-cols-[1fr_1fr_1fr_8fr]
                    lg:grid-cols-[1fr_1fr_1fr_8fr]
                    grid-rows-2
                    sm:grid-rows-2
                    md:grid-rows-1
                    lg:grid-rows-1
                    items-center
                    h-25
                    md:h-15
                    lg:h-15
                    sticky
                    mb-2.5
                    w-full
                    bg-[var(--color-pink)]
                    text-[20px]
                    px-2
                    "
        role="none"
      >
        <li className="flex justify-center items-center row-span-1 col-span-1  sm:col-span-1 md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1">
          <Image src={logo} alt="Page Logo" width={100} height={100} />
        </li>
        <li className="flex justify-center items-center hover:bg-[#c31e6b] h-full row-span-1 col-span-1 sm:col-span-1 md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1">
          <Link href="/" role="none">
            <span className="text-[#ffffff]">Home</span>
          </Link>
        </li>
        <li className="flex justify-center items-center mt-0 hover:bg-[#c31e6b] h-full row-span-1 col-span-1 sm:col-span-1 md:row-span-1 md:col-span-1 lg:row-span-1 lg:col-span-1">
          <Link href="/favorites" role="none">
            <span className="text-[#ffffff] font-sans">Favorites</span>
          </Link>
        </li>
        <li className="flex justify-center items-center row-span-1 col-span-11  md:row-span-1 md:col-span-1 lg:row-span-2 lg:col-span-1">
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
