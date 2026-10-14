import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Écoute",
    description:
      "Cadrage précis de vos enjeux avant toute proposition. On comprend votre métier, vos contraintes et vos objectifs avant de suggérer quoi que ce soit.",
    image: "/method/ecoute.jpg",
    alt: "Équipe travaillant ensemble autour d'ordinateurs",
    color: "#3B82F6",
  },
  {
    number: "02",
    title: "Conception",
    description:
      "Pas de boîte noire. Chaque étape est validée avec vous. La solution vous appartient avant même d'être développée : vous ne découvrez pas le résultat à la livraison.",
    image: "/method/conception.jpg",
    alt: "Échange autour d'un ordinateur portable",
    color: "#D4AF37",
  },
  {
    number: "03",
    title: "Exécution",
    description:
      "Délais tenus, budget respecté, livrables concrets et mesurables. Notre réputation se construit livraison après livraison, pas sur des promesses en avant-vente.",
    image: "/method/execution.jpg",
    alt: "Présentation d'un projet devant un ordinateur",
    color: "#FF6B6B",
  },
  {
    number: "04",
    title: "Suivi",
    description:
      "La livraison n'est pas la fin de l'histoire : c'est le premier jour de votre accélération. Support continu, itérations, évolutions. Votre interlocuteur reste le même, votre ambition grandit.",
    image: "/method/suivi.jpg",
    alt: "Jeune pousse symbolisant la croissance",
    color: "#10B981",
  },
];

export default function Method() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Notre méthode
          </p>
          <h2 className="font-geo text-3xl font-bold md:text-4xl">
            Comment on <span className="text-gradient">travaille.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Quatre étapes, un interlocuteur unique, zéro boîte noire.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="group flex min-w-0 flex-col"
              style={{ "--step-color": step.color }}
            >
              {/* <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted shadow-lg shadow-black/10">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div> */}
              <div className="mb-3 mt-5 flex items-center justify-between">
                <span
                  className="font-kode text-4xl font-bold text-foreground/15 transition-colors group-hover:text-(--step-color)"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <span
                  className="h-3 w-3 rounded-full ring-4 ring-background"
                  style={{ backgroundColor: step.color }}
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-kode text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <span
                className="mt-auto pt-5 text-xs font-semibold uppercase tracking-wide text-(--step-color)"
                aria-label={`Étape ${index + 1} sur ${steps.length}`}
              >
                Étape {index + 1} / {steps.length}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
