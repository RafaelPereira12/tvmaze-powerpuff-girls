"use client";

import DropdownMenuAtlasKit from "@atlaskit/dropdown-menu";

const DropdownMenu = ({ children, seasonNumber }: DropdownMenuProps) => {
  return (
    <section
      className="bg-[#39d02b]
                  w-fit
                  rounded-[5px]
                  text-white
                  [&>button>span]:text-white
                  "
    >
      <DropdownMenuAtlasKit
        trigger={"Season" + seasonNumber}
        shouldRenderToParent
      >
        {children}
      </DropdownMenuAtlasKit>
    </section>
  );
};

type DropdownMenuProps = {
  children: React.ReactNode;
  seasonNumber: number;
};

export default DropdownMenu;
