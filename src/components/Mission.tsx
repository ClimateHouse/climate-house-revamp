import { Card } from "@/components/ui/card";
import { Leaf, Handshake, Rocket, Heart } from "lucide-react";
const pillars = [{
  icon: Leaf,
  title: "La Maison",
  description: "2000 m² au cœur de Paris conçus pour inspirer et coopérer. Un espace vivant d'hospitalité et de liens informels avec 300 postes de travail, 15 salles de réunion et 6 espaces événementiels privatisables."
}, {
  icon: Handshake,
  title: "La Communauté",
  description: "430 colocataires de 70 structures, 80 cofondateurs entrepreneurs et 200 organisations adhérentes. Un réseau unique d'expertise et d'engagement au service de la transition."
}, {
  icon: Rocket,
  title: "L'Ate.lier",
  description: "Le programme de transformation de Climate House. Des rencontres transformantes, une ingénierie pédagogique sur-mesure et une curation de communauté pour accélérer votre transition."
}];
export const Mission = ({ className }: { className?: string }) => {
  return <section id="mission" className={`py-20 bg-gradient-soft ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">3 piliers pour transformer</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Climate House réunit un lieu d'exception, une communauté entreprenante et un 
            programme de transformation unique pour accompagner les organisations vers un 
            modèle économique durable et régénératif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => <Card key={pillar.title} className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border bg-card" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center">
                <pillar.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};