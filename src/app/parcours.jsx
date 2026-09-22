"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { fadeSide, staggerContainer } from "./animations";

export default function Parcours() {
  // Contenu provisoire : à remplacer par votre propre parcours
  const parcours = [
    {
      year: "2020",
      title: "Initiation à la cybersécurité",
      description:
        "Début d’apprentissage des fondamentaux de Linux et de la cybersécurité, avec une initiation à la défense des systèmes, à l’analyse de sécurité et aux tests d’intrusion .",
    },
    {
      year: "Août 2025",
      title: "Obtention de la licence",
      description:
        "Diplômé en informatique, puis spécialisation en développement web full-stack avec React, Django et FastAPI.",
    },
    {
      year: "Septembre - Décembre 2025",
      title: "Développeur Chez Ds Group",
      description:
        "Réalisation d'applications web sur mesure pour des clients : Gestion de restaurants (génération de recettes pour identifier les nouveaux ingrédients nécessaires), plateformes Selfikiosk",
    },
    {
      year: "Décembre 2025 - Mars 2026",
      title: "Analiste Kpi chez DMZ France",
      description:
        "Analyse des données et optimiser les campagnes publicitaires via Meta Business Manager, tout en assurant la gestion comptable sur Vantage.",
    },
    {
      year: "2026",
      title: "Développement mobile",
      description:
        "Montée en compétence sur Flutter et React Native pour concevoir des applications cross-platform.",
    },
    {
      year: "Avril 2026",
      title: "Développeur Label technology",
      description:
        "Intégration dans l'équipe de Label Technology, une entreprise spécialisée dans le développement d'applications web et mobiles pour des clients variés.",
    },
  ];

  return (
    <section id="parcours" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-geo">
            Mon Parcours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Les étapes clés de ma formation et de mon expérience
            professionnelle.
          </p>
        </div>

        <div className="relative">
          {/* Ligne verticale */}
          <div
            className="absolute top-0 bottom-0 left-3 md:left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            aria-hidden="true"
          />

          <motion.ol
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {parcours.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <li
                  key={index}
                  className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Marqueur sur la ligne */}
                  <span className="absolute top-0.5 left-3 md:left-1/2 -translate-x-1/2 inline-flex rounded-full bg-background text-primary">
                    <CircleCheck className="w-5 h-5" />
                  </span>

                  <motion.div
                    variants={fadeSide}
                    custom={isLeft ? -1 : 1}
                    className={
                      isLeft
                        ? "md:col-start-1 md:text-right"
                        : "md:col-start-2 md:text-left"
                    }
                  >
                    <span className="text-sm font-semibold text-primary font-montserrat">
                      {step.year}
                    </span>
                    <h3 className="text-lg font-bold font-kode mt-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
