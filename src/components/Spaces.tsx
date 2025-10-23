import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/inauguration-ruban.jpg";
import { Briefcase, Presentation, CheckCircle2, Users2 } from "lucide-react";

const spaces = [
  {
    icon: Briefcase,
    title: "Espace de travail",
    description: "300 postes de travail flexibles dans un environnement inspirant avec tous les services embarqués",
    features: [
      "L'accès au réseau des 24 bâtiments Morning dans Paris (espaces nomades)",
      "Un écosystème bouillonnant où vous êtes entourés des personnes qui veulent transformer le monde de demain",
      "L'accès gratuit à la programmation (>500 conférences, formations,...)",
      "Des salles de réunions (14) équipées et réservables via l'app en illimité",
      "Des phone box (23)",
      "Discount pour la privatisation des espaces événements (dont le studio Podcast) à la journée ou 1/2 journée",
      "Un office manager pour répondre à toutes vos questions",
      "Internet & service IT à l'installation",
      "Café en illimité",
      "Accès à l'espace 7/7",
    ],
    ctaText: "Candidater pour devenir résident",
    ctaLink: "#contact",
  },
  {
    icon: Presentation,
    title: "Espace événementiel et collaboratif",
    description: "Un lieu qui s'adapte à vos envies pour donner vie à vos événements",
    features: [
      "Cinq espaces, de 30 à 100 personnes, pour vos conférences, séminaires et ateliers",
      "Extension jusqu'à 400 personnes à Plantation Paris",
      "Des offres modulables, pensées pour répondre à vos attentes",
      "Des ateliers transformatifs qui éveillent la tête, touchent le cœur et engagent le corps",
      "Des partenaires engagés dans une démarche pour une alimentation responsable",
      "Équipement professionnel complet et support technique dédié",
      "Salons thématiques pour les rencontres et zones de créativité",
      "Configuration modulable selon vos besoins",
    ],
    ctaText: "Organiser un événement",
    ctaLink: "#contact",
  },
];

export const Spaces = () => {
  return (
    <section id="espaces" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">La Climate House</h2>
          <p className="text-xl text-muted-foreground mb-4">
            2000 m² pensés pour inspirer, connecter et transformer. Des espaces modulables
            qui s'adaptent à tous vos besoins.
          </p>
          <p className="text-lg text-muted-foreground">
            Deux types de résidents : <span className="font-semibold text-primary">permanents</span> avec leur bureau dédié, 
            et <span className="font-semibold text-primary">nomades</span> qui profitent de la flexibilité du réseau Morning.
          </p>
        </div>

        {/* Image principale */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-strong">
            <img
              src={coworkingImage}
              alt="Inauguration Climate House - Célébration de la communauté"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {spaces.map((space, index) => (
            <Card
              key={space.title}
              className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
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
              <ul className="space-y-2 mb-6 flex-grow">
                {space.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full bg-gradient-hero hover:opacity-90" asChild>
                <a href={space.ctaLink}>{space.ctaText}</a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
              <a href="#contact">Nous contacter</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://visite-virtuelle-climate-house.com" target="_blank" rel="noopener noreferrer">
                Visite virtuelle
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
