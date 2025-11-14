import { Wifi, Phone, Clock, Sofa, Shield, Printer, Droplet, Users as UsersIcon, Key, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Wifi,
    title: "Wifi pro dédiée",
  },
  {
    icon: Phone,
    title: "Accès phonebooth",
  },
  {
    icon: Clock,
    title: "Accès 24h/24 7j/7",
  },
  {
    icon: Sofa,
    title: "Espaces détente",
  },
  {
    icon: Shield,
    title: "Alarme télésurveillance",
  },
  {
    icon: Printer,
    title: "Imprimante & scanner",
  },
  {
    icon: Droplet,
    title: "Douche",
  },
  {
    icon: UsersIcon,
    title: "Office manager sur place",
  },
  {
    icon: Key,
    title: "Casier à clés ou code",
  },
  {
    icon: Coffee,
    title: "Café & petit déjeuner",
  },
];

export const OcubeServices = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos services inclus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un environnement complet pensé pour votre productivité et votre bien-être
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-sm font-semibold leading-snug">
                  {service.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
