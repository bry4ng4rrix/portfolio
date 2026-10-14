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
    <footer
      id="contact"
      className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Allsafe</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Votre partenaire technologique à Ankadikely Ilafy.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <address className="mt-3 flex flex-col gap-2 text-sm not-italic text-muted-foreground">
              <a
                className="transition-colors hover:text-primary"
                href="mailto:bryanmfb4@gmail.com"
              >
                bryanmfb4@gmail.com
              </a>
              <a
                className="transition-colors hover:text-primary"
                href="mailto:bryan@labeltechnology.mg"
              >
                bryan@labeltechnology.mg
              </a>
              <a
                className="transition-colors hover:text-primary"
                href="tel:+261383572066"
              >
                +261 38 35 720 66
              </a>
              <span>Ankadikely Ilafy</span>
            </address>
          </div>

          <div className="flex flex-col gap-5 md:items-end">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground md:text-right">
                Navigation
              </h3>
              <nav
                aria-label="Navigation de pied de page"
                className="mt-2 flex flex-wrap gap-1 md:justify-end"
              >
                {links.map((item) => (
                  <SmoothScrollButton key={item.link} to={item.link}>
                    {item.nom}
                  </SmoothScrollButton>
                ))}
              </nav>
            </div>

            <div className="flex gap-5 md:justify-end">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} - Allsafe. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}
