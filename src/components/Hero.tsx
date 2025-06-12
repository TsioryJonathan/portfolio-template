"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Github, Twitter, Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "../../public/Images/assets";
import { BackgroundBeams } from "./ui/background-beams";
import { useState, useEffect } from "react";

const typingTexts = [
  "Full Stack Developer",
  "React Enthusiast",
  "Open Source Contributor",
  "Tech Blogger",
];

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing effect state
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < typingTexts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-16  text-white overflow-hidden"
      aria-label="Hero section introducing Jonathan"
    >
      <BackgroundBeams className="absolute inset-0 -z-10 opacity-30" />

      <motion.div
        className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start justify-center pt-12 md:pt-20 px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
            Jonathan
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 min-h-[48px] text-purple-400 tracking-wide"
          aria-live="polite"
        >
          {displayedText}
          <span className="blinking-cursor">|</span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl max-w-xl mb-12 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build exceptional and accessible digital experiences for the web,
          crafting elegant solutions with a passion for clean, efficient code.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-5 mb-16 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-violet-600 hover:scale-105 focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-pink-500 transition-transform"
          >
            <a href="#projects" aria-label="View my projects">
              View My Work
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="hover:bg-purple-600 hover:text-white transition-colors focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-purple-600"
          >
            <a href="#contact" aria-label="Contact me">
              Contact Me
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="flex items-center gap-2 border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white transition-colors focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-pink-500"
          >
            <a
              href="/Jonathan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my CV"
              download
            >
              <Download size={20} /> Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex space-x-6 text-gray-400 hover:text-purple-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          aria-label="Social media links"
        >
          <a
            href="https://www.linkedin.com/in/jonathan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-purple-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/jonathan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-purple-400 transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://twitter.com/jonathan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="hover:text-purple-400 transition-colors"
          >
            <Twitter size={28} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            aria-label="Scroll down to about section"
            className="animate-bounce mt-12 text-purple-400 hover:text-purple-600"
          >
            <ArrowDown className="h-7 w-7" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex items-center justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 40, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          alt="Portrait of Jonathan"
          src={assets.heroImg}
          className="rounded-full border-4 border-purple-600 shadow-xl object-cover w-100 h-100"
          priority={true}
        />
      </motion.div>
    </section>
  );
}
