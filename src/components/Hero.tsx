import { Button } from "@/components/ui/button";
import { MapPin, RefreshCw } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(209,61%,65%)]">
      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">Rue du Caire, Paris</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">Rue Dussoubs, Paris</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">Plantation, Paris</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">Rue Saint Joseph, Bordeaux</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span className="text-xs font-medium text-white">The Conduit, Londres</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
              <RefreshCw className="h-3.5 w-3.5 text-white/70" />
              <span className="text-xs font-medium text-white/70">Annecy, Lyon, Marseille</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Réconcilier
            <span className="block text-secondary">
              Économie et Écologie
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Plus qu'un lieu, La Climate House est un espace de liens. Accélérez la transformation de votre 
            organisation avec un écosystème unique d'entrepreneurs engagés, des programmes 
            sur-mesure et une méthodologie éprouvée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 shadow-lg hover:shadow-xl"
            >
              <a href="/climate-house">Devenir colocataire</a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 shadow-lg hover:shadow-xl"
            >
              <a href="/evenement">Organiser un événement</a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 shadow-lg hover:shadow-xl"
            >
              <a href="/atelier">Découvrir l'Ate.lier</a>
            </Button>
          </div>

          {/* Claim */}
          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl font-light text-white/90 italic tracking-wide">
              Bienvenue à La Maison
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
