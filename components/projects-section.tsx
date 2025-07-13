import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Github, LinkIcon } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Projet Portfolio V1",
      description: "Un site web portfolio personnel construit avec React et Tailwind CSS.",
      image: "/placeholder.svg?height=400&width=600",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 2,
      title: "Application E-commerce",
      description: "Une plateforme d'e-commerce complète avec gestion des produits et paiements.",
      image: "/placeholder.svg?height=400&width=600",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 3,
      title: "Système de Gestion de Tâches",
      description: "Une application de gestion de tâches avec authentification utilisateur et base de données.",
      image: "/placeholder.svg?height=400&width=600",
      githubLink: "#",
      liveLink: "#",
    },
    {
      id: 4,
      title: "Blog Personnel",
      description: "Un blog simple et élégant avec un éditeur de contenu Markdown.",
      image: "/placeholder.svg?height=400&width=600",
      githubLink: "#",
      liveLink: "#",
    },
  ]

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Mes Projets</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez quelques-uns de mes travaux récents. Chaque projet reflète ma passion pour le développement web
              et ma capacité à résoudre des problèmes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full">
              <CardHeader>
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={600}
                  height={400}
                  alt={project.title}
                  className="rounded-t-lg object-cover w-full h-48"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" prefetch={false}>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </Button>
                </Link>
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" prefetch={false}>
                  <Button size="sm">
                    <LinkIcon className="h-4 w-4 mr-2" /> Démo Live
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
