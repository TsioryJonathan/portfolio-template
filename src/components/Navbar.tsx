"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navlinks } from "@/constants/navlinks";
import { socialMediaLinks } from "@/data/socialMedia";
import Image from "next/image";
import { assets } from "../../public/Images/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-5 left-1/2 -translate-x-1/2 w-[70vw] z-99 transition-all duration-300 border-border rounded-lg",
        isScrolling
          ? "bg-background/10 backdrop-blur-md shadow-sm"
          : "bg-primary/70 shadow-none"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-full h-8 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navlinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-text/10 transition-colors",
                link.href === activeLink && "border-b-2 border-violet-800"
              )}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center gap-6">
          {socialMediaLinks.map((link, i) => (
            <Link
              href={link.href}
              className="hover:text-violet-400 transition-colors"
              key={i}
            >
              <link.icon className="w-5 h-5" />
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/70 backdrop-blur-md rounded-bl-2xl rounded-br-2xl">
          <div className="mx-auto px-4 py-4 flex flex-col space-y-4">
            {navlinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors py-2"
                onClick={() => {
                  setIsOpen(false);
                  setActiveLink(link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold flex items-center justify-center gap-2">
              <Download />
              Download my resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
