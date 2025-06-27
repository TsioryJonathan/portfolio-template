import React from "react";
import type { IconProps } from "@/components/icons/NextJs";
import NextJsIcon from "@/components/icons/NextJs";
import TailwindCssIcon from "@/components/icons/TailwindCss";
import GithubIcon from "@/components/icons/Github";
import NodeJsIcon from "@/components/icons/NodeJs";
import DjangoIcon from "@/components/icons/Django";
import FlaskIcon from "@/components/icons/Flask";
import SpringIcon from "@/components/icons/Spring";
import PostgreSqlIcon from "@/components/icons/PostgreSql";

export type Environment = "Frontend" | "Backend" | "Fullstack" | "Favorite";

export interface Skill {
  name: string;
  Icon: React.ComponentType<IconProps>;
}

export interface SkillGroup {
  environment: Environment;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    environment: "Favorite",
    skills: [
      { name: "Next.js", Icon: NextJsIcon },
      { name: "Tailwind CSS", Icon: TailwindCssIcon },
    ],
  },
  {
    environment: "Frontend",
    skills: [
      { name: "Next.js", Icon: NextJsIcon },
      { name: "Tailwind CSS", Icon: TailwindCssIcon },
      { name: "GitHub", Icon: GithubIcon },
    ],
  },
  {
    environment: "Backend",
    skills: [
      { name: "Node.js", Icon: NodeJsIcon },
      { name: "Django", Icon: DjangoIcon },
      { name: "Flask", Icon: FlaskIcon },
      { name: "Spring", Icon: SpringIcon },
      { name: "PostgreSQL", Icon: PostgreSqlIcon },
    ],
  },
];
