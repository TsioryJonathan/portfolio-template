"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import SkillsTab from "@/components/SkillsTab";

export default function AboutMe() {
  return (
    <section
      className="
    bg-gradient-to-b
    from-[#0f0a1e]
    via-[#0f0a1e]/80
    to-transparent
    py-24 px-6 md:px-16
     mx-auto
    text-foreground
    relative
    overflow-hidden
  "
    >
      <Spotlight className="mt-10" fill="#3b82f6" />
      <Spotlight fill="violet" />

      {/* Background Circles */}

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

          <SkillsTab />
        </div>
      </motion.div>
    </section>
  );
}
