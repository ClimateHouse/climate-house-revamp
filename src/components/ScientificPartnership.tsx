import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ScientificPartnership = () => {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
            Ancrer la science au cœur de l'action
          </h2>

          {/* Layout en deux colonnes : texte à gauche, citation à droite */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Texte explicatif à gauche */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Parce qu'aucune transformation durable ne peut se construire sans la rigueur du savoir, 
                la Climate House travaille en lien étroit avec le monde scientifique pour éclairer les décisions 
                et nourrir les stratégies de transition.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Aux côtés de partenaires comme la <span className="font-semibold text-foreground">Quadrature Climate Foundation</span>, 
                nous faisons le pont entre recherche, économie et action collective, afin de transformer 
                la connaissance climatique en leviers concrets de changement.
              </p>
            </div>

            {/* Citation à droite */}
            <Card className="bg-card border-primary/20 shadow-soft p-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="flex gap-4">
                <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <blockquote className="text-lg italic text-foreground leading-relaxed mb-4">
                    « La Climate House offre le cadre idéal pour que ces alliances inédites entre scientifiques, 
                    entreprises et acteurs de terrain se créent et prospèrent. »
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="font-semibold text-foreground">Greg De Temmerman</span>
                    <span className="text-sm text-muted-foreground">Directeur adjoint, Quadrature Climate Foundation</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
