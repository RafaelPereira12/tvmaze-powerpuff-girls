"use client";
import { DropdownItem } from "@atlaskit/dropdown-menu";
import { useRouter } from "next/navigation";

const DropdownGroupItem = ({ children, url, label }: AtlasDropdownItemProps) => {
  const router = useRouter();
  return (
    <>
      <DropdownItem aria-label={label} onClick={() => router.push(url)}>{children}</DropdownItem>
    </>
  );
};

type AtlasDropdownItemProps = {
  children: React.ReactNode;
  url: string;
  label: string;
};

export default DropdownGroupItem;
