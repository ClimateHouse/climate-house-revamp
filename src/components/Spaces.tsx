import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/coworking-space.jpg";
import { Briefcase, Presentation, Coffee, Users2 } from "lucide-react";

const spaces = [
  {
    icon: Briefcase,
    title: "Espaces de Coworking",
    description: "300 postes de travail flexibles dans un environnement inspirant",
    features: ["Bureaux privés", "Espaces partagés", "Salles de réunion"],
  },
  {
    icon: Presentation,
    title: "Salles d'Événements",
    description: "5 espaces modulables pour vos conférences et ateliers",
    features: ["Jusqu'à 200 personnes", "Équipement professionnel", "Catering disponible"],
  },
  {
    icon: Coffee,
    title: "L'Ate•lier",
    description: "Un espace de convivialité pour les moments d'échange informels",
    features: ["Cuisine équipée", "Zone détente", "Terrasse extérieure"],
  },
  {
    icon: Users2,
    title: "Espaces Collaboratifs",
    description: "Des lieux pensés pour favoriser les rencontres et la collaboration",
    features: ["Salons thématiques", "Zones de créativité", "Espaces confidentiels"],
  },
];

export const Spaces = () => {
  return (
    <section id="espaces" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Espaces</h2>
          <p className="text-xl text-muted-foreground">
            2000 m² pensés pour inspirer, connecter et transformer. Des espaces modulables
            qui s'adaptent à tous vos besoins.
          </p>
        </div>

        {/* Image principale */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-strong">
            <img
              src={coworkingImage}
              alt="Espace de coworking moderne Climate House"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-bold text-primary-foreground mb-2">
                Un lieu unique au cœur de Paris
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Où l'innovation rencontre la durabilité
              </p>
            </div>
          </div>
        </div>

        {/* Grille des espaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {spaces.map((space, index) => (
            <Card
              key={space.title}
              className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <space.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                  <p className="text-muted-foreground mb-4">{space.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {space.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="bg-gradient-hero hover:opacity-90">
            Visiter nos espaces
          </Button>
        </div>
      </div>
    </section>
  );
};
