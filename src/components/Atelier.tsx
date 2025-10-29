import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import workshopImage from "@/assets/workshop-atelier.jpg";
import speakerOutdoor from "@/assets/speaker-outdoor.jpg";
import eventIndoorSpeaker from "@/assets/event-indoor-speaker.jpg";
import { Users, Building2, Network, CheckCircle, Plus, Minus } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const atelierImages = [
  { src: workshopImage, alt: "Atelier transformant à Climate House avec participation active" },
  { src: speakerOutdoor, alt: "Intervenante lors d'une conférence Climate House en extérieur" },
  { src: eventIndoorSpeaker, alt: "Conférence Climate House - Intervenant devant la communauté" },
];
const offerings = [{
  icon: Users,
  title: "Adhésion individuelle",
  subtitle: "Exploration des collaborateurs",
  description: "Acculturer & engager : Participez à plus de 200 événements par an, accessibles à tous les membres de la communauté. Une programmation annuelle riche autour de 6 thématiques et 10 formats innovants pour explorer, comprendre et agir.",
  features: ["700+ événements par an ouverts à la communauté", "Intégration complète à l'écosystème Climate House", "Approche pédagogique par les 3H : Head, Heart, Hands", "6 axes thématiques : Biodiversité & Océans, Agriculture & Alimentation, Infrastructures & Habitat, Énergies, Finance responsable, Culture & Modèles économiques", "10 formats innovants pour tous les profils"],
  cta: "Découvrir la programmation"
}, {
  icon: Building2,
  title: "Adhésion projet",
  subtitle: "Immersion des projets par équipe",
  description: "Aligner les enjeux et les leviers d'action : Des programmes d'accompagnement sur-mesure adaptés aux besoins de votre équipe RSE/Transformation, avec l'intervention des meilleurs experts de notre communauté pour accélérer votre transition.",
  features: ["Programmes sur-mesure co-construits avec vos équipes", "Intervention d'experts reconnus de la communauté", "Alignement stratégique équipes RSE/Transformation", "Méthodologie 4H éprouvée (Head, Heart, Hands, House)", "Mesure d'impact et livrables concrets", "Accès privilégié à l'écosystème Climate House"],
  cta: "Découvrir nos offres entreprises",
  highlight: true
}, {
  icon: Network,
  title: "Adhésion thématique",
  subtitle: "Coopérer pour transformer son secteur",
  description: "Co-créer des projets structurants : Rejoignez des groupes de travail et alliances entre entreprises pour relever les défis d'une filière ou d'une verticale métier. Ensemble, co-construisez les bonnes pratiques jusqu'à en faire la nouvelle norme de votre secteur.",
  features: ["Alliances stratégiques inter-entreprises", "Co-construction de standards sectoriels", "Transformation systémique à grande échelle", "Projets structurants à fort impact", "Partage d'expériences et de ressources", "Influence collective sur les normes du marché"],
  cta: "Rejoindre une alliance"
}];

const OfferingCard = ({ offering, index }: { offering: typeof offerings[0]; index: number }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      className={`p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in flex flex-col ${offering.highlight ? 'border-2 border-primary' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
        <offering.icon className="h-7 w-7 text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold mb-2 text-left">{offering.title}</h3>
      <p className="text-sm text-primary font-semibold mb-4">{offering.subtitle}</p>
      <p className="text-muted-foreground mb-6">{offering.description}</p>
      
      {showDetails && (
        <ul className="space-y-3 mb-6 animate-fade-in">
          {offering.features.map(feature => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      <div className="flex gap-3 mt-auto">
        <Button 
          className={offering.highlight ? "flex-1 bg-gradient-hero" : "flex-1"} 
          variant={offering.highlight ? "default" : "outline"}
        >
          {offering.cta}
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

export const Atelier = () => {
  return <section id="atelier" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">L'Ate.lier</h2>
          <p className="text-xl text-muted-foreground">Le programme de transformation pour donner aux individus
 et aux organisations les moyens d'agir pour un avenir durable.
        </p>
        </div>

        {/* Carrousel Atelier */}
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
              {atelierImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] md:h-[450px] object-cover object-top rounded-3xl shadow-strong"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-background border-border" />
          </Carousel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {offerings.map((offering, index) => (
            <OfferingCard key={offering.title} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </section>;
};