
"use client"
import { ThemeToggle } from "@/components/module/ThemeToggle"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Smartphone, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {motion } from 'framer-motion'
import { SmoothScrollButton } from "@/components/module/SmoothScrollButton"
import { Typewriter } from 'react-simple-typewriter';
import TechStack from "./tech-stack"



const portfolio = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false)
      const skills = [
    { name: "Frontend", level: 90 },
    { name: "Backend", level: 88 },
    { name: "Design", level: 82 },
    { name: "Linux", level: 90 },
  ]

  const projects = [
    {
      title: "E-Vazo API",
      description: "Une plateforme musicale moderne permettant aux artistes de partager leur musique (gratuite ou payante) et aux clients d'acheter, écouter et télécharger des morceaux via un système de codes de paiement locaux.",
    image: "/evazo.png?height=200&width=300",
      tags: ["Fastapi", "Python", "SQLite" ,"JWT"],
      github: "https://github.com/bry4ng4rrix/e-vazo",
      demo: "https://github.com/bry4ng4rrix/e-vazo",
    },
    {
      title: "API de Messagerie en Temps Réel",
      description: "Une API FastAPI complète pour un système de messagerie en temps réel avec WebSocket et authentification JWT.",
      image: "/chat.png?height=200&width=300",
      tags: ["Fastapi", "Python", "SQLite" ,"JWT"],
      github: "https://github.com/bry4ng4rrix/fastapi_chat",
      demo: "https://github.com/bry4ng4rrix/fastapi_chat",
    },
    {
      title: "E-pharma",
      description: "Une plateforme web moderne conçue pour optimiser la gestion d’une pharmacie communautaire tout en respectant les réglementations en vigueur. Elle facilite l’organisation des ventes, des employés et des conseils produits.",
      image: "/mahquafy.png?height=200&width=300",
      tags: ["React", "Django", "REST API", "Sqlite", "Tailwind" ,"Material-UI"],
      github: "https://github.com/bry4ng4rrix/E-pharma",
      demo: "#",
    },
    {
      title: "G-blog",
      description: "Une application de blog moderne combinant Next.js pour une interface utilisateur rapide et réactive, avec Django en backend pour une gestion robuste des contenus et des utilisateurs.",
      image: "/blog.png?height=200&width=300",
      tags: ["Next.js", "Python", "Django", "shadcn", "SQLite"],
      github: "https://github.com/bry4ng4rrix/blog",
      demo: "https://garrixblog.vercel.app/",
    },
  ]

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Frontend",
      description: "Applications React/Next.js avec Tailwind CSS, Material UI et shadcn",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Développement Backend",
      description: "API-REST avec Python/Django ou Python/Fastapi et PHP pour des solutions robustes",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Conception d'interfaces avec Figma, Adobe XD et Photoshop",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Base de Données",
      description: "Gestion MySQL et SQLite pour des données optimisées",
    },
  ]
  const nav = [
    {
      link : "home",
      nom : "Acceuil"
    },
    {
      link : "about",
      nom : " À propos"
    },
    {
      link : "services",
      nom : "Services"
    },
    {
      link : "projects",
      nom : "Projets"
    },
    {
      link : "contact",
      nom : "Contact"
    }
  ]
  return (
      <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/50 backdrop-blur-md justify-center items-center z-50">
        <div className="max-w-7xl mx-auto ">
          <div className="flex px-3 justify-between items-center py-2">
            <Image
              src={logo}
              alt="Profile"
              width={50}
              height={50}
            />
            {/* <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
             BGarrix
            </div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center text-foreground  ">
             {nav.map((nav, index) => (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}>
             <SmoothScrollButton to={nav.link} >{nav.nom}</SmoothScrollButton>
              </motion.div> 
             ))}
               <ThemeToggle />
            
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t text-foreground">
              <div className="flex flex-col space-y-4 items-center">
                 <ThemeToggle />
               {nav.map((nav, index) => (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={index}>
             <SmoothScrollButton to={nav.link} >{nav.nom}</SmoothScrollButton>
              </motion.div> 
             ))}
              

               
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <Image
                src="/bg.png?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto shadow-2xl border-4 border-blue-600"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-caption font-bold mb-6">
              Salut, je suis{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Bryan Garrix
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
               Développeur Full-Stack spécialisé en {" "}
               </p>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
             
               <Typewriter
            words={[' React/Next.js', 'Python/Django', 'Python/Fastapi', 'Api-Rest']}
            loop={5} // nombre de boucles ou `0` pour infini
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg"  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-ring ">
               <a href="#projects" >Voir mes projets</a>

              </Button>
                
              <Button size="lg" variant="outline" className="border-foreground hover:bg-ring">
              <a href="/cv.pdf" download>Télécharger CV</a>
              </Button>
              
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="https://github.com/bry4ng4rrix" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/bryan-garrix-5a0b07258" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="https://bryanmfb4@gmail.com" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionné par le développement web depuis plus de 5 ans, je crée des solutions innovantes et performantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mon parcours</h3>
              <p className="text-muted-foreground mb-6">
                Diplômé en informatique et spécialisé en développement full-stack. 
                J’utilise des technologies modernes comme React, Next.js et Python-Django ou Python-FastAPI pour 
                créer des applications web performantes et intuitives.
              </p>
              <p className="text-muted-foreground mb-6">
                Mon approche combine créativité et rigueur technique pour livrer des projets qui dépassent les attentes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">5+ années d'expérience</Badge>
                <Badge variant="secondary">10+ projets réalisés</Badge>
                <Badge variant="secondary">Freelance disponible</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Compétences</h3>
              <motion.div 
              
              
              className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div 
                  
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Je propose une gamme complète de services pour concrétiser vos projets digitaux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents qui illustrent mes compétences et ma créativité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg text-foreground transition-shadow">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover p-2 rounded-xl"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 text-foreground">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild >
                      <Link href={project.demo} className="text-white">
                        <ExternalLink className="w-4 h-4 mr-2 text-white" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>bryanmfb4@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="w-5 h-5 text-blue-600" />
                  <span>github.com/bry4ng4rrix</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span>linkedin.com/in/bryan-garrix-5a0b07258</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Disponibilité</h4>
                <p className="text-muted-foreground">
                  Actuellement disponible pour de nouveaux projets freelance. Temps de réponse habituel : 24h.
                </p>
              </div>
            </div>

            {/* <Card className="rounded-sm ">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Prénom" />
                    <Input placeholder="Nom" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Sujet" />
                  <Textarea placeholder="Votre message..." rows={5} />
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Envoyer le message</Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t bg-muted/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Bryan Garrix</p>
        </div>
      </footer>
    </div>
  )
}

export default portfolio