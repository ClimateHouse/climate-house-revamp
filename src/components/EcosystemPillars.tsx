import { Briefcase, GraduationCap, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Briefcase,
    title: "On travaille",
    description: "Dans des bureaux et espaces de création partagés, conçus pour favoriser la rencontre et la sérendipité",
    color: "from-primary-dark/10 to-primary-dark/5",
    iconBg: "bg-primary-dark/10",
    iconColor: "text-primary-dark"
  },
  {
    icon: GraduationCap,
    title: "On apprend",
    description: "Grâce à une programmation continue d'événements, de conférences et d'ateliers",
    color: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Rocket,
    title: "On agit",
    description: "En rejoignant des coalitions, des projets collectifs et des initiatives à fort impact",
    color: "from-primary-light/10 to-primary-light/5",
    iconBg: "bg-primary-light/10",
    iconColor: "text-primary-light"
  }
];

export const EcosystemPillars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Un laboratoire d'interdépendance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Entreprises, ONG, chercheurs, artistes, institutions... tous coopèrent chaque jour pour accélérer la transition écologique et sociale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card 
                key={pillar.title}
                className="border-2 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className={`p-8 bg-gradient-to-br ${pillar.color} h-full`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${pillar.iconBg} mb-6`}>
                    <pillar.icon className={`h-8 w-8 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
