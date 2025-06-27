"use client";

import { projects } from "@/data/projects";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectShowcase = () => {
  return (
    <section id="project" className="py-20 w-full">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        A small selection of{" "}
        <span className="text-purple-400">recent projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-30 md:mx-10">
        {projects.map((item) => (
          <ProjectCard item={item} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
