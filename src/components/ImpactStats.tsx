import { Users, Handshake, Lightbulb, Heart, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const impactStats = [
  {
    icon: Handshake,
    value: "82%",
    label: "ont noué de nouvelles relations professionnelles",
    color: "text-primary-dark"
  },
  {
    icon: Users,
    value: "73%",
    label: "ont élargi leur réseau",
    color: "text-accent"
  },
  {
    icon: Heart,
    value: "79%",
    label: "se sentent appartenir à une communauté engagée",
    color: "text-primary-light"
  },
  {
    icon: Lightbulb,
    value: "57%",
    label: "ont collaboré sur un projet professionnel né au sein du lieu",
    color: "text-accent-light"
  },
  {
    icon: Trophy,
    value: "60%",
    label: "déclarent qu'ils n'auraient pas trouvé d'équivalent ailleurs",
    color: "text-primary"
  }
];

export const ImpactStats = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un organisme vivant qui génère ses propres opportunités
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              C'est cette diversité qui fait de la Climate House un véritable collectif qui pense et agit ensemble
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className={`text-5xl font-bold mb-3 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
