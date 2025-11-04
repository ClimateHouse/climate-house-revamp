import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coworkingImage from "@/assets/inauguration-ruban.jpg";
import gallerySpace1 from "@/assets/gallery-space-1.jpg";
import gallerySpace2 from "@/assets/gallery-space-2.jpg";
import gallerySpace3 from "@/assets/gallery-space-3.jpg";
import galleryWallFame from "@/assets/gallery-wall-fame.jpg";
import communityMeeting from "@/assets/community-meeting.jpg";
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

        {/* ============= GALERIE MODERNE ============= */}
        <div className="max-w-7xl mx-auto mb-12">
          {/* Grille Bento moderne et asymétrique */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
            {/* Image 1 - Grande, 2 colonnes - Inauguration */}
            <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in">
              <img
                src={coworkingImage}
                alt="Plus qu'un espace de travail, un écosystème vivant"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-lg">Plus qu'un espace de travail, un écosystème vivant</p>
              </div>
            </div>

            {/* Image 2 - Petite */}
            <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <img
                src={gallerySpace2}
                alt="Un cadre parfait au coeur de Paris"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold">Un cadre parfait au coeur de Paris</p>
              </div>
            </div>

            {/* Image 3 - Moyenne, 2 lignes */}
            <div className="lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img
                src={galleryWallFame}
                alt="Wall of Fame - Communauté Climate House"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold">Notre communauté</p>
              </div>
            </div>

            {/* Image 4 - Grande - Espaces de travail */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img
                src={gallerySpace1}
                alt="Espaces de travail collaboratifs"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-lg">Espaces de travail collaboratifs</p>
              </div>
            </div>

            {/* Image 5 - Petite */}
            <div className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <img
                src={gallerySpace3}
                alt="Bienvenue à la Maison"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold">Bienvenue à la Maison</p>
              </div>
            </div>

            {/* Image 6 - Grande, 2 colonnes - Rencontre */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <img
                src={communityMeeting}
                alt="Rencontres et échanges"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold text-lg">Rencontres et échanges</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
