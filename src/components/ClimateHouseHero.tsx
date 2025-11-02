import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ClimateHouseHero = () => {
  return (
    <section className="relative py-32 bg-gradient-hero overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 animate-fade-in">
            <MapPin className="h-5 w-5 text-primary-foreground" />
            <span className="text-primary-foreground font-semibold">2000 m² au cœur de Paris</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Plus qu'un espace de travail :<br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              un écosystème incarné
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Un lieu où chaque mètre carré sert à créer du lien, de l'impact et des opportunités
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="h-5 w-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">600+ membres</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Users className="h-5 w-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">130+ organisations</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
              <a href="#contact">Nous rejoindre</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
              <a href="https://discover.matterport.com/space/UxagxBR7SZk" target="_blank" rel="noopener noreferrer">
                Visite virtuelle 360°
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
