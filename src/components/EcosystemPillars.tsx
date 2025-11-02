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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un laboratoire d'interdépendance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${pillar.iconBg} mb-6 hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className={`h-10 w-10 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
