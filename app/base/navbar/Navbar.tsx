"use client";

import Link from "next/link";
import Search from "../searchbar/Search";
import Image from "next/image";
import logo from "../../assets/images/PageLogo.png"

const Navbar = () => {
  return (
    <nav aria-label="Navigation Bar,">
      <ul
        className=" grid grid-cols-[1fr_1fr_1fr_8fr]
        items-center
        h-15
        sticky
        mb-2.5
        w-full
        bg-[#ed0874]
        text-[20px]
        "
        role="none"
        >
        <li className="flex justify-center items-center">
          <Image src={logo} alt="Page Logo" width={100} height={100}/>
        </li>
        <li className="flex justify-center items-center hover:bg-[#c31e6b] h-full">
          <Link href="/" role="none">
            <span className="text-[#ffffff]">Home</span>
          </Link>
        </li>
        <li className="flex justify-center items-center mt-0 hover:bg-[#c31e6b] h-full">
          <Link href="/episode/favorites" role="none">
            <span className="text-[#ffffff] font-sans">Favorites</span>
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Search />
        </li>
      </ul>
        </nav>
  );
};

export default Navbar;