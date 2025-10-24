import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/inauguration-ruban.jpg";
import { Briefcase, Presentation, Plus, Minus } from "lucide-react";

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

const SpaceCard = ({ space, index }: { space: typeof spaces[0]; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          <space.icon className="h-7 w-7 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
          <p className="text-muted-foreground">{space.description}</p>
        </div>
      </div>

      {showDetails && (
        <ul className="space-y-2 mb-6 animate-fade-in">
          {space.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-3 mt-auto">
        <Button size="lg" className="flex-1 bg-gradient-hero hover:opacity-90" asChild>
          <a href={space.ctaLink}>{space.ctaText}</a>
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </Button>
      </div>
    </Card>
  );
};

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
        </div>

        {/* Grille des espaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {spaces.map((space, index) => (
            <SpaceCard key={space.title} space={space} index={index} />
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-in">
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

        {/* Image principale */}
        <div className="max-w-5xl mx-auto mb-20 animate-scale-in">
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

        {/* Section Deux types de résidence */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Choisissez votre formule</h3>
            <p className="text-lg text-muted-foreground">
              Deux types de résidence adaptés à vos besoins et à votre façon de travailler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Résident Permanent */}
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-strong">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-primary">Résident Permanent</h4>
                <p className="text-lg font-semibold text-muted-foreground mb-4">
                  Votre bureau dédié au cœur de l'écosystème
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">🎯 Pour qui ?</h5>
                  <p className="text-sm text-muted-foreground">
                    Les équipes qui cherchent stabilité et ancrage dans un lieu inspirant. Parfait pour les entreprises de 1 à 15 personnes souhaitant un espace fixe tout en bénéficiant d'un réseau dynamique.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">✨ Les avantages</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>Bureau dédié avec votre nom sur la porte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>Personnalisation de votre espace de travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>Accès 24/7 à votre bureau</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>Stockage sécurisé pour vos équipements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>Domiciliation d'entreprise possible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">🌟 Inclus</h5>
                  <p className="text-sm text-muted-foreground">
                    Accès réseau Morning (24 lieux), salles de réunion illimitées, programmation gratuite, café à volonté, services IT
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-full" asChild>
                <a href="#contact">Devenir résident permanent</a>
              </Button>
            </Card>

            {/* Résident Nomade */}
            <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-strong">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
                  <Presentation className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-2 text-accent">Résident Nomade</h4>
                <p className="text-lg font-semibold text-muted-foreground mb-4">
                  La flexibilité totale dans 24 lieux à Paris
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">🎯 Pour qui ?</h5>
                  <p className="text-sm text-muted-foreground">
                    Les indépendants, consultants et petites équipes qui privilégient la mobilité et la variété. Idéal pour ceux qui veulent diversifier leurs environnements de travail et élargir leur réseau.
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">✨ Les avantages</h5>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>Accès à 24 espaces Morning dans tout Paris</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>Choisissez votre bureau chaque jour selon vos envies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>Multipliez vos opportunités de networking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>Adaptez votre lieu à votre agenda du jour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>Flexibilité géographique totale</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h5 className="font-semibold mb-2">🌟 Inclus</h5>
                  <p className="text-sm text-muted-foreground">
                    Accès aux 24 lieux Morning, salles de réunion illimitées, programmation gratuite, café à volonté, services IT dans tous les espaces
                  </p>
                </div>
              </div>

              <Button size="lg" variant="secondary" className="w-full" asChild>
                <a href="#contact">Devenir résident nomade</a>
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8 p-6 bg-secondary/20 rounded-xl">
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-semibold">Besoin d'aide pour choisir ?</span> Nos équipes sont là pour vous conseiller et trouver la formule qui correspond le mieux à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
