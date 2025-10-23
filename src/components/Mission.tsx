import { Card } from "@/components/ui/card";
import { Leaf, Handshake, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Transition Écologique",
    description:
      "Nous rassemblons les acteurs du changement pour accélérer la transition vers une économie durable et respectueuse de la planète.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description:
      "Un écosystème où entreprises, ONG, startups et collectifs échangent, innovent et co-créent les solutions de demain.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Un espace propice à l'expérimentation et à l'innovation, où les idées prennent vie et se transforment en projets concrets.",
  },
  {
    icon: Heart,
    title: "Impact Social",
    description:
      "Au-delà de l'environnement, nous œuvrons pour une économie plus juste et inclusive qui bénéficie à toute la société.",
  },
];

export const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Climate House est né de la conviction que la transition écologique et sociale
            nécessite une transformation profonde de notre économie. Nous créons un espace
            où les architectes du changement se rencontrent pour construire ensemble
            l'économie de demain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
