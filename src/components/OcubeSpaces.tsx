import { Card } from "@/components/ui/card";
import { Users, Briefcase, Lock, Building2 } from "lucide-react";

const spaces = [
  {
    icon: Users,
    title: "Poste Nomade",
    subtitle: "ESPACES COMMUNS",
    tags: ["Ultra-flexibles", "Accessibles", "Accueillants"],
    description: "Bénéficiez d'un poste à la demande à moindre frais. Sur une grande table, dans un phonebooth ou encore dans un canapé, installez-vous où vous voulez suivant vos envies !",
    colorScheme: 'accent' as const,
  },
  {
    icon: Briefcase,
    title: "Poste fixe",
    subtitle: "OPEN SPACE",
    tags: ["Design", "Convivialité", "Lumière naturelle"],
    description: "Installez votre ordinateur et profitez d'un espace baigné par un puit de lumière, avec un éclairage raffiné et une décoration au design soigné.",
    colorScheme: 'accent-light' as const,
  },
  {
    icon: Lock,
    title: "Poste fixe",
    subtitle: "ESPACES PRIVÉS PARTAGÉS",
    tags: ["Calmes", "Collaboratifs", "Inspirants"],
    description: "Nos espaces privés partagés offrent le parfait équilibre entre confidentialité et convivialité. Installez-vous sur un poste fixe dans un bureau fermé, à partager avec quelques coworkers. Un cadre plus calme qu'un open space, propice à la concentration, tout en gardant l'énergie et la convivialité du coworking.",
    colorScheme: 'accent' as const,
  },
  {
    icon: Building2,
    title: "BUREAUX PRIVÉS",
    subtitle: "De 4 à 12 postes",
    tags: ["Modulables", "Évolutifs", "Équipés"],
    description: "Nos bureaux privés de 4 à 12 postes permettent à vos équipes de grandir sans changer d'espace tous les 6 mois ! Ils sont modulables et s'adaptent à vos besoins. Vous aurez la sensation d'être dans vos propres locaux ! Les petits + : une télévision et un paperboard dédiés pour travailler dans les meilleures conditions.",
    colorScheme: 'accent-light' as const,
  },
];

export const OcubeSpaces = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos espaces de travail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des espaces pensés pour tous vos besoins professionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {spaces.map((space, index) => {
            const bgColorClass = space.colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
            const textColorClass = space.colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';

            return (
              <Card
                key={index}
                className="p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${bgColorClass} flex items-center justify-center`}>
                    <space.icon className={`h-7 w-7 ${textColorClass}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{space.title}</h3>
                    <p className={`text-sm font-semibold ${textColorClass} mb-3`}>{space.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {space.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`text-xs px-3 py-1 rounded-full ${bgColorClass} ${textColorClass} font-medium`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {space.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Un accompagnement personnalisé et accueil chaleureux</h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              <strong>Charlotte</strong>, notre Office Manager, est présente au quotidien et toujours avec le sourire, pour vous faciliter la vie et répondre à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
