import { Badge } from "../components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">À Propos de Moi</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Je suis un développeur web full-stack avec X années d'expérience dans la création d'applications robustes
              et évolutives. J'aime transformer des idées complexes en solutions logicielles élégantes et conviviales.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Compétences Techniques</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Voici quelques-unes des technologies avec lesquelles je travaille :
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Expérience</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    **Développeur Full-stack** | [Nom de l'entreprise] | [Date de début] - [Date de fin]
                    <br />
                    Développement et maintenance d'applications web.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    **Développeur Front-end** | [Nom de l'entreprise] | [Date de début] - [Date de fin]
                    <br />
                    Conception et implémentation d'interfaces utilisateur réactives.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
