import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, RefreshCw } from "lucide-react";

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
              <span className="text-xs font-medium text-white">The Conduit, Londres</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/30">
              <RefreshCw className="h-3.5 w-3.5 text-white/70" />
              <span className="text-xs font-medium text-white/70">Bordeaux, Lyon, Marseille</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Réconcilier
            <span className="block text-secondary">
              Économie et Écologie
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Plus qu'un lieu, un espace de liens. Accélérez la transformation de votre 
            organisation avec un écosystème unique de 70+ structures engagées, des programmes 
            sur-mesure et une méthodologie éprouvée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 group shadow-lg hover:shadow-xl"
            >
              Découvrir nos offres entreprises
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Organiser un événement
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 justify-center text-sm text-white/80">
            <div>
              <div className="text-3xl font-bold text-white">80</div>
              <div>Cofondateurs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200</div>
              <div>Organisations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">430</div>
              <div>Colocataires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">700</div>
              <div>Événements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">18 000</div>
              <div>Visiteurs en 2025</div>
            </div>
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
