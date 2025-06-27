"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets } from "../../public/Images/assets";
import { socialMediaLinks } from "@/data/socialMedia";
import { BackgroundBeams } from "./ui/background-beams";
import { Badge } from "./ui/badge";
import { FlipWords } from "./ui/flip-words";

const typingTexts = [
  "Full Stack Developer",
  "React Enthusiast",
  "Open Source Contributor",
  "Tech Blogger",
];

const skillBadges = [
  "UI/UX Design",
  "React.js",
  "TypeScript",
  "TailwindCSS",
  "Accessibility",
];

export default function Hero() {
  const scrollToNext = useCallback(() => {
    const next = document.getElementById("about");
    next?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden "
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={assets.bgJpg}
          alt="background"
          className="w-full h-full object-cover"
          fill
          priority={true}
        />
      </div>
      <BackgroundBeams className="absolute inset-0 -z-10 opacity-40" />

      {/* Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-8 h-8" />
        </Button>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-white px-10 md:px-30 mx-auto w-full md:h-screen md:gap-4">
        <div className="w-full md:w-1/2 h-screen flex items-center justify-center pt-10">
          <div className=" flex flex-col items-start justify-center pt-20">
            <div className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
              {skillBadges.map((skill, idx) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Badge className="bg-white/10 text-white">{skill}</Badge>
                </motion.div>
              ))}
            </div>

            <motion.h1
              className="text-5xl sm:text-6xl mb-4 leading-tight font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Jonathan
              </span>
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-300 h-[3rem]"
              aria-live="polite"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FlipWords words={typingTexts} />
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting intuitive, user-focused web applications with elegant,
              efficient code and pixel-perfect design.
            </motion.p>

            <motion.div
              className="flex flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transition"
              >
                <Link
                  href="/Jonathan_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  download
                >
                  <Download className="mr-2" /> Download CV
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="#contact">
                  Contact Me
                  <PhoneCall />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center mt-8 space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {socialMediaLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-white/80 hover:text-white"
                >
                  <link.icon className="w-6 h-6" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex items-center justify-center md:w-1/2 w-full h-screen relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Image
            src={assets.programmer2}
            alt="programmer"
            className="h-[70%] w-full object-cover absolute top-[50%] -translate-y-1/2 opacity-90 rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
