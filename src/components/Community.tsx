import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import communityImage from "@/assets/cofondateurs-wall.jpg";
import communityEvent1 from "@/assets/community-event-1.jpg";
import communityEvent2 from "@/assets/community-event-2.jpg";
import communityEvent3 from "@/assets/community-event-3.jpg";
import communityEvent4 from "@/assets/community-event-4.jpg";
import communityEvent5 from "@/assets/community-event-5.jpg";
import communityEvent6 from "@/assets/community-event-6.jpg";
import { Linkedin, BookOpen, Users as UsersIcon, Zap, CheckCircle, Plus, Minus } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
const teamMembers = [
  {
    name: "Henri-François MARTIN",
    role: "CO-directeur général",
    image: "",
    linkedin: "https://www.linkedin.com/in/henri-françoismartin/",
    initials: "HM"
  },
  {
    name: "Maika NUTI",
    role: "CO-directrice générale",
    image: "",
    linkedin: "#",
    initials: "MN"
  },
  {
    name: "Valère BRUNET",
    role: "Lead Dynamique Collective",
    image: "",
    linkedin: "#",
    initials: "VB"
  },
  {
    name: "Sixtine VAN DEN BROEK",
    role: "Support Programmation",
    image: "",
    linkedin: "#",
    initials: "SV"
  },
  {
    name: "Manon FAVEROLLE",
    role: "Lead Event",
    image: "",
    linkedin: "#",
    initials: "MF"
  },
  {
    name: "Ulysse PUGNET",
    role: "Support Administratif & Financier",
    image: "",
    linkedin: "#",
    initials: "UP"
  },
  {
    name: "Stéphanie AMPART",
    role: "Lead Programmation",
    image: "",
    linkedin: "#",
    initials: "SA"
  },
  {
    name: "Charlotte OLAGNE",
    role: "Lead Maison",
    image: "",
    linkedin: "#",
    initials: "CO"
  },
  {
    name: "Vincent DE COIGNAC",
    role: "Key Account Manager",
    image: "",
    linkedin: "#",
    initials: "VC"
  },
  {
    name: "Luna RAIX",
    role: "Support event",
    image: "",
    linkedin: "#",
    initials: "LR"
  },
  {
    name: "Elisabeth GUITINE",
    role: "Lead Administratif et Financier",
    image: "",
    linkedin: "#",
    initials: "EG"
  },
  {
    name: "Sarah BANDERLY",
    role: "Lead Communication",
    image: "",
    linkedin: "#",
    initials: "SB"
  },
  {
    name: "Simon OUAKI",
    role: "Support Communication",
    image: "",
    linkedin: "#",
    initials: "SO"
  }
];

const communityImages = [
  { src: communityImage, alt: "Mur des cofondateurs Climate House - 80 portraits" },
  { src: communityEvent1, alt: "Événement Climate House - Conférence communauté" },
  { src: communityEvent2, alt: "Programme Climate House - Festival Atmosphères" },
  { src: communityEvent3, alt: "Intervention Climate House - Jean-Marc Jancovici et Henri Pellion" },
  { src: communityEvent4, alt: "Présentation Climate House - Atelier collaboratif" },
  { src: communityEvent5, alt: "Équipe Climate House - Rencontre cofondateurs" },
  { src: communityEvent6, alt: "Événement Climate House - Conférence innovation" },
];

const MembershipCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  index 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  features: string[]; 
  index: number;
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card 
      className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      
      {showDetails && (
        <ul className="space-y-2 mb-4 animate-fade-in">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-xs">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowDetails(!showDetails)}
        className="mt-auto"
      >
        {showDetails ? (
          <>
            <Minus className="h-4 w-4 mr-2" />
            Voir moins
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 mr-2" />
            En savoir plus
          </>
        )}
      </Button>
    </Card>
  );
};

export const Community = () => {
  return <section id="communaute" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 py-0">La Communauté</h2>
          <p className="text-xl text-muted-foreground">
            Une communauté de plus de 800 entrepreneurs passionnés, unis par la volonté de
            construire une économie durable. 80 cofondateurs à parité femmes-hommes ont
            mis leurs ressources au service de cette vision collective.
          </p>
        </div>

        {/* Carrousel communauté */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {communityImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-strong"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
          </Carousel>
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              80
            </div>
            <div className="text-lg font-semibold mb-1">Cofondateurs</div>
            <p className="text-sm text-muted-foreground">
              À parité femmes-hommes, issus de secteurs variés
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              70+
            </div>
            <div className="text-lg font-semibold mb-1">Structures</div>
            <p className="text-sm text-muted-foreground">
              Entreprises, ONG, startups et collectifs
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              430
            </div>
            <div className="text-lg font-semibold mb-1">Colocataires</div>
            <p className="text-sm text-muted-foreground">
              Entrepreneurs engagés pour le climat
            </p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href="/cofondateurs">Découvrir les Cofondateurs</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/colocataires">Découvrir les Colocataires</a>
          </Button>
        </div>

        {/* Section Adhésion Individuelle */}
        <div className="max-w-6xl mx-auto mt-24 mb-16">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Adhésion Individuelle</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un passeport pour comprendre, rencontrer et agir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <MembershipCard
              icon={BookOpen}
              title="Explorer & apprendre"
              description="Accès illimité à +700 événements par an : conférences, débats, masterclasses, immersions..."
              features={[
                "6 grandes thématiques (Énergie, Alimentation, Habitat, Biodiversité, Finance, Culture)",
                "10 formats d'apprentissage expérientiel",
                "Conférences exclusives avec chercheurs et dirigeants"
              ]}
              index={0}
            />
            <MembershipCard
              icon={UsersIcon}
              title="Rencontrer & appartenir"
              description="Rejoignez une communauté active de 700 membres engagés pour le climat"
              features={[
                "Événements de convivialité (apéros, petits déj, tables d'hôtes)",
                "Plateforme communautaire (Slack, entraide, forum)",
                "Événements co-construits entre membres",
                "Accès privilégié aux espaces Climate House"
              ]}
              index={1}
            />
            <MembershipCard
              icon={Zap}
              title="Agir & s'impliquer"
              description="Participez activement à la transformation de notre économie"
              features={[
                "Groupes de travail inter-entreprises",
                "Explorations hors les murs et learning expeditions",
                "Proposition de formats à la communauté",
                "Voix consultative dans les orientations"
              ]}
              index={2}
            />
          </div>

          {/* Pricing and CTA */}
          <div className="max-w-2xl mx-auto text-center p-8 rounded-3xl bg-card border-2 border-primary/20 animate-fade-in">
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                480 €
              </div>
              <div className="text-muted-foreground">par an (soit 40 € / mois)</div>
            </div>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Accès à toute la programmation de l'ATE.LIER</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Accès à la plateforme et à la communauté Climate House</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Participation aux événements membres</span>
              </li>
            </ul>
            <Button size="lg" className="bg-gradient-hero">
              Devenir Membre
            </Button>
          </div>
        </div>

        {/* Section Équipe */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">L'Équipe</h3>
            <p className="text-lg text-muted-foreground">
              13 personnes Climate House qui mettent quotidiennement leur énergie au service du projet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24 border-2 border-border group-hover:border-primary transition-colors duration-300 shadow-soft">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-card">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <h4 className="font-semibold text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};