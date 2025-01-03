"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const posts = [
  { id: "1", title: "Ferrari Enzo", imageUrl: "/enzo.jpg" },
  { id: "2", title: "Bentley Mullionare GT", imageUrl: "/bently.jpg" },
  { id: "3", title: "Bugatti Mistral", imageUrl: "/bugatti.jpg" },
  { id: "4", title: "Aston Martin", imageUrl: "/aston.webp" },
];

const BlogListing = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.2, duration: 0.8 }
    );
  }, []);

  return (
    <div className="w-full h-screen  flex justify-around flex-wrap gap-4">
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className="card p-8 border rounded shadow hover:scale-105 transition-transform w-[400px]">
            <img src={post.imageUrl} alt={post.title} className="w-[500px]  object-cover" />
            <h3 className="text-xl mt-2">{post.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogListing;
