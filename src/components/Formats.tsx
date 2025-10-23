import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import eventImage from "@/assets/event-candles.jpg";

const formats = [
  { name: "Masterminds", description: "1 thématique, 1 journée, des visions plurielles" },
  { name: "Boostcamps", description: "½ journée mensuelle sur la posture de leader" },
  { name: "Conversations", description: "Échanges approfondis sur des sujets clés" },
  { name: "Controverses", description: "Débats constructifs sur des enjeux complexes" },
  { name: "Groupes de Travail", description: "Projets thématiques avec livrables concrets" },
  { name: "Meet Up", description: "Rencontres informelles de l'écosystème" },
  { name: "Explos", description: "Explorations de nouveaux territoires" },
  { name: "Tables d'Hôtes", description: "Dîners intimistes entre leaders" },
  { name: "Soirées Festives", description: "Moments de convivialité et célébration" },
  { name: "Visites Immersives", description: "Découvertes terrain inspirantes" }
];

const themes = [
  { name: "Biodiversité & Océans", color: "bg-blue-500" },
  { name: "Agriculture & Alimentation", color: "bg-green-500" },
  { name: "Infrastructures & Habitat", color: "bg-amber-500" },
  { name: "Énergies", color: "bg-yellow-500" },
  { name: "Finance Responsable", color: "bg-purple-500" },
  { name: "Modèles & Culture", color: "bg-pink-500" }
];

export const Formats = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image principale */}
          <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
            <img
              src={eventImage}
              alt="Événement inspirant à Climate House"
              className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-strong"
            />
          </div>

          {/* Formats */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">10 Formats Innovants</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Des formats pensés par et pour notre communauté
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formats.map((format, index) => (
                <Card 
                  key={format.name}
                  className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-bold text-lg mb-2">{format.name}</h3>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Thématiques */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">6 Thématiques</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Autour des enjeux majeurs de la transition
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {themes.map((theme, index) => (
                <Badge 
                  key={theme.name}
                  className="px-6 py-3 text-base font-medium bg-card hover:shadow-soft transition-all border-2 border-primary text-foreground animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {theme.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
