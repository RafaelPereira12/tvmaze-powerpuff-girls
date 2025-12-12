"use client";
import { DropdownItem } from "@atlaskit/dropdown-menu";
import { useRouter } from "next/navigation";

const DropdownGroupItem = ({ children, url }: AtlasDropdownItemProps) => {
  const router = useRouter();
  return (
    <>
      <DropdownItem onClick={() => router.push(url)}>{children}</DropdownItem>
    </>
  );
};

type AtlasDropdownItemProps = {
  children: React.ReactNode;
  url: string;
};

export default DropdownGroupItem;
