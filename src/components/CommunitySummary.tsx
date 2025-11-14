import { Button } from "@/components/ui/button";
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
import communityEvent7 from "@/assets/community-event-7.jpg";
import climateHouseSignage from "@/assets/climate-house-signage.jpg";
import communitySpeaker from "@/assets/community-speaker.jpg";
import Autoplay from "embla-carousel-autoplay";

const communityImages = [
  { src: communityImage, alt: "Mur des cofondateurs Climate House - 170 portraits" },
  { src: communityEvent1, alt: "Événement Climate House - Conférence communauté" },
  { src: communityEvent2, alt: "Programme Climate House - Festival Atmosphères" },
  { src: communityEvent3, alt: "Intervention Climate House - Jean-Marc Jancovici et Henri Pellion" },
  { src: communityEvent4, alt: "Présentation Climate House - Atelier collaboratif" },
  { src: communityEvent5, alt: "Équipe Climate House - Rencontre cofondateurs" },
  { src: communityEvent6, alt: "Événement Climate House - Conférence innovation" },
  { src: communityEvent7, alt: "Conférence Climate House - Intervention devant la communauté" },
  { src: climateHouseSignage, alt: "Signalétique Climate House - Entrée de la maison" },
  { src: communitySpeaker, alt: "Conférence Climate House - Intervenant lors d'un événement" },
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
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Cette concentration de compétences et de visions diverses amplifie le potentiel de chaque projet, facilitant l'émergence de solutions durables, le transfert de connaissances spécialisées et l'innovation continue.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nous voulons faire de ce 'toit commun' un épicentre d'actions concrètes et de réflexions, propulsant ainsi les avancées nécessaires pour un avenir durable.
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
