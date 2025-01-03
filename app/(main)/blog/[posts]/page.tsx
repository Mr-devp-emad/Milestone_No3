"use client";

import React, { useEffect, useState } from "react";
import PostLayout from "@/components/PostLayout"; // Post layout component
import { gsap } from "gsap";

// Data for each post
const postsData = [
  {
    id: "1",
    title: "Ferrari Enzo",
    img: "/enzo.jpg",
    content: `Ferrari Enzo: A Revolutionary Masterpiece of Automotive Engineering

The Ferrari Enzo, named after the legendary founder of Ferrari, Enzo Ferrari, is more than just a car—it's a symbol of innovation, speed, and luxury. Launched in 2002, this limited-edition hypercar redefined automotive performance, setting new benchmarks for design, engineering, and exclusivity.

Key Details of the Ferrari Enzo
Design: The Ferrari Enzo boasts an aerodynamic design inspired by Formula 1 technology. Its sharp lines, sculpted body, and aggressive stance make it instantly recognizable. The lightweight carbon-fiber body and butterfly doors enhance both aesthetics and performance.
Engine & Performance: At its heart lies a 6.0-liter naturally aspirated V12 engine, delivering an awe-inspiring 651 horsepower and 485 lb-ft of torque. It accelerates from 0 to 60 mph in just 3.14 seconds, with a top speed of 217 mph (350 km/h).
Interior: The minimalist interior focuses on functionality and driver engagement. Carbon-fiber racing seats, a digital instrument cluster, and an F1-inspired steering wheel ensure a track-ready experience.
Production: Only 399 units of the Ferrari Enzo were produced, making it one of the most exclusive Ferraris ever made.
Models & Variants
While the Ferrari Enzo itself was a standalone model, its spirit lives on in its successors:

LaFerrari (2013): The hybrid hypercar successor to the Enzo, featuring a 6.3L V12 engine paired with an electric motor, delivering 950 horsepower.
FXX (2005): A track-only variant of the Enzo with improved aerodynamics, enhanced performance, and a focus on extreme driving experiences.
Pricing
When launched, the Ferrari Enzo was priced at $659,330. Due to its limited production and iconic status, its value has skyrocketed in the collector's market:

Auction Prices: Depending on the condition and provenance, an Enzo can fetch between $2.5 million and $5 million at auctions.
Celebrity Provenance: Models with celebrity ownership, like the Enzo gifted to Pope John Paul II, have sold for even higher prices.
Revolutionary Impact
The Ferrari Enzo was a technological revolution:

Formula 1 Influence: Incorporating F1 technology like carbon-ceramic brakes, a semi-automatic paddle-shift gearbox, and a carbon-fiber chassis.
Aerodynamics: Its advanced aerodynamics, including active spoilers and diffusers, paved the way for future supercar designs.
Legacy: The Enzo remains a benchmark for Ferrari’s hypercars, influencing designs and engineering for decades.
`,
  },
  {
    id: "2",
    title: "Bentley Mulliner GT",
    img: "/bently.jpg",
    content: `Bentley Mulliner GT: The Pinnacle of Bespoke Luxury and Performance

The Bentley Mulliner GT is the epitome of craftsmanship, performance, and exclusivity. Designed by Bentley's prestigious Mulliner division, this grand tourer takes personalization and luxury to unparalleled heights. It represents a perfect blend of heritage and innovation, appealing to those who demand a bespoke experience combined with high performance.

Key Details of the Bentley Mulliner GT
Design: The Mulliner GT boasts a timeless yet modern design with intricate details. From its diamond-in-diamond quilted interior to the exclusive 22-inch Mulliner wheels, every inch exudes sophistication. The polished chrome grille, unique Mulliner badging, and meticulously hand-finished bodywork showcase its premium pedigree.
Engine & Performance: Under the hood, the Mulliner GT offers two engine options:
A 6.0-liter W12 engine producing 626 horsepower, enabling a 0–60 mph time of 3.6 seconds.
A 4.0-liter V8 engine generating 542 horsepower, delivering both agility and efficiency.
Both configurations ensure a refined yet thrilling driving experience with Bentley's all-wheel-drive system and adaptive chassis technology.
Interior: The interior of the Mulliner GT is a haven of luxury. It features handcrafted materials, including the finest leather, veneers, and metals. Options for customization include over 88 piano wood veneers, bespoke embroidery, and customizable ambient lighting. The rotating display adds a futuristic touch to its classic appeal.
Craftsmanship: Mulliner’s artisans meticulously handcraft each car, offering limitless possibilities for personalization, from custom colors to monogrammed finishes.
Models & Variants
The Mulliner GT is available in the following configurations:

Coupe: A sleek and dynamic body style emphasizing performance and aesthetics.
Convertible: For those who prefer open-air luxury, offering the same bespoke design with an added sense of freedom.
Pricing
The Bentley Mulliner GT's starting price reflects its exclusivity and craftsmanship:

Base Price: Starts at approximately $245,000 (V8 variant) and $275,000 (W12 variant).
Customizations: Depending on the bespoke features and finishes, the price can exceed $400,000.
Revolutionary Impact
The Bentley Mulliner GT stands as a beacon of bespoke automotive excellence:

Customization Leader: It redefines personalization, offering limitless options for buyers to create a truly unique vehicle.
Blend of Heritage and Modernity: It celebrates Bentley's heritage while incorporating cutting-edge technology and innovation.
Benchmark for Luxury: The Mulliner GT sets the standard for other luxury grand tourers in the market.
`,
  },
  {
    id: "3",
    title: "Bugatti Mistral",
    img: "/bugatti.jpg",
    content: `Bugatti Mistral: The Ultimate Open-Top Hypercar

The Bugatti Mistral is a breathtaking masterpiece that combines Bugatti’s legendary engineering with a design tailored for open-air exhilaration. Unveiled in 2022 as a final tribute to the iconic W16 engine, the Mistral marks a new chapter in Bugatti’s history while celebrating its legacy of unmatched performance and luxury.

Key Details of the Bugatti Mistral
Design:
The Mistral's design is a bold statement of elegance and aerodynamics. Its sleek, open-top silhouette is accentuated by sculpted lines, a horseshoe-shaped grille, and X-shaped tail lights that echo the Bugatti Bolide. The bespoke color palettes and unique trim options highlight Bugatti's commitment to individuality.
Engine & Performance:
At its core lies Bugatti’s legendary 8.0-liter quad-turbocharged W16 engine, delivering an astonishing 1,578 horsepower. Paired with a seven-speed dual-clutch transmission, the Mistral achieves a top speed of 261 mph (420 km/h), making it the fastest roadster ever built.
Interior:
The cabin is a haven of luxury, blending high-grade materials such as carbon fiber, leather, and titanium. The open cockpit provides an immersive driving experience, connecting the driver to the environment while ensuring utmost comfort and exclusivity.
Exclusivity:
Only 99 units of the Mistral are being produced, ensuring its status as a collector’s dream. Each model is meticulously handcrafted, allowing owners to personalize their vehicle to reflect their style.
Pricing
The Bugatti Mistral's exclusivity and engineering marvel come with a premium price:

Base Price: Approximately $5 million.
Customization: Depending on bespoke options, the price can escalate significantly.
Revolutionary Impact
The Bugatti Mistral is a groundbreaking hypercar that signifies a turning point for Bugatti:

Farewell to the W16 Engine: The Mistral is the last model to feature the iconic W16 engine, closing a remarkable era of engineering excellence.
Record-Breaking Performance: As the fastest roadster ever, it pushes the boundaries of open-top hypercars.
Exquisite Craftsmanship: The Mistral showcases Bugatti’s commitment to blending art with engineering, offering unparalleled luxury and personalization.
`,
  },
  {
    id: "4",
    title: "Aston Martin",
    img: "/aston.webp",
    content: `Aston Martin: The Iconic British Automaker of Elegance and Performance

Aston Martin is synonymous with luxury, sophistication, and high-performance engineering. Founded in 1913 by Lionel Martin and Robert Bamford, the brand has become a global symbol of British craftsmanship and design. Aston Martin's cars seamlessly combine timeless aesthetics with cutting-edge technology, catering to automotive enthusiasts who demand both style and substance.

Key Highlights of Aston Martin
Heritage and History
Aston Martin's rich legacy spans over a century, marked by innovation and resilience. Known for its connection to motorsports and James Bond films, the brand has cultivated an image of sophistication and adventure.

Design Philosophy
Aston Martin vehicles are celebrated for their timeless and elegant designs. The seamless blend of flowing lines, aerodynamic contours, and luxurious interiors exemplify the brand's dedication to artistry.

Performance Engineering
Whether it’s a grand tourer or a high-performance sports car, Aston Martin focuses on delivering thrilling driving experiences. Advanced engineering, powerful engines, and precise handling define every model.

Craftsmanship
Each Aston Martin vehicle is handcrafted with meticulous attention to detail. From the finest materials in the interior to bespoke customization options, the brand offers unparalleled personalization.

Popular Aston Martin Models
Aston Martin DB Series

The DB11, DB12, and other DB models are iconic grand tourers known for their balance of luxury and power.
The DB5, made famous by James Bond, remains a cultural icon.
Aston Martin Vantage

A performance-focused sports car, available in V8 and V12 variants, delivering agility and speed.
Aston Martin Valkyrie

A hypercar developed in collaboration with Red Bull Racing, showcasing extreme performance and cutting-edge technology.
Aston Martin DBS Superleggera

A flagship grand tourer combining breathtaking design with a twin-turbo V12 engine.
Aston Martin Rapide E

The brand’s first electric vehicle, representing its commitment to a sustainable future.
Pricing
Aston Martin vehicles are positioned in the premium luxury market, with prices reflecting their exclusivity:

Entry-level models like the Vantage start at approximately $150,000.
Grand tourers such as the DB11 and DBS Superleggera range from $220,000 to $350,000.
Hypercars like the Valkyrie exceed $3 million.
Revolutionary Impact
Innovation in Design and Engineering
Aston Martin has continually redefined automotive design, blending aerodynamics with artistry.

Motorsport Heritage
Aston Martin has a strong presence in motorsports, including the 24 Hours of Le Mans and Formula 1, enhancing its performance credentials.

Cultural Icon
Through its association with the James Bond franchise, Aston Martin has become a symbol of style and adventure worldwide.

Sustainability
With models like the Rapide E and upcoming hybrid and electric vehicles, Aston Martin is embracing eco-friendly technologies while maintaining its luxury ethos.
`,
  },
];

const BlogPost = ({ params }: { params: { posts: string } }) => {
  const post = postsData.find((item) => item.id === params.posts);

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
      <div className="comments-section mt-6  flex justify-center flex-col ml-[15%] bg-cover overflow-hidden pb-12">
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
