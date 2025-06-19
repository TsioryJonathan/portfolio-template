"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Project } from "@/data/projects";
import Image from "next/image";
import { ArrowBigDownIcon } from "lucide-react";
import { assets } from "../../public/Images/assets";

interface ProjectCardProps {
  item: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <div
      className="flex items-center justify-center mb-50 border-none"
      key={item.title}
    >
      <PinContainer title={item.title} href={item.link}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <Image src={assets.bg} alt="bgimg" className="w-full h-full" />
          </div>
          <Image
            src={item.image}
            alt="cover"
            className="z-10 absolute -bottom-5 w-[80%] rotate-4 rounded-2xl h-[90%] mt-10"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {item.title}
        </h1>

        <p
          className="font-light text-md line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {item.description}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <p>Template</p>
          <div className="flex items-center">
            <p className="flex text-sm text-purple">Check Live Site</p>
            <ArrowBigDownIcon className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
