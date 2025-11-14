import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import scientificEventImage from "@/assets/scientific-event-presentation.jpg";

export const ScientificPartnership = () => {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ancrer la science au cœur de l'action
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image à gauche */}
            <div className="relative order-1">
              <div className="overflow-hidden rounded-2xl shadow-strong h-full max-h-[500px]">
                <img
                  src={scientificEventImage}
                  alt="Événement scientifique à la Climate House"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contenu textuel à droite */}
            <div className="space-y-6 order-2">
              <p className="text-lg leading-relaxed text-foreground">
                Parce qu'aucune transformation durable ne peut se construire sans la rigueur du savoir, 
                la Climate House travaille en lien étroit avec le monde scientifique pour éclairer les décisions 
                et nourrir les stratégies de transition.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                Aux côtés de partenaires comme la <span className="font-semibold">Quadrature Climate Foundation</span>, 
                nous faisons le pont entre recherche, économie et action collective, afin de transformer 
                la connaissance climatique en leviers concrets de changement.
              </p>

              {/* Citation */}
              <Card className="bg-card border-primary/20 shadow-soft p-6 mt-6">
                <div className="flex gap-3">
                  <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-base italic text-foreground leading-relaxed mb-3">
                      « La Climate House offre le cadre idéal pour que ces alliances inédites entre scientifiques, 
                      entreprises et acteurs de terrain se créent et prospèrent. »
                    </blockquote>
                    <div className="flex flex-col">
                      <span className="font-semibold text-foreground text-sm">Greg De Temmerman</span>
                      <span className="text-xs text-muted-foreground">Directeur adjoint, Quadrature Climate Foundation</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
