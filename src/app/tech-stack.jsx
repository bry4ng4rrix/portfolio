"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ServerCog } from "lucide-react";
import {
  SiDocker,
  SiDjango,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiLaravel,
  SiLinux,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { fadeUp, staggerContainer } from "./animations";

const badgeStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const badgeFade = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React Native", icon: SiReact },
        { name: "Flutter", icon: SiFlutter },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Material UI", icon: SiMui },
        { name: "shadcn/ui", icon: SiShadcnui },
      ],
      color:
        "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
    },
    {
      category: "Backend",
      technologies: [
        { name: "Python", icon: SiPython },
        { name: "Django", icon: SiDjango },
        { name: "FastAPI", icon: SiFastapi },
        { name: "PHP", icon: SiPhp },
        { name: "Laravel", icon: SiLaravel },
        { name: "Node.js", icon: SiNodedotjs },
      ],
      color:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
    },
    {
      category: "Environnement & Outils",
      technologies: [
        { name: "Linux", icon: SiLinux },
        { name: "Docker", icon: SiDocker },
        { name: "Git", icon: SiGit },
        { name: "Supabase", icon: SiSupabase },
        { name: "VPS", icon: ServerCog },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
      color:
        "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/20",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-geo">
            Stack Technique
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions
            complètes et performantes.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="glass-card hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center font-kode">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={badgeStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {category.technologies.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div key={tech.name} variants={badgeFade}>
                          <Badge
                            className={`inline-flex items-center gap-2 backdrop-blur-sm ${category.color}`}
                          >
                            <Icon
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0"
                            />
                            <span>{tech.name}</span>
                          </Badge>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
