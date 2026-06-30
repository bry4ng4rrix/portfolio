"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const badgeStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const badgeFade = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
}

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "JavaScript", "Bootstrap", "Tailwind CSS", "Material UI", "shadcn"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-300 border-blue-500/20",
    },
    {
      category: "Backend",
      technologies: ["Python", "Django", "Fastapi","REST Framework", "PHP"],
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20",
    },
    {
      category: "Base de Données",
      technologies: ["MySQL","PostgreSQL", "SQLite"],
      color: "bg-violet-500/10 text-violet-600 dark:text-violet-300 border-violet-500/20",
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop"],
      color: "bg-pink-500/10 text-pink-600 dark:text-pink-300 border-pink-500/20",
    },
    {
      category: "Environnement & Outils",
      technologies: ["Linux", "venv", "Thunder Client", "Postman"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-300 border-orange-500/20",
    },
    {
      category: "Autres",
      technologies: ["VitualBox", "Wine", "Vim , Neovim", "Android Studio", "Git", "Github", "Visual Studio Code", "PyCharm", "Intellij Idea"],
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/20",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Technique</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions complètes et performantes.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="glass-card hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={badgeStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div key={techIndex} variants={badgeFade}>
                        <Badge className={`backdrop-blur-sm ${category.color}`}>
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
