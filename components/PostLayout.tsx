// components/Post.js
"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Post = ({ title, content, imageUrl }: {title:string, content: ReactNode, imageUrl:string}) => {
  const postRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        postRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }, postRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={postRef}
      className="container mx-auto p-4 flex flex-col gap-6 bg-white shadow-lg rounded-lg max-w-4xl border border-gray-200"
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default Post;