import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {"Bonjour, je suis [Votre Nom]"}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Développeur web passionné avec une expertise en création d'applications web modernes, réactives et
                performantes.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects" prefetch={false}>
                <Button className="w-full min-[400px]:w-auto">Voir mes Projets</Button>
              </Link>
              <Link href="#contact" prefetch={false}>
                <Button variant="outline" className="w-full min-[400px]:w-auto bg-transparent">
                  Me Contacter
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=600&width=600"
            width="600"
            height="600"
            alt="Profile"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}
