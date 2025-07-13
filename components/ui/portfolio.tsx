import { Badge } from "./badge"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Code, ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-2 sm:px-4">
          <div className="mr-4 flex">
            <Link href="#" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">Bryan Garrix</span> 
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 sm:py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-4 px-2 md:px-0 w-full">
          <div className="space-y-2 w-full flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">Bryan Garrix</h1>
            <p className="text-xl text-muted-foreground md:text-2xl">Full Stack Web Developer</p>
          </div>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            I create beautiful, responsive web applications using modern technologies. Passionate about clean code, user
            experience, and bringing ideas to life.
          </p>
          <div className="flex flex-col gap-2 w-full min-[400px]:flex-row min-[400px]:justify-center items-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="justify-center items-center container py-16 sm:py-20 md:py-32">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 items-center px-2 md:px-0">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              {
                "I'm a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful designs."
              }
            </p>
            <p className="text-muted-foreground md:text-lg">
              When {"I'm"} not coding, you can find me exploring new technologies, contributing to open source projects,
              or enjoying a good cup of coffee while reading about the latest web development trends.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>Available for work</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 lg:mt-0">
            <Image
              src="/bg.png?height=400&width=400"
              alt="Alex Johnson"
              width={250}
              height={250}
              className="rounded-full border-4 border-muted w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container py-16 sm:py-20 md:py-32 bg-muted/50 flex flex-col items-center justify-center">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
              Here are some of the technologies I work with to bring ideas to life.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
                <CardDescription>Building beautiful user interfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
                <CardDescription>Server-side development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Others</CardTitle>
                <CardDescription>Development tools and practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center items-center">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Jest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-16 sm:py-20 md:py-32">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  A full-stack e-commerce solution built with Next.js and Stripe integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>A collaborative task management application with real-time updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Weather Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>
                  A responsive weather dashboard with location-based forecasts and charts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">API</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-16 sm:py-20 md:py-32 bg-muted/50">
        <div className="max-w-2xl mx-auto space-y-8 px-2 md:px-0">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="text-muted-foreground md:text-lg">
              {"I'm"} always interested in new opportunities and collaborations. {"Let's"} work together!
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex space-x-2 pt-4">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 w-full">
                  <div className="grid gap-2">
                    <Input placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Input type="email" placeholder="Your Email" />
                  </div>
                  <div className="grid gap-2">
                    <Input placeholder="Subject" />
                  </div>
                  <div className="grid gap-2">
                    <Textarea placeholder="Your Message" rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 px-2 md:px-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-0">
          <div className="flex flex-col items-center gap-4 px-0 md:flex-row md:gap-2">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with Next.js and Tailwind CSS. © 2024 Alex Johnson.
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
