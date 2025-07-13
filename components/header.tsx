import Link from "next/link"
import { Code } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-background border-b">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <Code className="h-6 w-6" />
        <span className="sr-only">Portfolio de Développeur</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#hero" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Accueil
        </Link>
        <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          À Propos
        </Link>
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Projets
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  )
}
