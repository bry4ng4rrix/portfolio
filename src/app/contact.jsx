import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en
            discuter.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-6">
            Informations de contact
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/20 dark:border-white/10 text-primary">
                <Mail className="w-4 h-4" />
              </span>
              <span>bryanmfb4@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/20 dark:border-white/10 text-primary">
                <Github className="w-4 h-4" />
              </span>
              <span>github.com/bry4ng4rrix</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/20 dark:border-white/10 text-primary">
                <Linkedin className="w-4 h-4" />
              </span>
              <span>linkedin.com/in/bryan-garrix-5a0b07258</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="text-lg font-semibold mb-2">Disponibilité</h4>
            <p className="text-muted-foreground">
              Actuellement disponible pour de nouveaux projets freelance. Temps
              de réponse habituel : 24h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
