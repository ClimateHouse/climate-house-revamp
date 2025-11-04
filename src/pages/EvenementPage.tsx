import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Presentation, Users, Building2, Quote, CheckCircle2, Sparkles, Coffee } from "lucide-react";
import eventAteliersImage from "@/assets/event-ateliers-conferences.jpg";
import eventSeminairesImage from "@/assets/space-plantation.jpg";
import eventProgrammationImage from "@/assets/event-programmation-sur-mesure-new.jpg";
import traiteurFoodImage from "@/assets/traiteur-food-2.jpg";
import spaceBalroomImage from "@/assets/space-balroom.jpg";
import spaceJardinDiversImage from "@/assets/space-jardin-divers-new.jpg";
import spaceCommunsImage from "@/assets/space-jardin-divers.jpg";
import spaceWaveroomImage from "@/assets/space-waveroom.jpg";
import spacePlantationImage from "@/assets/space-plantation-interior.jpg";

// Types d'événements avec cas d'usage
const eventTypes = [
  {
    icon: Presentation,
    title: "Ateliers & Conférences",
    description: "Notre équipe vous accompagne dans l'organisation de vos conférences et ateliers transformants.",
    features: [
      "Des lieux inspirants et équipements adaptés à l'émulation collective",
      "De 30 à 100 personnes par espace",
      "Équipement audiovisuel professionnel inclus",
      "Ateliers qui éveillent la tête, touchent le cœur et engagent le corps"
    ],
    imagePlaceholder: "event-conference"
  },
  {
    icon: Users,
    title: "Séminaires",
    description: "Des espaces modulables pour vos séminaires d'entreprise, team buildings et journées de cohésion.",
    features: [
      "Extension jusqu'à 400 personnes à Plantation Paris",
      "Salons thématiques pour les rencontres et zones de créativité",
      "Configuration modulable selon vos besoins",
      "Accompagnement personnalisé de nos équipes"
    ],
    imagePlaceholder: "event-seminar"
  },
  {
    icon: Sparkles,
    title: "Programmation sur Mesure",
    description: "Créons ensemble l'événement qui vous ressemble, en parfaite cohérence avec vos valeurs.",
    features: [
      "Co-construction de votre événement avec nos experts",
      "Partenaires engagés pour une alimentation responsable",
      "Formats hybrides : présentiel, digital ou les deux",
      "De l'idée à la réalisation, nous vous accompagnons"
    ],
    imagePlaceholder: "event-custom"
  }
];

// Nos espaces spécifiques
const spaces = [
  {
    name: "La BAL-ROOM",
    capacity: "90 personnes",
    description: "Salle de réception idéale pour conférences ou cocktails",
    imagePlaceholder: "space-balroom",
    image: spaceBalroomImage
  },
  {
    name: "Le JARDIN Divers",
    capacity: "40 personnes",
    description: "Espace modulable parfait pour ateliers ou événements publics",
    imagePlaceholder: "space-jardin",
    image: spaceJardinDiversImage
  },
  {
    name: "Les COMMUNS",
    capacity: "150 personnes",
    description: "Idéal pour des séminaires collaboratifs",
    imagePlaceholder: "space-communs",
    image: spaceCommunsImage
  },
  {
    name: "La WAVE ROOM",
    capacity: "30 personnes",
    description: "Salle de créativité unique avec vue panoramique",
    imagePlaceholder: "space-waveroom",
    image: spaceWaveroomImage
  },
  {
    name: "PLANTATION",
    capacity: "400 personnes",
    description: "Notre nouvelle extension pour vos grands événements",
    imagePlaceholder: "space-plantation",
    image: spacePlantationImage
  }
];

const EvenementPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-accent/10 via-background to-primary/5 border-b border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Événements & Conférences</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
                Votre événement au cœur d'un{" "}
                <span className="text-accent">lieu engagé</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                Organisez vos événements au cœur d'une communauté engagée d'entrepreneurs, scientifiques, ONG et acteurs du changement. Un lieu d'exception pour fédérer, inspirer et agir ensemble pour le climat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <Button size="lg" asChild>
                  <a href="#contact">Contactez-nous</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://discover.matterport.com/space/UxagxBR7SZk" target="_blank" rel="noopener noreferrer">
                    Visite virtuelle 360°
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Types d'Événements */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-20">
                {eventTypes.map((type, index) => (
                  <div 
                    key={type.title} 
                    className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in ${
                      index % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-strong">
                        {index === 0 ? (
                          <img 
                            src={eventAteliersImage} 
                            alt="Ateliers et Conférences à la Climate House" 
                            className="w-full h-full object-cover"
                          />
                        ) : index === 1 ? (
                          <img 
                            src={eventSeminairesImage} 
                            alt="Séminaires à Plantation Paris" 
                            className="w-full h-full object-cover"
                          />
                        ) : index === 2 ? (
                          <img 
                            src={eventProgrammationImage} 
                            alt="Programmation sur Mesure à la Climate House" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                            <div className="text-center p-8">
                              <type.icon className="h-20 w-20 text-accent/40 mx-auto mb-4" />
                              <p className="text-muted-foreground font-semibold">{type.imagePlaceholder}</p>
                              <p className="text-sm text-muted-foreground/60 mt-2">Photo à ajouter</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10">
                        <type.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">{type.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                      <ul className="space-y-3">
                        {type.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" size="lg" asChild>
                        <a href="#contact">En savoir plus</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Espaces */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                  <Building2 className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Trouvez votre espace idéal</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Des salles modulables et équipées pour accueillir de 30 à 400 personnes
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {spaces.map((space, index) => (
                  <Card 
                    key={space.name} 
                    className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-[220px] bg-gradient-to-br from-accent/10 to-primary/10">
                      {space.image ? (
                        <img 
                          src={space.image} 
                          alt={`${space.name} - ${space.description}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-6">
                            <Building2 className="h-16 w-16 text-accent/40 mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground font-semibold">{space.imagePlaceholder}</p>
                            <p className="text-xs text-muted-foreground/60 mt-1">Photo à ajouter</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{space.name}</h3>
                      <p className="text-accent font-semibold mb-3">{space.capacity}</p>
                      <p className="text-muted-foreground text-sm">{space.description}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" asChild>
                  <a href="https://discover.matterport.com/space/UxagxBR7SZk" target="_blank" rel="noopener noreferrer">
                    Visite virtuelle 360°
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section Traiteurs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <div className="inline-flex items-center gap-2 mb-3">
                  <Coffee className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl md:text-3xl font-bold">Nos partenaires traiteurs engagés</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Une alimentation responsable pour vos événements
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Liste des partenaires */}
                <div className="flex flex-wrap gap-x-8 gap-y-5 justify-center md:justify-start">
                  {[
                    "LE RECHO",
                    "NECENSE",
                    "LES MARMITES VOLANTES",
                    "BIMBAMBOUM TRAITEUR",
                    "MEET MY MAMA",
                    "LA BALLE PERDUE",
                    "APPIE",
                    "MÜRE",
                    "CAUSSES"
                  ].map((partner, index) => (
                    <div
                      key={partner}
                      className="text-lg font-bold text-muted-foreground/70 hover:text-accent transition-colors animate-fade-in uppercase"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      {partner}
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="animate-fade-in flex justify-center md:justify-end" style={{ animationDelay: '300ms' }}>
                  <div className="relative h-[250px] w-[350px] rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={traiteurFoodImage} 
                      alt="Cuisine responsable de nos partenaires traiteurs" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Témoignages */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h2>
                <p className="text-lg text-muted-foreground">
                  Découvrez les retours de nos clients
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in">
                  <Quote className="h-10 w-10 text-accent mb-6" />
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "Tout était très doux, efficace et fluide, je n'attends qu'une chose : recommencer une collaboration avec vous !"
                  </p>
                  <div>
                    <div className="font-bold text-lg">Fleur DOUET</div>
                    <div className="text-sm text-muted-foreground">Field Marketing Manager SWEEP</div>
                  </div>
                </Card>

                <Card className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <Quote className="h-10 w-10 text-accent mb-6" />
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "Merci pour votre dispo : Manon était top dans l'accompagnement, Anthony hyper pro et efficace le jour J et le traiteur très bon. Hâte de revenir :)"
                  </p>
                  <div>
                    <div className="font-bold text-lg">Ingrid Vanhée</div>
                    <div className="text-sm text-muted-foreground">Fondatrice Envolées Sauvages</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 bg-gradient-to-br from-accent/5 to-primary/5 text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Prêt à organiser votre événement ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Notre équipe est à votre disposition pour vous accompagner dans l'organisation de votre événement et créer une expérience mémorable à la hauteur de vos ambitions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-strong" asChild>
                    <a href="#contact">Nous contacter</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/calendrier">Voir le calendrier</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EvenementPage;
