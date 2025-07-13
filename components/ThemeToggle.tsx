import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react" 

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect pour éviter l'hydratation mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-5 w-5" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      />
      <Moon className="h-5 w-5" />
    </div>
  )
}