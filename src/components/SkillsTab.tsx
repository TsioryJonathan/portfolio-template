import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { skills } from "@/data/skills";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SkillsTab() {
  return (
    <Tabs defaultValue={"Favorite"}>
      <TabsList
        aria-label="Skills"
        className="w-full flex justify-center gap-4 mb-6"
      >
        {skills.map(({ environment }) => (
          <TabsTrigger
            key={environment}
            value={environment}
            className={cn(
              "relative px-4 py-2 text-lg font-medium text-muted-foreground transition-colors",
              "cursor-pointer",
              "before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0",
              "before:rounded-full before:bg-gradient-to-r before:from-purple-400 before:via-pink-500 before:to-indigo-500",
              "before:transition-all before:duration-300",
              "hover:text-foreground",
              "data-[state=active]:text-foreground",
              "data-[state=active]:before:left-0 data-[state=active]:before:w-full",
              "border-none"
            )}
          >
            {environment}
          </TabsTrigger>
        ))}
      </TabsList>
      {skills.map(({ skills, environment }) => (
        <TabsContent value={environment} key={environment}>
          <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-30 mt-10">
            {skills.map((skill, i) => (
              <motion.div
                className="flex flex-col items-center gap-2"
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <skill.Icon className="w-20 h-20 hover:backdrop-blur-lg hover:scale-105 transition-all duration-150 ease-in-out" />
                <span className="text-lg text-center mt-5 font-bold">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

export default SkillsTab;
