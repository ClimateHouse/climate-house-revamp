import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import eventPresentation1 from "@/assets/event-presentation-1.jpg";
import eventPresentation2 from "@/assets/event-presentation-2.jpg";
import eventPresentation3 from "@/assets/event-presentation-3.jpg";
import eventPresentation4 from "@/assets/event-presentation-4.jpg";
import eventPresentation5 from "@/assets/event-presentation-5.jpg";
import eventPresentation6 from "@/assets/event-presentation-6.jpg";

const programmationImages = [
  { src: eventPresentation1, alt: "Présentation et discussion à Climate House" },
  { src: eventPresentation2, alt: "Événement communautaire à Climate House" },
  { src: eventPresentation3, alt: "Atelier collaboratif" },
  { src: eventPresentation4, alt: "Espace de coworking Climate House" },
  { src: eventPresentation5, alt: "Conférence et partage d'expérience" },
  { src: eventPresentation6, alt: "Espace de travail collaboratif" },
];
const formats = [{
  name: "Masterminds",
  description: "1 thématique, 1 journée, des visions plurielles",
  details: "Nos Masterminds réunissent des entrepreneurs autour d'une thématique précise pour une journée d'échanges intenses. Chaque session combine des interventions d'experts, des ateliers pratiques et des moments de networking pour favoriser l'émergence de solutions concrètes.",
  duration: "1 journée complète",
  frequency: "Mensuel"
}, {
  name: "Boostcamps",
  description: "½ journée mensuelle sur la posture de leader",
  details: "Les Boostcamps sont des sessions de développement personnel et professionnel dédiées à la posture de leader. À travers des exercices pratiques, des mises en situation et du coaching collectif, développez votre leadership au service de l'impact.",
  duration: "½ journée",
  frequency: "Mensuel"
}, {
  name: "Conversations",
  description: "Échanges approfondis sur des sujets clés",
  details: "Nos Conversations sont des moments privilégiés d'échanges en petit comité. Un format intimiste qui favorise le partage d'expériences authentiques et la création de liens profonds entre entrepreneurs engagés.",
  duration: "2 heures",
  frequency: "Bimensuel"
}, {
  name: "Controverses",
  description: "Débats constructifs sur des enjeux complexes",
  details: "Les Controverses abordent les sujets qui fâchent avec bienveillance et intelligence collective. Un espace de débat où toutes les perspectives sont bienvenues pour enrichir notre compréhension des enjeux de la transition.",
  duration: "2h30",
  frequency: "Trimestriel"
}, {
  name: "Groupes de Travail",
  description: "Projets thématiques avec livrables concrets",
  details: "Les Groupes de Travail sont des projets collaboratifs sur plusieurs mois. Rejoignez une équipe d'entrepreneurs pour créer ensemble des ressources, outils ou initiatives concrètes au service de la transition écologique.",
  duration: "3-6 mois",
  frequency: "Sur projet"
}, {
  name: "Tables d'Hôtes",
  description: "Dîners intimistes entre leaders",
  details: "Les Tables d'Hôtes sont des dîners conviviaux en petit comité. Dans l'intimité de la Climate House, partagez un repas et des conversations inspirantes avec d'autres entrepreneurs engagés.",
  duration: "Soirée",
  frequency: "Mensuel"
}];
const themes = [{
  name: "Biodiversité & Océans",
  description: "Préserver les écosystèmes marins et terrestres essentiels",
  color: "bg-blue-500"
}, {
  name: "Agriculture & Alimentation",
  description: "Transformer nos systèmes alimentaires vers la durabilité",
  color: "bg-green-500"
}, {
  name: "Infrastructures & Habitat",
  description: "Construire des espaces de vie résilients et bas-carbone",
  color: "bg-amber-500"
}, {
  name: "Énergies",
  description: "Accélérer la transition vers les énergies renouvelables",
  color: "bg-yellow-500"
}, {
  name: "Finance Responsable",
  description: "Orienter les capitaux vers l'économie durable",
  color: "bg-purple-500"
}, {
  name: "Modèles & Culture",
  description: "Réinventer nos paradigmes économiques et sociétaux",
  color: "bg-pink-500"
}];
export const Formats = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Formats */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notre programmation</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Pensés par et pour notre communauté d'entrepreneur</p>
            
            {/* 4H Framework */}
            <Card className="p-8 md:p-12 bg-card mb-12">
              <h3 className="text-3xl font-bold text-center mb-12">Notre Approche : Les 4H</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[{
                  title: "HEAD",
                  subtitle: "Tête",
                  description: "Le partage de connaissances et de théorie"
                }, {
                  title: "HEART",
                  subtitle: "Cœur",
                  description: "L'expression de nos émotions et le rapport à soi, aux autres et au vivant"
                }, {
                  title: "HANDS",
                  subtitle: "Corps",
                  description: "L'expérimentation et la mise en mouvement"
                }, {
                  title: "HOUSE",
                  subtitle: "Prendre soin de son réseau",
                  description: "Cultiver son écosystème"
                }].map((h, index) => (
                  <div key={h.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                      H
                    </div>
                    <h4 className="font-bold text-lg mb-2">{h.title}</h4>
                    <p className="text-sm text-primary font-medium mb-2">{h.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{h.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Carrousel d'images */}
            <div className="max-w-5xl mx-auto mb-12">
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
                  {programmationImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-strong">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className={`w-full h-full ${index === 0 ? 'object-cover object-top' : 'object-cover'}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
            
            {/* Introduction aux deux clés de lecture */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 mb-12">
              <h3 className="text-2xl font-bold text-center mb-4">Deux clés de lecture, une même programmation</h3>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                Notre programmation s'articule autour de <span className="font-semibold text-primary">6 thématiques</span> structurantes 
                de la transition écologique et de <span className="font-semibold text-primary">6 formats</span> d'animation 
                complémentaires. Chaque événement croise une thématique et un format pour créer des expériences uniques et engageantes.
              </p>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Thématiques - Colonne de gauche */}
              <div>
                <div className="mb-6">
                  <Badge className="mb-3 bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:bg-blue-500/20">
                    Clé de lecture #1
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">6 Thématiques</h3>
                  <p className="text-muted-foreground">
                    Les enjeux majeurs de la transition écologique
                  </p>
                </div>
                
                <div className="space-y-3">
                  {themes.map((theme, index) => (
                    <Card key={theme.name} className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in border-l-4 border-l-blue-500/50" style={{
                      animationDelay: `${index * 50}ms`
                    }}>
                      <h4 className="font-bold text-base mb-1">{theme.name}</h4>
                      <p className="text-sm text-muted-foreground">{theme.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Formats - Colonne de droite */}
              <div>
                <div className="mb-6">
                  <Badge className="mb-3 bg-green-500/10 text-green-700 dark:text-green-300 hover:bg-green-500/20">
                    Clé de lecture #2
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">6 Formats</h3>
                  <p className="text-muted-foreground">
                    Des expériences variées pensées pour vous
                  </p>
                </div>
                
                <div className="space-y-3">
                  {formats.map((format, index) => (
                    <Dialog key={format.name}>
                      <Card className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in border-l-4 border-l-green-500/50 relative" style={{
                        animationDelay: `${index * 50}ms`
                      }}>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-base mb-1">{format.name}</h4>
                            <p className="text-sm text-muted-foreground">{format.description}</p>
                          </div>
                          <DialogTrigger asChild>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="h-8 w-8 rounded-full hover:bg-primary/10 hover:text-primary flex-shrink-0"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                        </div>
                      </Card>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{format.name}</DialogTitle>
                          <DialogDescription className="text-base pt-2">
                            {format.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 pt-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {format.details}
                          </p>
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <Card className="p-4 bg-primary/5">
                              <p className="text-sm text-muted-foreground mb-1">Durée</p>
                              <p className="font-semibold">{format.duration}</p>
                            </Card>
                            <Card className="p-4 bg-primary/5">
                              <p className="text-sm text-muted-foreground mb-1">Fréquence</p>
                              <p className="font-semibold">{format.frequency}</p>
                            </Card>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
