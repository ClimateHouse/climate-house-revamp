import { Card } from "@/components/ui/card";
import { Users, Briefcase, Building2, MapPin, TrendingUp, Lightbulb, Heart, Settings } from "lucide-react";
import ocubeWorkspace from "@/assets/ocube-workspace.jpg";
import ocubeOpenspace from "@/assets/ocube-openspace.jpg";
import ocubeLounge from "@/assets/ocube-lounge.jpg";

const spaces = [
  {
    icon: Users,
    title: "Poste Nomade",
    subtitle: "ESPACES COMMUNS",
    tags: ["Ultra-flexibles", "Accessibles", "Accueillants"],
    description: "Bénéficiez d'un poste à la demande à moindre frais. Sur une grande table, dans un phonebooth ou encore dans un canapé, installez-vous où vous voulez suivant vos envies !",
    colorScheme: 'accent' as const,
    image: ocubeWorkspace,
  },
  {
    icon: Briefcase,
    title: "Poste fixe",
    subtitle: "OPEN SPACE",
    tags: ["Design", "Convivialité", "Lumière naturelle"],
    description: "Installez votre ordinateur et profitez d'un espace baigné par un puit de lumière, avec un éclairage raffiné et une décoration au design soigné.",
    colorScheme: 'accent-light' as const,
    image: ocubeOpenspace,
  },
  {
    icon: Building2,
    title: "Bureaux privés",
    subtitle: "De 4 à 12 postes",
    tags: ["Modulables", "Évolutifs", "Équipés"],
    description: "Nos bureaux privés de 4 à 12 postes permettent à vos équipes de grandir sans changer d'espace tous les 6 mois ! Ils sont modulables et s'adaptent à vos besoins. Vous aurez la sensation d'être dans vos propres locaux ! Les petits + : une télévision et un paperboard dédiés pour travailler dans les meilleures conditions.",
    colorScheme: 'accent-light' as const,
    image: ocubeLounge,
  },
];

const advantages = [
  {
    icon: MapPin,
    title: "Emplacement idéal",
    description: "Ocube est situé dans le quartier prisé des Chartrons, à proximité des transports en commun, des commerces et des restaurants.",
  },
  {
    icon: TrendingUp,
    title: "Productivité",
    description: "Profitez d'un environnement de travail stimulant et de tous les services nécessaires.",
  },
  {
    icon: Lightbulb,
    title: "Inspiration",
    description: "Travaillez dans un lieu atypique et chaleureux, où l'ancien se mêle au moderne.",
  },
  {
    icon: Heart,
    title: "Convivialité",
    description: "Intégrez une communauté de professionnels dynamiques et bienveillants.",
  },
  {
    icon: Settings,
    title: "Flexibilité",
    description: "Choisissez la formule qui vous convient le mieux, du poste de travail en open space au bureau privatif.",
  },
];

export const OcubeSpaces = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos espaces de travail
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des espaces pensés pour tous vos besoins professionnels
          </p>
        </div>

        {/* First two spaces in 2-column grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
          {spaces.slice(0, 2).map((space, index) => {
            const bgColorClass = space.colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
            const textColorClass = space.colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={`${space.title} - ${space.subtitle}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
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
                </div>
              </Card>
            );
          })}
        </div>

        {/* Last space (Bureaux privés) and Advantages side by side */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bureaux privés card */}
          {spaces.slice(2).map((space, index) => {
            const bgColorClass = space.colorScheme === 'accent' ? 'bg-accent/10' : 'bg-accent-light/10';
            const textColorClass = space.colorScheme === 'accent' ? 'text-accent' : 'text-accent-light';

            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={space.image} 
                    alt={`${space.title} - ${space.subtitle}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
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
                </div>
              </Card>
            );
          })}

          {/* Advantages card */}
          <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-soft" style={{ animationDelay: '300ms' }}>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Les avantages du coworking chez Ocube</h3>
              <p className="text-muted-foreground mb-6">Bien plus qu'un espace de travail, une expérience</p>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <advantage.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
