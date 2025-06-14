"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { skills } from "@/data/skills";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 max-w-5xl mx-auto text-foreground"
    >
      <Spotlight className="mt-10" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold"
        >
          About Me
        </motion.h1>
        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m Jonathan, a passionate full-stack developer who loves
            crafting beautiful, performant, and accessible web experiences. I
            thrive at the intersection of design and code, constantly learning
            and building.
          </p>
        </div>

        <Separator />

        {/* Skills */}
        <div className="space-y-10">
          <h3 className="text-5xl font-bold">Skills & Tools</h3>
          {/* Skills Icon */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 space-y-20">
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
        </div>
      </motion.div>
    </section>
  );
}
