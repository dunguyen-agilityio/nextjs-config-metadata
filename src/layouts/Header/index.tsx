"use client";

import { AUTHOR } from "@/constants";
import { NAV_ROUTES, PUBLIC_ROUTES } from "@/constants/route";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  name?: string;
  avatar?: string;
}

const Header = ({ avatar, name }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <Navbar
      classNames={{
        base: "h-header bg-background-400 text-white",
        item: [
          "hover:text-content1-100 data-[active=true]:text-content1-100 text-sm",
          "min-w-[76px] h-[37px] flex justify-center items-center",
        ],
      }}
    >
      <NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <Link href={PUBLIC_ROUTES.HOME}>
              <span className="font-bold text-[64px]">
                {name?.slice(0, 4) || AUTHOR}
              </span>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarBrand>
      <NavbarContent>
        {NAV_ROUTES.map(({ title, href }) => (
          <NavbarItem key={title} isActive={href === pathname}>
            <Link href={href}>{title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      {!!(avatar && name) && (
        <div className="w-20 h-20 absolute right-0">
          <Image src={avatar} alt={name} width={40} height={40} />
        </div>
      )}
    </Navbar>
  );
};

export default Header;
