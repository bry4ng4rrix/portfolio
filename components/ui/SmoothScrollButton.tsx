import { Button } from "../ui/button"
interface SmoothScrollButtonProps {
  to: string
  children: React.ReactNode
}

export function SmoothScrollButton({ to, children }: SmoothScrollButtonProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(to)
    if (element) {
      const offset = 80 // Ajustez selon la hauteur de votre navbar fixe
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={`#${to}`} onClick={handleScroll} >
      <Button variant="ghost" className="hover:text-blue-600 transition-colors">{children}</Button>
    </a>
  )
}