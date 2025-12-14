"use client";

import DropdownMenuAtlasKit from "@atlaskit/dropdown-menu";

const DropdownMenu = ({ children, seasonNumber }: DropdownMenuProps) => {
  return (
    <section
      className="bg-[#39d02b]
                  h-fit
                  rounded-[5px]
                  text-white
                  [&>button>span]:text-white
                  m-2
                  [&_button]:!min-w-0 [&_button]:!w-full
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
