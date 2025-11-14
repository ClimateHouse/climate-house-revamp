import { MapPin, TrendingUp, Lightbulb, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const advantages = [
  {
    icon: MapPin,
    title: "Emplacement idéal",
    description: "Ocube est situé dans le quartier prisé des Chartrons, à proximité des transports en commun, des commerces et des restaurants.",
    colorScheme: 'accent' as const,
  },
  {
    icon: TrendingUp,
    title: "Productivité",
    description: "Profitez d'un environnement de travail stimulant et de tous les services nécessaires.",
    colorScheme: 'accent-light' as const,
  },
  {
    icon: Lightbulb,
    title: "Inspiration",
    description: "Travaillez dans un lieu atypique et chaleureux, où l'ancien se mêle au moderne.",
    colorScheme: 'accent' as const,
  },
  {
    icon: Users,
    title: "Convivialité",
    description: "Intégrez une communauté de professionnels dynamiques et bienveillants.",
    colorScheme: 'accent-light' as const,
  },
  {
    icon: Zap,
    title: "Flexibilité",
    description: "Choisissez la formule qui vous convient le mieux, du poste de travail en open space au bureau privatif.",
    colorScheme: 'accent' as const,
  },
];

export const OcubeAdvantages = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Les avantages du coworking<br />
            <span className="text-primary">chez Ocube</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bien plus qu'un espace de travail, une expérience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const bgColorClass = advantage.colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
            const textColorClass = advantage.colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';

            return (
              <Card
                key={index}
                className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${bgColorClass} flex items-center justify-center mb-4`}>
                  <advantage.icon className={`h-6 w-6 ${textColorClass}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
