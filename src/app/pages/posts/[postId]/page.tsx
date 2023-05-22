"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostIdProps {
  postId: string;
}

type typeRouter = string | string[] | undefined;
export default function PostId(props: PostIdProps) {
  const router = useParams();

  return (
    <>
      <div className="text-red-500">postId is : {router?.postId}</div>
      <button type="button" className="p-3 rounded-lg bg-green-500 text-white">
        Dashboard
      </button>
    </>
  );
}
