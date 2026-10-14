"use client";

import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { MapPin, Mail, Phone } from "lucide-react";
import { SmoothScrollButton } from "@/components/module/SmoothScrollButton";

const links = [
  { link: "home", nom: "Accueil" },
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
      className="border-t border-border bg-background/70 px-4 pb-12 pt-24 sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-border pb-10 md:grid-cols-[1.2fr_0.8fr_1.2fr] md:gap-12">
          <section aria-labelledby="footer-brand">
            <h2
              id="footer-brand"
              className="font-kode text-2xl font-bold tracking-wide text-foreground"
            >
              Allsafe<span className="text-primary">.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Votre partenaire technologique basé à Ankadikely Ilafy.
            </p>
          </section>

          <nav aria-label="Navigation de pied de page">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col items-start gap-2">
              {links.map((item) => (
                <li key={item.link}>
                  <SmoothScrollButton to={item.link}>
                    {item.nom}
                  </SmoothScrollButton>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h3
              id="footer-contact"
              className="text-sm font-semibold text-foreground"
            >
              Contact
            </h3>
            <address className="mt-4 flex flex-col gap-4 not-italic">
              <a
                className="group flex min-w-0 items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                href="mailto:bryanmfb4@gmail.com"
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground/75">
                    E-mail personnel
                  </span>
                  <span className="break-all">bryanmfb4@gmail.com</span>
                </span>
              </a>
              <a
                className="group flex min-w-0 items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                href="mailto:bryan@labeltechnology.mg"
              >
                <SiGmail
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground/75">
                    E-mail professionnel
                  </span>
                  <span className="break-all">bryan@labeltechnology.mg</span>
                </span>
              </a>
              <a
                className="flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                href="tel:+261383572066"
              >
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                <span>
                  <span className="block text-xs text-muted-foreground/75">
                    Téléphone / WhatsApp
                  </span>
                  +261 38 35 720 66
                </span>
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                <span>
                  <span className="block text-xs text-muted-foreground/75">
                    Adresse
                  </span>
                  Ankadikely Ilafy
                </span>
              </div>
            </address>
          </section>
        </div>

        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Allsafe. Tous droits réservés.
          </p>
          <nav aria-label="Réseaux sociaux" className="flex items-center gap-2">
            {socials.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("https://");
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
