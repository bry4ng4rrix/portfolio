import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <p className="text-xs text-gray-500 dark:text-gray-400">{"© 2024 [Votre Nom]. Tous droits réservés."}</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </nav>
    </footer>
  )
}
