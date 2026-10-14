import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calculator,
  CodeXml,
  Database,
  Cpu,
  RefreshCw,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    name: "Développement",
    headline: "On ne livre pas du code. On livre de la croissance.",
    description:
      "Applications web et mobile sur mesure, ERP, CRM, plateformes métier. Du prototype au système d'information complet.",
    image: "/services/developpement.jpg",
    color: "#3B82F6",
    icon: CodeXml,
    featured: true,
  },
  {
    name: "Digitalisation",
    headline: "Vos processus papier coûtent de l'argent.",
    description:
      "Audit, conseil, déploiement ERP/CRM et formation des équipes. Une transformation numérique complète.",
    image: "/services/digitalisation.jpg",
    color: "#10B981",
    icon: RefreshCw,
    featured: true,
  },
  {
    name: "Marketing digital",
    headline: "Votre audience existe déjà. On va la trouver.",
    description:
      "SEO, SEA, réseaux sociaux et analytics. Une stratégie orientée vers des résultats mesurables.",
    image: "/services/marketing.jpg",
    color: "#EC4899",
    icon: TrendingUp,
  },
  {
    name: "Traitement de données",
    headline: "Vos données dorment. On les réveille.",
    description:
      "Numérisation, saisie, nettoyage, structuration et analyse, sur supports physiques comme numériques.",
    image: "/services/donnees.jpg",
    color: "#38BDF8",
    icon: Database,
  },
  {
    name: "Matériel IT",
    headline: "L'infrastructure qui tient la route.",
    description:
      "Ordinateurs, serveurs, réseau et périphériques. Conseil, livraison et installation B2B à Antananarivo et en régions.",
    image: "/services/materiel.jpg",
    color: "#F59E0B",
    icon: Cpu,
  },
  {
    name: "Comptabilité",
    headline: "Vos chiffres, enfin lisibles.",
    description:
      "Saisie comptable, rapprochements bancaires et reporting financier mensuel pour des décisions éclairées.",
    image: "/services/comptabilite.jpg",
    color: "#F87171",
    icon: Calculator,
  },
];

export default function Services() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Services
            </p>
            <h2 className="max-w-xl font-geo text-3xl font-bold leading-tight md:text-4xl">
              Six pôles, une seule interlocutrice
              <span className="text-gradient">.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Deux expertises cœur, le développement sur mesure et la
              digitalisation, complétées par quatre pôles mobilisés selon votre
              projet.
            </p>
          </div>
          <Link
            href="mailto:bryan@labeltechnology.mg?subject=Demande%20de%20projet%20Allsafe"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:self-auto"
          >
            Démarrer un projet
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className={`group relative isolate flex min-h-80 flex-col overflow-hidden rounded-2xl bg-neutral-950 text-white shadow-lg ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 ${
                  service.featured ? "lg:col-span-2 lg:min-h-95" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes={
                    service.featured
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  }
                  className="-z-10 object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/75 to-black/25"
                />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-auto flex items-start justify-between gap-3">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 backdrop-blur-sm"
                      style={{
                        color: service.color,
                        backgroundColor: `${service.color}26`,
                      }}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    {service.featured && (
                      <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur-sm">
                        Expertise cœur
                      </span>
                    )}
                  </div>

                  <div className="pt-10">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                      {service.name}
                    </p>
                    <h3
                      className={`max-w-[34ch] font-kode font-bold leading-tight ${
                        service.featured ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {service.headline}
                    </h3>
                    <p className="mt-3 max-w-[58ch] text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                    <Link
                      href={`mailto:bryan@labeltechnology.mg?subject=${encodeURIComponent(`Projet Allsafe : ${service.name}`)}`}
                      className="mt-5 inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
                    >
                      Parlons de ce service
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4"
                        style={{ color: service.color }}
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
