"use client";

import DropdownMenuAtlasKit from "@atlaskit/dropdown-menu";

const DropdownMenu = ({ children, seasonNumber }: DropdownMenuProps) => {
  return (
    <section
      className="bg-[var(--color-green)]
                  h-fit
                  rounded-[5px]
                  [&_button_span]:text-black
                  [&_button_svg]:text-current
                  [&_button]:!min-w-0 
                  [&_button]:!w-full
                  [&_[role='menu']_[role='group']]:max-h-[300px]
                  [&_[role='menu']_[role='group']]:mb:6
                  [&_[role='menu']_[role='group']]:overflow-y-auto
                  [&_div]:!relative
                  [&_button[aria-expanded='true']]:!bg-[var(--color-green)]
                  [&_button[aria-expanded='true']_span_svg]:rotate-180
                  m-2
                  "
    >
      <DropdownMenuAtlasKit
        trigger={"Season " + seasonNumber}
        placement="bottom"
        shouldRenderToParent
        shouldFitContainer
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
