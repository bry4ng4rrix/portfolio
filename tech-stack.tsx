import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      technologies: ["Next.js", "React", "JavaScript", "Bootstrap", "Tailwind CSS", "Material UI", "shadcn"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      category: "Backend",
      technologies: ["Python", "Django", "REST Framework", "PHP"],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      category: "Base de Données",
      technologies: ["MySQL", "SQLite"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop"],
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    },
    {
      category: "Environnement & Outils",
      technologies: ["Linux", "venv", "Thunder Client", "Postman"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className={category.color}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
