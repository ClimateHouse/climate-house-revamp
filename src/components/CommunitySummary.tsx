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
import climateHouseSignage from "@/assets/climate-house-signage.jpg";
import communitySpeaker from "@/assets/community-speaker.jpg";
import Autoplay from "embla-carousel-autoplay";

const communityImages = [
  { src: communityImage, alt: "Mur des cofondateurs Climate House - 80 portraits" },
  { src: communityEvent1, alt: "Événement Climate House - Conférence communauté" },
  { src: communityEvent2, alt: "Programme Climate House - Festival Atmosphères" },
  { src: communityEvent3, alt: "Intervention Climate House - Jean-Marc Jancovici et Henri Pellion" },
  { src: communityEvent4, alt: "Présentation Climate House - Atelier collaboratif" },
  { src: communityEvent5, alt: "Équipe Climate House - Rencontre cofondateurs" },
  { src: communityEvent6, alt: "Événement Climate House - Conférence innovation" },
  { src: climateHouseSignage, alt: "Signalétique Climate House - Entrée de la maison" },
  { src: communitySpeaker, alt: "Conférence Climate House - Intervenant lors d'un événement" },
];

export const CommunitySummary = () => {
  return (
    <section id="communaute" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 py-0">La Communauté</h2>
          <p className="text-lg text-muted-foreground">
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
      </div>
    </section>
  );
};
