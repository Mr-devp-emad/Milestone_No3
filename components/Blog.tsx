"use client";
import "./Blog.css";
import React from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/dist/client/link";

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
      {/* Parent Container */}
      <div className="w-full flex justify-center flex-wrap gap-4 px-4 mb-1">
        {posts.map((post) => (
          <Link href={`/blog`} key={post.id}>
            {/* Card Container */}
            <Card
              className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] cursor-pointer" // Responsive width
              id="post"
            >
              <CardHeader>
                <CardTitle className="text-center text-lg font-semibold">
                  {post.title}
                </CardTitle>
                <CardDescription className="flex justify-center items-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="rounded-lg" // For rounded corners
                    width={400}
                    height={300}
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">
                  {post.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* "Read More" Button */}
      <div className="w-full flex justify-center mt-5 mb-5">
        <Link href={"/blog"}>
          <button
            className="flex w-[150px] h-[50px] justify-center items-center bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
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
