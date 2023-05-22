"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export interface INavRouterProps {}
const NavLinks = [
  {
    id: 1,
    url: "/about",
    title: "About",
  },
  {
    id: 2,
    url: "/posts",
    title: "Posts",
  },
];

export default function NavRouter(props: INavRouterProps) {
  const pathName = usePathname();

  return (
    <div className="text-blue-500">
      {NavLinks.map((link) => {
        const isActive = pathName?.startsWith(link.url);
        return (
          <Link
            className={isActive ? "text-red-500" : "text-white"}
            key={link.id}
            href={`/pages/${link.url}`}
          >
            {link.title}
          </Link>
        );
      })}
      {/* <Link href="pages/about/contact">contact in about</Link> */}
      {/* <Link href="pages/posts">posts</Link> */}
      {/* <Link href="pages/register">register</Link> */}
    </div>
  );
}
