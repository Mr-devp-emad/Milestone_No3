"use client";
import "./Blog.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const posts = [
  {
    id: "ferrari-enzo",
    title: "Ferrari Enzo",
    description: "A Masterpiece of Speed and Innovation",
    image: "/enzo.jpg",
  },
  {
    id: "bently-mullionare-gt",
    title: "Bently Mullionare GT",
    description: "A Masterpiece of Speed and Innovation",
    image: "/bently.jpg",
  },
  {
    id: "bugatti-mistral",
    title: "Bugatti Mistral",
    description: "A Masterpiece of Speed and Innovation",
    image: "/bugatti.jpg",
  },
  {
    id: "aston-martin",
    title: "Aston Martin",
    description: "A Masterpiece of Speed and Innovation",
    image: "/aston.webp",
  },
];

const Blog = () => {
  return (
    <>
      <div
        className="w-full flex justify-around relative top-0 flex-wrap mb-1 gap-2"
      >
        {posts.map((post) => (
          <Link href={`/blog`}>
            <Card className="w-[400px] cursor-pointer" id="post">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription className="bg-cover">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={400}
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="w-full flex justify-center mt-[20px] mb-5">
        <Link href={"/blog"}>
          <button
            className="flex w-[200px] h-[100px] justify-center items-center"
            id="shimmer-button"
          >
            Read More
          </button>
        </Link>
      </div>
    </>
  );
};

export default Blog;
