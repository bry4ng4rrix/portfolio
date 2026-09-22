"use client";

import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SmoothScrollButton } from "@/components/module/SmoothScrollButton";

const links = [
  { link: "home", nom: "Acceuil" },
  { link: "parcours", nom: "Parcours" },
  { link: "projects", nom: "Projets" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bry4ng4rrix",
    icon: FaGithub,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/bryan.garrix4/",
    icon: FaFacebook,
  },
  {
    // wa.me attend le numéro au format international, sans + ni espaces
    label: "WhatsApp",
    href: "https://wa.me/261383572066",
    icon: FaWhatsapp,
  },
  {
    label: "Gmail",
    href: "mailto:bryanmfb4@gmail.com",
    icon: SiGmail,
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Liens de navigation */}
        <div className="flex flex-wrap justify-center gap-1">
          {links.map((item) => (
            <SmoothScrollButton key={item.link} to={item.link}>
              {item.nom}
            </SmoothScrollButton>
          ))}
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </div>

        <p className="text-muted-foreground text-sm text-center">
          Copyright © {new Date().getFullYear()} - Tous droits réservés par
          Milson Fanoela Bryan
        </p>
      </div>
    </footer>
  );
}
