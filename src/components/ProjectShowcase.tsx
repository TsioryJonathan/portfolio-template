"use client";

import { projects } from "@/data/projects";

import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectShowcase = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-30">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-30 md:mx-10">
        {projects.map((item) => (
          <ProjectCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
