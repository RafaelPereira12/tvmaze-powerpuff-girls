"use client";
import { DropdownItemGroup } from "@atlaskit/dropdown-menu";

const DropdownGroup = ({ children }: DropdownItemGroupProps) => {
  return <DropdownItemGroup >{children}</DropdownItemGroup>;
};

type DropdownItemGroupProps = {
  children: React.ReactNode;
};
export default DropdownGroup;
