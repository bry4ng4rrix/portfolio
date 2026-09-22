"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/module/ThemeToggle";
import { SmoothScrollButton } from "@/components/module/SmoothScrollButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = [
    {
      link: "home",
      nom: "Acceuil",
    },
    {
      link: "parcours",
      nom: "Parcours",
    },
    {
      link: "projects",
      nom: "Projets",
    },
  ];

  return (
    <nav className="fixed top-3 inset-x-0 z-50 px-3">
      <div className="max-w-5xl mx-auto glass-pill shadow-[0_8px_32px_-12px_rgba(0,0,0,0.25)]">
        <div className="flex px-4 justify-between items-center py-2">
          <Image
            src="/logo.png"
            alt="Profile"
            width={44}
            height={44}
            className="rounded-full"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center text-foreground gap-1">
            {nav.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index}
              >
                <SmoothScrollButton to={item.link}>
                  {item.nom}
                </SmoothScrollButton>
              </motion.div>
            ))}
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border text-foreground">
            <div className="flex flex-col space-y-4 items-center">
              <ThemeToggle />
              {nav.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  <SmoothScrollButton to={item.link}>
                    {item.nom}
                  </SmoothScrollButton>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
