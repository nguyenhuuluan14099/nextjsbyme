import NavRouter from "@/app/navrouter/NavRouter";
import * as React from "react";

export interface IPostsProps {}

export default function Posts(props: IPostsProps) {
  return (
    <div>
      <NavRouter></NavRouter>
      post page
    </div>
  );
}
