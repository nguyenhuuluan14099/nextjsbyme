"use client";
import NavRouter from "@/app/navrouter/NavRouter";
import { usePathname } from "next/navigation";
import * as React from "react";
export interface AboutProps {}

export default function About(props: AboutProps) {
  const pathName = usePathname();
  console.log("pathName", pathName);
  return (
    <div>
      <NavRouter></NavRouter>
      about page
    </div>
  );
}
