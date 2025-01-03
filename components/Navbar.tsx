"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to("#sidebar", {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to("#sidebar", {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isSidebarOpen]);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">
            <span className="hover:text-blue-400 transition cursor-pointer">
              Nexa Cars
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="#About">About</NavItem>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="text-2xl focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 transform translate-x-full flex flex-col items-center justify-center space-y-8"
      >
        <button
          className="absolute top-6 right-6 text-3xl font-bold text-gray-900 focus:outline-none"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✕
        </button>
        <NavItem href="/" isSidebar>
          Home
        </NavItem>
        <NavItem href="/blog" isSidebar>
          Blog
        </NavItem>
        <NavItem href="#About" isSidebar>
          About
        </NavItem>
      </div>
    </nav>
  );
};

const NavItem = ({
  href,
  children,
  isSidebar,
}: {
  href: string;
  children: React.ReactNode;
  isSidebar?: boolean;
}) => {
  return (
    <Link href={href}>
      <span
        className={`relative group text-lg transition cursor-pointer ${
          isSidebar
            ? "text-gray-900 hover:text-blue-400"
            : "hover:text-blue-400"
        }`}
      >
        {children}
        {!isSidebar && (
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transform transition-transform origin-center"></span>
        )}
      </span>
    </Link>
  );
};

export default Navbar;
