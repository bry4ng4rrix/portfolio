"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import Particles from "@/components/module/part";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#a78bfa", "#60a5fa"]}
          particleCount={180}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={90}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-[2.5rem] text-center py-20 px-6">
          <div className="mb-8">
            <div className="relative mx-auto w-[150px] h-[150px]">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-400 to-blue-500 blur-md opacity-70" />
              <Image
                src="/bg.png?height=150&width=150"
                alt="Profile"
                width={150}
                height={150}
                className="relative rounded-full mx-auto shadow-2xl border-4 border-background object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-kode leading-snug mb-6">
            <span className="text-gradient">Milson Fanoela Bryan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-geo max-w-3xl mx-auto">
            Développeur Full-Stack spécialisé en{" "}
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <Typewriter
              words={[
                " React/Next.js",
                "Flutter ",
                "Python/Django",
                "Python/Fastapi",
                "Api-Rest",
              ]}
              loop={5} // nombre de boucles ou `0` pour infini
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:opacity-95 transition-all"
            >
              <a href="#parcours">Voir mon parcours</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="glass-pill border-border hover:bg-accent"
            >
              <a href="/cv.pdf" download>
                Télécharger CV
              </a>
            </Button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="https://github.com/bry4ng4rrix"
              className="glass-pill p-3 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/bryan-garrix-5a0b07258"
              className="glass-pill p-3 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://bryanmfb4@gmail.com"
              className="glass-pill p-3 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
