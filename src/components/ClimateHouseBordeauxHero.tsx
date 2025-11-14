import { MapPin, Users, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ClimateHouseBordeauxHero = () => {
  return (
    <section className="relative py-24 bg-gradient-soft border-b border-border overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Bordeaux - Quartier des Chartrons</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            Votre bureau en plein cœur<br />
            <span className="text-primary">
              des Chartrons
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Niché au cœur du quartier vibrant et historique des Chartrons à Bordeaux, <strong>Ocube Coworking</strong> est un lieu de vie et d'échange, pensé pour favoriser le bien-être et la productivité de ses membres.
          </p>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '250ms' }}>
            Dans cet ancien garage de <strong>600m²</strong> repensé avec charme et originalité, vous découvrirez des espaces dédiés et collectifs conçus pour répondre à tous vos besoins. Que vous soyez freelance, entrepreneur, ou membre d'une équipe, vous trouverez chez Ocube l'environnement idéal pour développer votre activité.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">55 Rue Saint Joseph, 33000 Bordeaux</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:0785855390" className="text-sm font-semibold hover:text-primary transition-colors">07 85 85 53 90</a>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:contact@ocube-coworking.fr" className="text-sm font-semibold hover:text-primary transition-colors">contact@ocube-coworking.fr</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button size="lg" asChild>
              <a href="#contact">Devenir colocataire</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/evenement">
                Organiser un événement
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/atelier">
                Découvrir l'Ate.lier
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
