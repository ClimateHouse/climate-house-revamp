import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ocubeMezzanine from "@/assets/ocube-mezzanine.jpg";

export const ClimateHouseBordeauxHero = () => {
  return (
    <section className="relative py-16 bg-gradient-soft border-b border-border overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left column - Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Bordeaux - Quartier des Chartrons</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
              Travailler autrement,<br />
              <span className="text-primary">
                au cœur des Chartrons
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              Plus qu'un espace de travail, <strong>Ocube Coworking</strong> est un lieu de rencontres et de synergies, au service des projets et des talents qui font battre le cœur de Bordeaux.
            </p>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '250ms' }}>
              Implanté dans un ancien garage réinventé de <strong>600 m²</strong>, Ocube rassemble une communauté d'entrepreneurs, de créatifs et d'équipes engagées, animée par une même envie : entreprendre autrement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button size="lg" asChild>
                <a href="#contact">Devenir colocataire</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/evenement-bordeaux">
                  Organiser un événement
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/atelier">
                  Découvrir l'Ate.lier
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/cofondateurs?sector=BORDEAUX">
                  Découvrir les COFO Bordelais
                </a>
              </Button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={ocubeMezzanine} 
                alt="Espace Ocube Coworking Bordeaux avec mezzanine" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
