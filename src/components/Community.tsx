import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import communityImage from "@/assets/cofondateurs-wall.jpg";
import communityEvent1 from "@/assets/community-event-1.jpg";
import communityEvent2 from "@/assets/community-event-2.jpg";
import communityEvent3 from "@/assets/community-event-3.jpg";
import communityEvent4 from "@/assets/community-event-4.jpg";
import communityEvent5 from "@/assets/community-event-5.jpg";
import communityEvent6 from "@/assets/community-event-6.jpg";
import communityOutdoor from "@/assets/community-outdoor.jpg";
import henriFrancoisAvatar from "@/assets/henri-francois-martin-avatar.jpg";
import { Linkedin, BookOpen, Users as UsersIcon, Zap, CheckCircle, Plus, Minus, Info, ChevronDown } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const teamMembers = [
  {
    name: "Henri-François MARTIN",
    role: "Direction Générale",
    image: "",
    linkedin: "https://www.linkedin.com/in/henri-françoismartin/",
    initials: "HFM"
  },
  {
    name: "Maika NUTI",
    role: "Direction Générale",
    image: "",
    linkedin: "#",
    initials: "MN"
  },
  {
    name: "Valère BRUNET",
    role: "Dynamique Collective",
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
    role: "Lead Evénement",
    image: "",
    linkedin: "#",
    initials: "MF"
  },
  {
    name: "Ulysse PUGNET",
    role: "Support Admin & Financier",
    image: "",
    linkedin: "#",
    initials: "UP"
  },
  {
    name: "Stéphanie AMPART",
    role: "Ate.lier & Programmation",
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
    role: "Lead Ate.lier",
    image: "",
    linkedin: "#",
    initials: "VC"
  },
  {
    name: "Luna RAIX",
    role: "Evénements",
    image: "",
    linkedin: "#",
    initials: "LR"
  },
  {
    name: "Elisabeth GUITINE",
    role: "Administratif et Financier",
    image: "",
    linkedin: "#",
    initials: "EG"
  },
  {
    name: "Sarah BANDERLY",
    role: "Communication",
    image: "",
    linkedin: "#",
    initials: "SB"
  },
  {
    name: "Simon OUAKI",
    role: "Communication",
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

        {/* Section Gouvernance - Refonte UX fluide */}
        <div className="max-w-6xl mx-auto mt-24 mb-24">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">La Gouvernance</h3>
            <p className="text-lg text-muted-foreground mx-auto leading-relaxed whitespace-nowrap">
              Un modèle entrepreneurial guidé par l'impact, porté par 80 cofondateurs engagés
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
              Le cœur vibrant du projet : ils mettent leur temps, leur argent et leur réseau au service du Climat
            </p>
          </div>

          {/* Flow continu avec espacement progressif */}
          <div className="space-y-12">
            {/* Type d'entreprise ESUS - Format harmonisé */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <CheckCircle className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Entreprise Solidaire d'Utilité Sociale</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Un modèle entrepreneurial qui vise la rentabilité tout en étant concentré sur ses impacts écologiques et sociaux
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="gap-2 w-full group-hover:border-primary/50">
                        <Info className="h-5 w-5" />
                        En savoir plus sur l'agrément ESUS
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Qu'est-ce qu'une Entreprise Solidaire d'Utilité Sociale (ESUS) ?</DialogTitle>
                        <DialogDescription className="text-left space-y-4 pt-4">
                          <p className="text-foreground">
                            L'agrément <strong>Entreprise solidaire d'utilité sociale (ESUS)</strong> a été introduit par 
                            la <strong>loi du 31 juillet 2014 relative à l'économie sociale et solidaire (ESS)</strong>.
                          </p>
                          <p>
                            Cet agrément est délivré aux entreprises qui poursuivent un <strong>objectif d'utilité sociale</strong> comme 
                            finalité principale de leur activité. Il vise à encourager et à soutenir le développement d'un écosystème 
                            favorable aux entreprises œuvrant dans ce secteur.
                          </p>
                          <div className="bg-accent/10 p-4 rounded-lg">
                            <p className="font-semibold mb-2">Critères principaux :</p>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Poursuivre un objectif d'utilité sociale</li>
                              <li>Rechercher une utilité sociale comme objectif principal</li>
                              <li>Politique de rémunération encadrée</li>
                              <li>Titres de capital non négociables sur un marché financier</li>
                            </ul>
                          </div>
                          <p className="text-xs text-muted-foreground italic">
                            Source : Loi n° 2014-856 du 31 juillet 2014 relative à l'économie sociale et solidaire - 
                            Article L. 3332-17-1 du Code du travail
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>

              {/* Charte éthique Climate House */}
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <BookOpen className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Charte éthique Climate House</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    20 principes fondateurs qui guident notre action collective pour le climat
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="gap-2 w-full group-hover:border-primary/50">
                        <BookOpen className="h-5 w-5" />
                        Consulter la charte éthique
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Charte éthique Climate House</DialogTitle>
                        <DialogDescription>
                          Les principes fondateurs qui guident notre action collective
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-6">
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Reconnaissance scientifique</h4>
                          <p className="text-sm">Reconnaître les limites planétaires et l'urgence climatique basées sur des preuves scientifiques solides.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Engagement vers la post-croissance</h4>
                          <p className="text-sm">S'engager à remettre en question et dépasser le modèle de croissance économique, même "verte", au profit d'un modèle soutenable et équitable.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Impact vérifiable</h4>
                          <p className="text-sm">S'assurer que toutes les activités menées sous l'égide de la Climate House ont un impact positif vérifiable sur l'environnement.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Responsabilité médiatique</h4>
                          <p className="text-sm">S'engager à créer de nouveaux récits de société pour promouvoir une consommation responsable et éclairée.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Éducation et formation</h4>
                          <p className="text-sm">S'engager à éduquer et former les membres et le public sur les enjeux écologiques et sociaux de manière approfondie et scientifiquement valide.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Indépendance des médias</h4>
                          <p className="text-sm">Soutenir et promouvoir l'indépendance des médias pour assurer une information objective et non influencée par des intérêts économiques majeurs.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Transparence publicitaire</h4>
                          <p className="text-sm">Refuser les pratiques publicitaires qui encouragent une consommation excessive et non durable.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Démocratie distribuée</h4>
                          <p className="text-sm">Encourager une démocratie plus participative et distribuée pour limiter l'influence des lobbys.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Fiscalité équitable</h4>
                          <p className="text-sm">Promouvoir une redistribution équitable des richesses pour soutenir les transitions écologiques nécessaires.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Coopération économique</h4>
                          <p className="text-sm">Privilégier la coopération sur la compétition, essentielle à la résilience et à l'adaptation des systèmes économiques.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Modèles de réussite alternatifs</h4>
                          <p className="text-sm">Redéfinir les critères de réussite professionnelle et personnelle au-delà de l'argent et du pouvoir.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Innovation pour l'intérêt général</h4>
                          <p className="text-sm">Innover au service de l'intérêt général, en particulier pour protéger la planète et le vivant.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Intégrité et congruence</h4>
                          <p className="text-sm">Agir avec intégrité et congruence, en alignant constamment les actions avec les valeurs prônées.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Gouvernance inclusive</h4>
                          <p className="text-sm">Adopter une gouvernance qui transcende les ego et les intérêts particuliers, ouverte et évolutive pour s'adapter aux besoins du projet.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Optimisme pragmatique</h4>
                          <p className="text-sm">Cultiver un optimisme pragmatique, en se focalisant sur les solutions plutôt que sur les problèmes.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Humilité</h4>
                          <p className="text-sm">Reconnaître notre rôle modeste dans le grand système et s'efforcer de contribuer positivement à notre échelle.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Collaboration sans naïveté</h4>
                          <p className="text-sm">Collaborer avec tous les acteurs de l'écosystème, y compris les grands groupes et les lobbys, tout en restant vigilants et critiques.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Critique constructive</h4>
                          <p className="text-sm">Encourager la critique constructive et le débat ouvert pour améliorer continuellement nos pratiques et approches.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Résilience communautaire</h4>
                          <p className="text-sm">Œuvrer à renforcer la résilience des communautés locales et globales face aux changements climatiques.</p>
                        </div>
                        <div className="bg-accent/10 p-4 rounded-lg">
                          <h4 className="font-bold mb-2 text-foreground">Partage de valeurs</h4>
                          <p className="text-sm">S'engager à un partage équitable et solidaire des valeurs créées, en reconnaissant la contribution de chaque membre à la mission collective.</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </div>

            {/* Les 80 Cofondateurs - Design intégré */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-center mb-10">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                  Les engagements de nos Cofondateurs
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:shadow-strong hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent h-14 flex items-center justify-center">
                    20 000 €
                  </div>
                  <p className="text-sm font-semibold mb-1 h-5">Investissement</p>
                  <p className="text-xs text-muted-foreground h-8 flex items-center justify-center">Pour 2% du capital</p>
                </Card>

                <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:shadow-strong hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent h-14 flex items-center justify-center">
                    20h / an
                  </div>
                  <p className="text-sm font-semibold mb-1 h-5">Engagement temps</p>
                  <p className="text-xs text-muted-foreground h-8 flex items-center justify-center">Pour développer l'écosystème</p>
                </Card>

                <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:shadow-strong hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent h-14 flex items-center justify-center">
                    20 Intro
                  </div>
                  <p className="text-sm font-semibold mb-1 h-5">Réseau partagé</p>
                  <p className="text-xs text-muted-foreground h-8 flex items-center justify-center">Pour accélérer les projets</p>
                </Card>

                <Card className="p-6 text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:shadow-strong hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent h-14 flex items-center justify-center">
                    50%
                  </div>
                  <p className="text-sm font-semibold mb-1 h-5">Plus-value reversée</p>
                  <p className="text-xs text-muted-foreground h-8 flex items-center justify-center">À une association climat</p>
                </Card>
              </div>
            </div>

            {/* Boussole collective - Intégration fluide */}
            <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 rounded-3xl" />
              <div className="relative bg-card/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-accent/10">
                <h4 className="text-xl md:text-2xl font-bold mb-8 text-center">
                  Une boussole collective dans un monde fracturé
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-soft">
                      <CheckCircle className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <p className="text-sm leading-relaxed">
                      Dialogue entre science, entreprise et engagement
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-soft">
                      <UsersIcon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <p className="text-sm leading-relaxed">
                      Tiers de confiance pour coopérations inédites
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 border border-border/50">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-soft">
                      <Zap className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <p className="text-sm leading-relaxed">
                      Caisse de résonance pour l'économie de demain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comité et Équipe côte à côte avec Modales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
              
              {/* Comité Éthique et Stratégique */}
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <UsersIcon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Comité Éthique et Stratégique</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    4 représentants des cofondateurs pour guider les orientations du projet
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="gap-2 w-full group-hover:border-primary/50">
                        <UsersIcon className="h-5 w-5" />
                        Voir les membres du comité
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Comité Éthique et Stratégique</DialogTitle>
                        <DialogDescription>
                          4 représentants des cofondateurs pour guider les orientations du projet
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <Card className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group">
                          <div className="relative mb-4">
                            <Avatar className="h-24 w-24 mx-auto border-2 border-primary">
                              <AvatarFallback className="text-lg font-semibold bg-primary/10">LB</AvatarFallback>
                            </Avatar>
                            <a
                              href="https://fr.linkedin.com/in/lucie-basch-2b163852"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                              aria-label="LinkedIn de Lucie Basch"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </div>
                          <h5 className="font-bold mb-1">Lucie BASCH</h5>
                          <p className="text-xs text-primary font-semibold mb-2">Présidente</p>
                          <p className="text-xs text-muted-foreground mb-3">Too Good To Go</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            <Badge variant="secondary" className="text-xs">Impact Social</Badge>
                            <Badge variant="secondary" className="text-xs">Anti-Gaspillage</Badge>
                            <Badge variant="secondary" className="text-xs">FoodTech</Badge>
                          </div>
                        </Card>

                        <Card className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group">
                          <div className="relative mb-4">
                            <Avatar className="h-24 w-24 mx-auto border-2 border-border">
                              <AvatarFallback className="text-lg font-semibold bg-card">JH</AvatarFallback>
                            </Avatar>
                            <a
                              href="https://www.linkedin.com/in/jack-habra"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                              aria-label="LinkedIn de Jack Habra"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </div>
                          <h5 className="font-bold mb-1">Jack HABRA</h5>
                          <p className="text-xs text-muted-foreground mb-2">Co-fondateur</p>
                          <p className="text-xs text-muted-foreground mb-3">Context</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            <Badge variant="secondary" className="text-xs">Tech</Badge>
                            <Badge variant="secondary" className="text-xs">Innovation</Badge>
                            <Badge variant="secondary" className="text-xs">AdTech</Badge>
                          </div>
                        </Card>

                        <Card className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group">
                          <div className="relative mb-4">
                            <Avatar className="h-24 w-24 mx-auto border-2 border-border">
                              <AvatarFallback className="text-lg font-semibold bg-card">CB</AvatarFallback>
                            </Avatar>
                            <a
                              href="https://linkedin.com/in/claire-bretton"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                              aria-label="LinkedIn de Claire Bretton"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </div>
                          <h5 className="font-bold mb-1">Claire BRETTON</h5>
                          <p className="text-xs text-muted-foreground mb-2">Co-fondatrice</p>
                          <p className="text-xs text-muted-foreground mb-3">Underdog</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            <Badge variant="secondary" className="text-xs">Économie Circulaire</Badge>
                            <Badge variant="secondary" className="text-xs">Reconditionnement</Badge>
                            <Badge variant="secondary" className="text-xs">Impact</Badge>
                          </div>
                        </Card>

                        <Card className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1 group">
                          <div className="relative mb-4">
                            <Avatar className="h-24 w-24 mx-auto border-2 border-border">
                              <AvatarFallback className="text-lg font-semibold bg-card">CA</AvatarFallback>
                            </Avatar>
                            <a
                              href="https://www.linkedin.com/in/clementalteresco"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                              aria-label="LinkedIn de Clément Alteresco"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </div>
                          <h5 className="font-bold mb-1">Clément ALTERESCO</h5>
                          <p className="text-xs text-muted-foreground mb-2">Co-fondateur</p>
                          <p className="text-xs text-muted-foreground mb-3">Morning</p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            <Badge variant="secondary" className="text-xs">Coworking</Badge>
                            <Badge variant="secondary" className="text-xs">Immobilier</Badge>
                            <Badge variant="secondary" className="text-xs">Entrepreneuriat</Badge>
                          </div>
                        </Card>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>

              {/* L'équipe */}
              <Card className="p-8 hover:shadow-strong transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <UsersIcon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">L'équipe</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    13 personnes Climate House qui mettent quotidiennement leur énergie au service du projet
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="gap-2 w-full group-hover:border-primary/50">
                        <UsersIcon className="h-5 w-5" />
                        Voir les membres de l'équipe
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">L'équipe Climate House</DialogTitle>
                        <DialogDescription>
                          13 personnes qui mettent quotidiennement leur énergie au service du projet
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {teamMembers.map((member) => (
                          <div
                            key={member.name}
                            className="flex flex-col items-center text-center group"
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
                            <h4 className="font-bold text-sm mb-1">{member.name}</h4>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Card>
            </div>
          </div>
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

          {/* Pricing and CTA with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto animate-fade-in">
            {/* Image Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong h-full min-h-[400px] lg:min-h-[500px]">
              <img
                src={communityOutdoor}
                alt="Communauté Climate House - Entrepreneurs engagés"
                className="w-full h-full object-cover object-[85%_center] hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-foreground">
                <h4 className="text-2xl font-bold mb-2">Rejoignez la communauté</h4>
                <p className="text-sm text-foreground/80">
                  800+ entrepreneurs engagés qui construisent ensemble une économie durable
                </p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col justify-center p-8 lg:p-12 rounded-3xl bg-card border-2 border-primary/20 shadow-soft h-full">
              <div className="mb-8 text-center lg:text-left">
                <div className="text-5xl lg:text-6xl font-bold mb-3 bg-gradient-hero bg-clip-text text-transparent">
                  192 €
                </div>
                <div className="text-lg text-muted-foreground">HT / an (soit 16 € / mois)</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Accès à toute la programmation de l'ATE.LIER</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Accès à la plateforme et à la communauté Climate House</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">Participation aux événements membres</span>
                </li>
              </ul>
              
              <Button size="lg" className="bg-gradient-hero w-full lg:w-auto">
                Devenir Membre
              </Button>
            </div>
          </div>

          {/* Impact Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16 animate-fade-in">
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">82%</div>
              <p className="text-sm text-muted-foreground">ont rencontré de nouvelles personnes à Climate House</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">45%</div>
              <p className="text-sm text-muted-foreground">n'auraient pas pu les rencontrer autrement</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">73%</div>
              <p className="text-sm text-muted-foreground">ont agrandi leur réseau professionnel</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">57%</div>
              <p className="text-sm text-muted-foreground">ont collaboré sur un projet professionnel</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
