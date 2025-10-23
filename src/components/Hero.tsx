import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/rue-du-climat.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Climate House - Rue du Climat à Paris avec l'équipe fondatrice"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Paris, France</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Réconcilier
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Économie et Écologie
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Plus qu'un lieu, un espace de liens. Accélérez la transformation de votre 
            organisation avec un écosystème unique de 70+ structures engagées, des programmes 
            sur-mesure et une méthodologie éprouvée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8 group"
            >
              Découvrir nos offres entreprises
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Organiser un événement
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-primary">70+</div>
              <div>Structures engagées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">400</div>
              <div>Colocataires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">80</div>
              <div>Cofondateurs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
