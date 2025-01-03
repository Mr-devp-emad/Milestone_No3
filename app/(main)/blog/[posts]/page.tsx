"use client";

import React, { useEffect, useState } from "react";
import PostLayout from "@/components/PostLayout"; // Post layout component
import { useParams } from "next/navigation"; // Hook for accessing params in Client Components
import { gsap } from "gsap";

// Data for each post
const postsData = [
  {
    id: "1",
    title: "Ferrari Enzo",
    img: "/enzo.jpg",
    content: `
**Ferrari Enzo: A Revolutionary Masterpiece of Automotive Engineering**

The Ferrari Enzo, named after the legendary founder of Ferrari, Enzo Ferrari, is more than just a car—it's a symbol of innovation, speed, and luxury. Launched in 2002, this limited-edition hypercar redefined automotive performance, setting new benchmarks for design, engineering, and exclusivity.
Ferrari Enzo: A Masterpiece of Automotive Excellence

The Ferrari Enzo, introduced between 2002 and 2004, is a mid-engine marvel named after Ferrari's founder, Enzo Ferrari. This hypercar encapsulates the brand’s Formula 1 engineering, boasting a 6.0-liter V12 engine that produces 651 horsepower, catapulting it from 0 to 60 mph in just 3.3 seconds. With a top speed of 218 mph (351 km/h), the Enzo stands as a symbol of Ferrari’s pursuit of speed and innovation.

Its carbon-fiber bodywork and lightweight aluminum chassis ensure an impeccable balance of power and aerodynamics, while the F1-style transmission provides a racing experience tailored for the road. Limited to just 400 units, this rare masterpiece originally sold for $659,000 but now fetches millions, cementing its status as an icon of automotive history.

The Ferrari Enzo is not just a car—it’s a legend that defines Ferrari's legacy in precision, exclusivity, and unparalleled design.
**Key Details of the Ferrari Enzo:**
- **Design:** Aerodynamic design inspired by Formula 1 technology with a lightweight carbon-fiber body and butterfly doors.
- **Engine:** A 6.0-liter naturally aspirated V12 delivering 651 horsepower and a top speed of 217 mph.
- **Interior:** Carbon-fiber racing seats, a digital instrument cluster, and an F1-inspired steering wheel.
- **Exclusivity:** Only 399 units were produced, making it one of the most exclusive Ferraris ever.

**Pricing:** Auction prices range from $2.5 million to $5 million due to its rarity and iconic status.
    `,
  },
  {
    id: "2",
    title: "Bentley Mulliner GT",
    img: "/bently.jpg",
    content: `
**Bentley Mulliner GT: The Pinnacle of Bespoke Luxury and Performance**

The Bentley Mulliner GT represents the ultimate blend of heritage and innovation, appealing to those who demand bespoke luxury combined with high performance.
  The Bentley Mulliner GT is the epitome of elegance, craftsmanship, and exclusivity in the grand touring segment. Created by Bentley's in-house coachbuilding division, Mulliner, this masterpiece elevates the already luxurious Continental GT to new heights of personalization and sophistication.

Under the hood, the Mulliner GT is powered by either a 4.0-liter V8 or a 6.0-liter W12 engine, delivering breathtaking performance and effortless refinement. The W12 variant offers 650 horsepower, reaching 0-60 mph in just 3.5 seconds, with a top speed of 208 mph.

What sets the Mulliner GT apart is its bespoke detailing. Each car features exclusive 22-inch Mulliner wheels, hand-stitched interiors with quilted leather, and intricate diamond-in-diamond embroidery requiring 400,000 stitches. The dashboard includes a bespoke Breitling clock, and the veneer finishes are customizable to the owner's exact preferences.

Limited production and tailored craftsmanship ensure that every Mulliner GT is unique, embodying Bentley's heritage of artistry and innovation.










**Key Details of the Bentley Mulliner GT:**
- **Design:** Timeless design with intricate diamond-in-diamond quilting, 22-inch Mulliner wheels, and polished chrome grille.
- **Engine:** Options include a 6.0-liter W12 (626 hp) or 4.0-liter V8 (542 hp) for refined performance.
- **Interior:** Handcrafted materials, 88 veneer options, and a futuristic rotating display.

**Pricing:** Starting at $245,000, with bespoke options pushing prices above $400,000.
    `,
  },
  {
    id: "3",
    title: "Bugatti Mistral",
    img: "/bugatti.jpg",
    content: `
**Bugatti Mistral: The Ultimate Open-Top Hypercar**

The Bugatti Mistral is a masterpiece of engineering, blending Bugatti's iconic W16 engine with an open-top design for unparalleled luxury and speed.
 The Bugatti Mistral is a breathtaking roadster that represents the swan song for Bugatti's iconic W16 engine. Unveiled in 2022, the Mistral combines unmatched performance with stunning open-top design, limited to just 99 units worldwide, making it an exclusive collector's masterpiece.

At its heart lies an 8.0-liter quad-turbocharged W16 engine delivering a staggering 1,578 horsepower, the same powerhouse as the Bugatti Chiron Super Sport 300+. This allows the Mistral to achieve speeds exceeding 260 mph (420 km/h), making it one of the fastest roadsters ever built.

The design is a tribute to Bugatti's heritage, featuring a striking horseshoe grille, X-shaped taillights inspired by the Bugatti Bolide, and a windscreen seamlessly integrated into the flowing lines of the car. Luxurious interiors include bespoke materials and cutting-edge craftsmanship, ensuring unparalleled comfort even at extreme speeds.

Priced at over $5 million, the Bugatti Mistral is not just a car—it’s a symphony of speed, artistry, and exclusivity, marking the end of an era for one of the most legendary engines in automotive history.
**Key Details of the Bugatti Mistral:**
- **Design:** Sculpted lines, X-shaped tail lights, and bespoke color options.
- **Engine:** An 8.0-liter quad-turbocharged W16 with 1,578 hp, achieving a top speed of 261 mph.
- **Exclusivity:** Limited to just 99 units, each highly personalized.

    `,
  },
  {
    id: "4",
    title: "Aston Martin",
    img: "/aston.webp",
    content: `
**Aston Martin: The Iconic British Automaker of Elegance and Performance**

Aston Martin combines timeless aesthetics with cutting-edge technology, symbolizing luxury and sophistication.
 Aston Martin is synonymous with timeless design, unparalleled craftsmanship, and exhilarating performance. Founded in 1913, the marque has become a global icon, blending British sophistication with cutting-edge automotive innovation. Aston Martin’s vehicles embody the spirit of a grand tourer, seamlessly combining luxury with speed.

From the elegant DB series, immortalized in James Bond films, to the high-performance Vantage, and the revolutionary Valhalla hypercar, every Aston Martin is a masterpiece. Powered by advanced V8 or V12 engines, their cars deliver a thrilling driving experience, while interiors feature hand-stitched leather, refined wood veneers, and state-of-the-art technology.

Recent innovations include the DBX, Aston Martin’s first luxury SUV, offering sporty dynamics in a family-friendly package, and the Valhalla, a hybrid hypercar pushing the boundaries of engineering and sustainability.

Whether on a racetrack or a scenic road, Aston Martin cars are a statement of elegance, power, and exclusivity—a true embodiment of "Power, Beauty, and Soul."


**Key Details of Aston Martin:**
- **Design Philosophy:** Aerodynamic contours with handcrafted luxury interiors.
- **Popular Models:** DB series (DB11, DB12), Vantage, Valkyrie, and Rapide E.
- **Performance:** High-performance engines delivering thrilling driving experiences.

**Pricing:** Entry-level models start at $150,000, with hypercars like Valkyrie exceeding $3 million.
    `,
  },
];

const BlogPost = () => {
  const params = useParams(); // Access the route params in Client Components
  const postId = params?.posts; // Get the `posts` param from the URL
  const post = postsData.find((item) => item.id === postId);

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.fromTo(
      ".blog-post",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleAddComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent page refresh
    if (editingIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[editingIndex] = newComment;
      setComments(updatedComments);
      setEditingIndex(null);
    } else if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
    }
    setNewComment("");
  };

  const handleEditComment = (index: number) => {
    setNewComment(comments[index]);
    setEditingIndex(index);
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <>
      <div className="blog-post p-4">
        <PostLayout title={post.title} content={post.content} imageUrl={post.img} />
      </div>

      {/* Comments Section */}
      <div className="comments-section mt-6 flex justify-center flex-col ml-[15%] bg-cover overflow-hidden pb-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {/* Comment Input */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <textarea
            className="border border-gray-300 p-2 rounded-md w-full max-sm:w-[200px]"
            rows={3}
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddComment}
          >
            {editingIndex !== null ? "Update Comment" : "Add Comment"}
          </button>
        </div>

        {/* Comments List */}
        {comments.length > 0 ? (
          <ul className="space-y-4 mr-8">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border border-gray-200 p-4 rounded-md flex justify-between items-center"
              >
                <span className="text-gray-700">{comment}</span>
                <div className="flex gap-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditComment(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteComment(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Comments</p>
        )}
      </div>
    </>
  );
};

export default BlogPost;
