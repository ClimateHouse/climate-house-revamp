import { Users, Building2, UsersRound, Calendar, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "170",
    label: "Cofondateurs",
  },
  {
    icon: Building2,
    value: "200",
    label: "Adhérents",
  },
  {
    icon: UsersRound,
    value: "430",
    label: "Colocataires",
  },
  {
    icon: Calendar,
    value: "700",
    label: "Événements",
  },
  {
    icon: TrendingUp,
    value: "18 000",
    label: "Visiteurs en 2025",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
