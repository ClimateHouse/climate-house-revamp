import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/inauguration-ruban.jpg";
import { Briefcase, Presentation, Plus, Minus, Users, Calendar, Lightbulb, MapPin, Building2, Quote } from "lucide-react";

// Données des espaces de travail pour les résidents
const workspaceFeatures = [
  "Un écosystème bouillonnant où vous êtes entourés des personnes qui veulent transformer le monde de demain",
  "L'accès gratuit à la programmation (>500 conférences, formations,...)",
  "Des salles de réunions (14) équipées et réservables via l'app",
  "Des phone box (23)",
  "Discount pour la privatisation des espaces événements à la journée ou 1/2 journée",
  "Un office manager pour répondre à toutes vos questions",
  "Internet & service IT à l'installation",
  "Café en illimité",
  "Accès à l'espace 7/7",
];

// Données des espaces événementiels
const eventSpaces = [
  {
    icon: Presentation,
    title: "Espaces événementiels modulables",
    capacity: "De 30 à 400 personnes",
    features: [
      "Cinq espaces, de 30 à 100 personnes, pour vos conférences, séminaires et ateliers",
      "Extension jusqu'à 400 personnes à Plantation Paris",
      "Équipement professionnel complet et support technique dédié",
      "Configuration modulable selon vos besoins",
    ],
  },
  {
    icon: Users,
    title: "Ateliers transformants",
    capacity: "Formats sur-mesure",
    features: [
      "Des ateliers qui éveillent la tête, touchent le cœur et engagent le corps",
      "Salons thématiques pour les rencontres et zones de créativité",
      "Des partenaires engagés dans une démarche pour une alimentation responsable",
      "Des offres modulables, pensées pour répondre à vos attentes",
    ],
  },
];

// Données des espaces spécifiques
const specificSpaces = [
  {
    name: "La BAL-ROOM",
    description: "Salle de réception pour jusqu'à 90 personnes, idéale pour des conférences ou des cocktails."
  },
  {
    name: "Le JARDIN Divers",
    description: "Espace modulable pour 40 personnes, parfait pour des ateliers ou des événements publics."
  },
  {
    name: "Les COMMUNS",
    description: "Accueille jusqu'à 150 personnes, idéal pour des séminaires collaboratifs."
  },
  {
    name: "La WAVE ROOM",
    description: "Salle de créativité unique avec vue panoramique, favorisant l'innovation."
  },
  {
    name: "PLANTATION",
    description: "Une toute nouvelle extension"
  }
];

// Composant pour les cartes d'espaces événementiels
const EventSpaceCard = ({ space, index, colorScheme }: { 
  space: typeof eventSpaces[0]; 
  index: number;
  colorScheme: 'accent' | 'accent-light';
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const bgColorClass = colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
  const textColorClass = colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';
  const dotColorClass = colorScheme === 'accent' ? 'bg-accent' : 'bg-accent-light';

  return (
    <Card
      className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${bgColorClass} flex items-center justify-center`}>
          <space.icon className={`h-7 w-7 ${textColorClass}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
          <p className={`text-lg ${textColorClass} font-semibold mb-2`}>{space.capacity}</p>
        </div>
      </div>

      {showDetails && (
        <div className="space-y-4 mb-6 animate-fade-in">
          <div className="bg-secondary/30 rounded-lg p-4">
            <h5 className="font-semibold mb-2">✨ Ce qui est inclus</h5>
            <ul className="space-y-2 text-sm">
              {space.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${dotColorClass} mt-1.5 flex-shrink-0`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button size="lg" variant="default" className="flex-1" asChild>
          <a href="#contact">Organiser un événement</a>
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

const ResidenceCard = ({ 
  title, 
  description, 
  icon: Icon, 
  forWhom, 
  advantages, 
  ctaText, 
  ctaVariant = "default",
  colorScheme = "primary-dark"
}: {
  title: string;
  description: string;
  icon: any;
  forWhom: string;
  advantages: string[];
  ctaText: string;
  ctaVariant?: "default" | "secondary";
  colorScheme?: "primary-dark" | "primary-light";
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const borderColorClass = colorScheme === 'primary-dark' ? 'border-primary-dark/20 hover:border-primary-dark/40' : 'border-primary-light/20 hover:border-primary-light/40';
  const bgColorClass = colorScheme === 'primary-dark' ? 'bg-primary-dark/10' : 'bg-primary-light/10';
  const textColorClass = colorScheme === 'primary-dark' ? 'text-primary-dark' : 'text-primary-light';
  const dotColorClass = colorScheme === 'primary-dark' ? 'bg-primary-dark' : 'bg-primary-light';

  return (
    <Card className={`p-8 border-2 ${borderColorClass} transition-all duration-300 hover:shadow-strong`}>
      <div className="mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${bgColorClass} mb-4`}>
          <Icon className={`h-8 w-8 ${textColorClass}`} />
        </div>
        <h4 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{title}</h4>
        <p className="text-lg font-semibold text-muted-foreground mb-4">
          {description}
        </p>
      </div>

      {showDetails && (
        <div className="space-y-4 mb-6 animate-fade-in">
          <div className="bg-secondary/30 rounded-lg p-4">
            <h5 className="font-semibold mb-2">🎯 Pour qui ?</h5>
            <p className="text-sm text-muted-foreground">
              {forWhom}
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-4">
            <h5 className="font-semibold mb-2">✨ Les avantages</h5>
            <ul className="space-y-2 text-sm">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${dotColorClass} mt-1.5 flex-shrink-0`} />
                  <span>{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <Button size="lg" variant={ctaVariant} className="flex-1" asChild>
          <a href="#contact">{ctaText}</a>
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
  const [showWorkspaceDetails, setShowWorkspaceDetails] = useState(false);
  const [showSpaceDetails, setShowSpaceDetails] = useState(false);

  return (
    <section id="espaces" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">

        {/* ============= SECTION 1 : LA RÉSIDENCE ============= */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Devenir Résident</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              2000 m² pour inspirer, connecter et transformer.
              <br />
              Rejoignez notre communauté d'entrepreneurs engagés
            </p>
          </div>

          {/* Deux types de résidence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ResidenceCard
              title="Résident Permanent"
              description="Votre bureau dédié au cœur de l'écosystème"
              icon={MapPin}
              forWhom="Les équipes qui cherchent stabilité et ancrage dans un lieu inspirant. Parfait pour les entreprises de 1 à 15 personnes souhaitant un espace fixe tout en bénéficiant d'un réseau dynamique."
              advantages={[
                "Bureau dédié à votre entreprise",
                "Personnalisation de votre espace de travail",
                "Accès 24/7 à votre bureau",
                "Stockage sécurisé pour vos équipements",
                "Travaillez au sein de l'écosystème impact français"
              ]}
              ctaText="Devenir résident permanent"
              colorScheme="primary-dark"
            />

            <ResidenceCard
              title="Résident Nomade"
              description="La flexibilité totale dans 24 lieux à Paris"
              icon={Lightbulb}
              forWhom="Les indépendants, consultants et petites équipes qui privilégient la mobilité et la variété. Idéal pour ceux qui veulent diversifier leurs environnements de travail et élargir leur réseau."
              advantages={[
                "Accès à 24 espaces Morning dans tout Paris",
                "Choisissez votre bureau chaque jour selon vos envies",
                "Multipliez vos opportunités de networking",
                "Adaptez votre lieu à votre agenda du jour",
                "Flexibilité géographique totale"
              ]}
              ctaText="Devenir résident nomade"
              ctaVariant="secondary"
              colorScheme="primary-light"
            />
          </div>

          {/* Services inclus pour tous les résidents */}
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">300 postes de travail & services premium</h4>
                <p className="text-lg text-muted-foreground">
                  Un environnement de travail complet et inspirant avec tous les services embarqués
                </p>
              </div>
            </div>

            {showWorkspaceDetails && (
              <ul className="space-y-2 mb-6 animate-fade-in">
                {workspaceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <Button
              variant="outline"
              onClick={() => setShowWorkspaceDetails(!showWorkspaceDetails)}
              className="w-full"
            >
              {showWorkspaceDetails ? (
                <>
                  <Minus className="h-4 w-4 mr-2" />
                  Voir moins de détails
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Voir tous les services inclus
                </>
              )}
            </Button>
          </Card>

          <div className="text-center mt-8 p-6 bg-secondary/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-6">
              💡 <span className="font-semibold">Besoin d'aide pour choisir ?</span> Nos équipes sont là pour vous conseiller et trouver la formule qui correspond le mieux à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
                <a href="#contact">Nous contacter</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://discover.matterport.com/space/UxagxBR7SZk" target="_blank" rel="noopener noreferrer">
                  Visite virtuelle
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/colocataires">
                  Découvrir les Colocataires
                </a>
              </Button>
            </div>
          </div>

          {/* TÉMOIGNAGES COLOCATAIRES - Remontés plus près des CTA */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "Climate House nous a permis de rencontrer des partenaires clés et d'accélérer notre croissance. L'écosystème est exceptionnel."
                </p>
                <div>
                  <div className="font-bold">Marie Dubois</div>
                  <div className="text-sm text-muted-foreground">CEO, GreenTech Startup</div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "Un lieu inspirant où la collaboration prime. Nous avons co-créé plusieurs projets innovants avec d'autres membres."
                </p>
                <div>
                  <div className="font-bold">Thomas Martin</div>
                  <div className="text-sm text-muted-foreground">Directeur Innovation, ONG Environnement</div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "La communauté Climate House est unique. Chaque jour apporte de nouvelles opportunités et connexions précieuses."
                </p>
                <div>
                  <div className="font-bold">Sophie Bernard</div>
                  <div className="text-sm text-muted-foreground">Fondatrice, Impact Social</div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* ============= VISUEL UNIQUE ============= */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="max-w-5xl mx-auto animate-scale-in">
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
        </div>

      </div>
    </section>
  );
};
