import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import communityInauguration from "@/assets/community-inauguration-ruban.jpg";
import communityProgramme from "@/assets/community-programme-mural.jpg";
import communityConference from "@/assets/community-conference-atmospheres.jpg";
import communityIntervenant from "@/assets/community-intervenant-micro.jpg";
import communitySignaletique from "@/assets/community-signaletique.jpg";
import communityIntervenante from "@/assets/community-intervenante-public.jpg";
import communityGroupe from "@/assets/community-groupe-terrasse.jpg";
import communitySpeech from "@/assets/community-speech-logo.jpg";

const communityImages: { src: string; alt: string }[] = [
  { src: communityInauguration, alt: "Inauguration Climate House - Cérémonie de coupe de ruban avec la communauté" },
  { src: communityProgramme, alt: "Programme Climate House - Mur d'événements Mastermind et Festival Atmosphères" },
  { src: communityConference, alt: "Conférence Climate House - Festival Atmosphères devant un public engagé" },
  { src: communityIntervenant, alt: "Intervention Climate House - Présentation devant la communauté" },
  { src: communitySignaletique, alt: "Signalétique Climate House - Plaque d'accueil en bois" },
  { src: communityIntervenante, alt: "Conférence Climate House - Intervenante s'adressant au public" },
  { src: communityGroupe, alt: "Équipe Climate House - Rencontre conviviale sur la terrasse" },
  { src: communitySpeech, alt: "Événement Climate House - Échange devant le logo lors de l'inauguration" },
];

export const CommunitySummary = () => {
  return (
    <section id="communaute" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-0">La Mission</h2>
          <p className="text-lg text-muted-foreground">
            Être un carrefour d'échange et de collaboration pour les acteurs de la lutte contre le changement climatique — de l'expert scientifique aux grandes entreprises, en passant par les entrepreneurs innovants et les organisations associatives.
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

        {/* Texte descriptif */}
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cette concentration de compétences et de visions diverses amplifie le potentiel de chaque projet, facilitant l'émergence de solutions durables, le transfert de connaissances spécialisées et l'innovation continue.
          </p>
        </div>

        <div className="text-center mt-12 animate-fade-in flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href="/cofondateurs">Découvrir les Cofondateurs</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/colocataires">Découvrir les Colocataires</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
