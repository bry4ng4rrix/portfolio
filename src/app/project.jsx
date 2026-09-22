"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "./animations";

const projects = [
  {
    title: "E-kajy Entana",
    description:
      " Une application web moderne et performante conçue pour faciliter la gestion des ventes et des stocks d'une entreprise de vente de produits alimentaires. Elle offre une interface intuitive pour suivre les transactions, gérer les inventaires et générer des rapports détaillés.",
    image: "/ekajy.png?height=200&width=300",
    tags: ["React", "Django", "REST API", "Sqlite", "Tailwind"],
    github: "https://github.com/bry4ng4rrix/",
    demo: "http://157.173.103.147:3000",
  },
  {
    title: "E-Vazo API",
    description:
      "Une plateforme musicale moderne permettant aux artistes de partager leur musique (gratuite ou payante) et aux clients d'acheter, écouter et télécharger des morceaux via un système de codes de paiement locaux.",
    image: "/evazo.png?height=200&width=300",
    tags: ["Fastapi", "Python", "SQLite", "JWT"],
    github: "https://github.com/bry4ng4rrix/e-vazo",
    demo: "https://github.com/bry4ng4rrix/e-vazo",
  },
  {
    title: "API de Messagerie en Temps Réel",
    description:
      "Une API FastAPI complète pour un système de messagerie en temps réel avec WebSocket et authentification JWT.",
    image: "/chat.png?height=200&width=300",
    tags: ["Fastapi", "Python", "SQLite", "JWT"],
    github: "https://github.com/bry4ng4rrix/fastapi_chat",
    demo: "https://github.com/bry4ng4rrix/fastapi_chat",
  },
  {
    title: "E-pharma",
    description:
      "Une plateforme web moderne conçue pour optimiser la gestion d’une pharmacie communautaire tout en respectant les réglementations en vigueur. Elle facilite l’organisation des ventes, des employés et des conseils produits.",
    image: "/mahquafy.png?height=200&width=300",
    tags: ["React", "Django", "REST API", "Sqlite", "Tailwind", "Material-UI"],
    github: "https://github.com/bry4ng4rrix/E-pharma",
    demo: "#",
  },
  {
    title: "G-blog",
    description:
      "Une application de blog moderne combinant Next.js pour une interface utilisateur rapide et réactive, avec Django en backend pour une gestion robuste des contenus et des utilisateurs.",
    image: "/blog.png?height=200&width=300",
    tags: ["Next.js", "Python", "Django", "shadcn", "SQLite"],
    github: "https://github.com/bry4ng4rrix/blog",
    demo: "https://garrixblog.vercel.app/",
  },
  {
    title: "DS-Landing",
    description:
      "Une plateforme web moderne et performante conçue pour offrir une expérience utilisateur fluide et réactive. Ce projet met en avant une interface épurée et une architecture optimisée pour le déploiement continu sur Vercel.",
    image: "/ds.png?height=200&width=300",
    tags: ["React.js", "shadcn"],
    github: "https://github.com/bry4ng4rrix/Ds_Group",
    demo: "https://dsgroup-pi.vercel.app/",
  },
  {
    title: "PME ",
    description:
      "Une application web spécialisée dans la gestion d'inventaire, conçue pour automatiser et optimiser le suivi des flux de marchandises. Ce projet permet une visibilité en temps réel sur les niveaux de produits, facilitant la prise de décision stratégique pour éviter les ruptures de stock ou le surstockage.",
    image: "/pme.png?height=200&width=300",
    tags: ["Next.js", "Python", "Fastapi", "shadcn", "SQLite"],
    github: "https://github.com/bry4ng4rrix/Gestion_de_stock",
    demo: "https://gestion-de-stock-sage.vercel.app/",
  },
];

export function Project() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-geo">
            Projets
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Découvrez quelques-uns de mes projets récents, mettant en avant mes
            compétences en développement web et ma capacité à créer des
            solutions innovantes.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden hover:shadow-xl text-foreground transition-shadow h-full">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover p-2 rounded-2xl"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-kode">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 text-foreground">
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass-pill"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-600/20 hover:opacity-90"
                      asChild
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 text-white" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
