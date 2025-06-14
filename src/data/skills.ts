import Django from "@/components/icons/Django";
import Flask from "@/components/icons/Flask";
import Github from "@/components/icons/Github";
import NextJsIcon, { IconProps } from "@/components/icons/NextJs";
import NodeJs from "@/components/icons/NodeJs";
import PostgreSql from "@/components/icons/PostgreSql";
import Spring from "@/components/icons/Spring";
import TailwindCss from "@/components/icons/TailwindCss";
import React from "react";

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

type Skill = {
  name: string;
  Icon: React.ComponentType<IconProps>;
};

export const skills: Skill[] = [
  { name: "Next.Js", Icon: NextJsIcon },
  { name: "TailwindCss", Icon: TailwindCss },
  { name: "Django", Icon: Django },
  { name: "GitHub", Icon: Github },
  { name: "Node.js", Icon: NodeJs },
  { name: "Spring", Icon: Spring },
  { name: "Flask", Icon: Flask },
  { name: "PostgreSql", Icon: PostgreSql },
];
