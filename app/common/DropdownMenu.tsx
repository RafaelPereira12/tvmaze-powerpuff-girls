"use client";

import DropdownMenuAtlasKit from "@atlaskit/dropdown-menu";

const DropdownMenu = ({ children, seasonNumber }: DropdownMenuProps) => {
  return (
    <DropdownMenuAtlasKit
      trigger={"Season" + seasonNumber}
      shouldRenderToParent
    >
      {children}
    </DropdownMenuAtlasKit>
  );
};

type DropdownMenuProps = {
  children: React.ReactNode;
  seasonNumber: number;
};

export default DropdownMenu;
