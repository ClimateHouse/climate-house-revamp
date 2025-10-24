import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/inauguration-ruban.jpg";
import { Briefcase, Presentation, Plus, Minus, Users, Calendar, Lightbulb, MapPin } from "lucide-react";

// Données des espaces de travail pour les résidents
const workspaceFeatures = [
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
];

// Données des espaces spécifiques
const specificSpaces = [
  {
    name: "LA BAL-ROOM",
    capacity: "Jusqu'à 90 personnes",
    description: "Salle de réception idéale pour des conférences ou des cocktails.",
  },
  {
    name: "Le JARDIN Divers",
    capacity: "40 personnes",
    description: "Espace modulable parfait pour des ateliers ou des événements publics.",
  },
  {
    name: "Les COMMUNS",
    capacity: "Jusqu'à 150 personnes",
    description: "Idéal pour des séminaires collaboratifs.",
  },
  {
    name: "La WAVE ROOM",
    capacity: "Salle de créativité",
    description: "Espace unique avec vue panoramique, favorisant l'innovation.",
  },
  {
    name: "PLANTATION",
    capacity: "Jusqu'à 400 personnes",
    description: "Une toute nouvelle extension pour vos événements d'ampleur.",
  },
];

// Données des atouts événementiels
const eventHighlights = [
  {
    icon: Presentation,
    title: "Des formats adaptés à vos besoins",
    subtitle: "Un lieu qui s'adapte à vos envies",
    description: "Cinq espaces, de 30 à 100 personnes, pour donner vie à vos conférences, séminaires et ateliers. Extension jusqu'à 400 personnes à Plantation Paris.",
  },
  {
    icon: Lightbulb,
    title: "Un accompagnement à votre image",
    subtitle: "À l'écoute de vos attentes",
    description: "Des offres modulables, pensées pour répondre à vos attentes.",
  },
  {
    icon: Users,
    title: "Des ateliers transformatifs",
    subtitle: "Prêt à tenter l'expérience ?",
    description: "Plongez dans des ateliers qui éveillent la tête, touchent le cœur et engagent le corps.",
  },
];

// Composant pour les atouts événementiels
const EventHighlightCard = ({ highlight, index }: { highlight: typeof eventHighlights[0]; index: number }) => {
  return (
    <Card
      className="p-6 hover:shadow-strong transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
          <highlight.icon className="h-6 w-6 text-accent" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-1">{highlight.title}</h4>
          <p className="text-sm text-accent font-semibold mb-2">{highlight.subtitle}</p>
          <p className="text-sm text-muted-foreground">{highlight.description}</p>
        </div>
      </div>
    </Card>
  );
};

// Composant pour les espaces spécifiques
const SpecificSpaceCard = ({ space, index }: { space: typeof specificSpaces[0]; index: number }) => {
  return (
    <Card
      className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h4 className="text-xl font-bold mb-2 text-accent">{space.name}</h4>
      <p className="text-sm font-semibold text-primary mb-2">{space.capacity}</p>
      <p className="text-sm text-muted-foreground">{space.description}</p>
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
  accentColor = "primary"
}: { 
  title: string;
  description: string;
  icon: any;
  forWhom: string;
  advantages: string[];
  ctaText: string;
  ctaVariant?: "default" | "secondary";
  accentColor?: "primary" | "accent";
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className={`p-8 border-2 border-${accentColor}/20 hover:border-${accentColor}/40 transition-all duration-300 hover:shadow-strong`}>
      <div className="mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${accentColor}/10 mb-4`}>
          <Icon className={`h-8 w-8 text-${accentColor}`} />
        </div>
        <h4 className={`text-2xl font-bold mb-2 text-${accentColor}`}>{title}</h4>
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
                  <div className={`w-1.5 h-1.5 rounded-full bg-${accentColor} mt-1.5 flex-shrink-0`} />
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

  return (
    <section id="espaces" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête principal */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">La Climate House</h2>
          <p className="text-xl text-muted-foreground">
            2000 m² pensés pour inspirer, connecter et transformer. Un lieu unique qui s'adapte à tous vos besoins.
          </p>
        </div>

        {/* ============= SECTION 1 : LA RÉSIDENCE ============= */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Devenir Résident</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rejoignez notre communauté d'entrepreneurs engagés et bénéficiez d'un écosystème complet pour développer votre activité
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
                "Bureau dédié avec votre nom sur la porte",
                "Personnalisation de votre espace de travail",
                "Accès 24/7 à votre bureau",
                "Stockage sécurisé pour vos équipements",
                "Domiciliation d'entreprise possible"
              ]}
              ctaText="Devenir résident permanent"
              accentColor="primary"
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
              accentColor="accent"
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
                <p className="text-muted-foreground">
                  Un environnement de travail complet et inspirant avec tous les services embarqués
                </p>
              </div>
            </div>

            {showWorkspaceDetails && (
              <ul className="space-y-3 mb-6 animate-fade-in">
                {workspaceFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
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
            <p className="text-sm text-muted-foreground">
              💡 <span className="font-semibold">Besoin d'aide pour choisir ?</span> Nos équipes sont là pour vous conseiller et trouver la formule qui correspond le mieux à vos besoins.
            </p>
          </div>
        </div>

        {/* ============= SECTION 2 : ÉVÉNEMENTS ============= */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-4">
              <Calendar className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Organiser un Événement</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des espaces modulables et équipés pour donner vie à tous vos événements professionnels
            </p>
          </div>

          {/* Atouts événementiels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {eventHighlights.map((highlight, index) => (
              <EventHighlightCard key={highlight.title} highlight={highlight} index={index} />
            ))}
          </div>

          {/* Nos espaces */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold mb-2">Nos Espaces</h4>
              <p className="text-muted-foreground">
                Découvrez nos espaces modulables pour tous types d'événements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specificSpaces.map((space, index) => (
                <SpecificSpaceCard key={space.name} space={space} index={index} />
              ))}
            </div>
          </div>

          {/* Partenaires engagés */}
          <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 mb-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-3">Des partenaires engagés</h4>
              <p className="text-muted-foreground mb-6">
                Nos prestataires sont engagés dans une démarche pour une alimentation responsable, bonne pour vous et la planète
              </p>
              <Button size="lg" variant="outline" asChild>
                <a href="#partenaires-traiteurs">Découvrir nos partenaires traiteurs</a>
              </Button>
            </div>
          </Card>

          {/* CTAs */}
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90" asChild>
              <a href="#contact">Organiser un événement</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://visite-virtuelle-climate-house.com" target="_blank" rel="noopener noreferrer">
                Visite virtuelle
              </a>
            </Button>
          </div>
        </div>

        {/* ============= SECTION COMMUNE ============= */}
        <div className="max-w-7xl mx-auto">
          {/* Image principale */}
          <div className="max-w-5xl mx-auto mb-12 animate-scale-in">
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

          {/* CTAs finaux */}
          <div className="text-center animate-fade-in">
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
      </div>
    </section>
  );
};
