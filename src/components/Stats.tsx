import { Building2, Users, Target, Lightbulb } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "2000 m²",
    label: "d'espace de travail et d'innovation",
  },
  {
    icon: Users,
    value: "400",
    label: "colocataires entrepreneurs",
  },
  {
    icon: Target,
    value: "70+",
    label: "structures engagées",
  },
  {
    icon: Lightbulb,
    value: "5",
    label: "espaces modulables",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-gradient-hero group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
