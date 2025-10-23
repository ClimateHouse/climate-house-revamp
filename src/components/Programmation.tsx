import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Sparkles } from "lucide-react";
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

export const Programmation = () => {
  return (
    <section id="calendrier" className="py-24 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto px-4">
        {/* En-tête avec badge */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Les moments forts à venir</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Calendrier de la programmation
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La Climate House c'est plus de 150 événements par an. 
            Rejoignez-nous lors d'espaces collaboratifs pour apprendre et contribuer.
          </p>
        </div>

        {/* Image principale */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <img 
            src={eventImage} 
            alt="Événement inspirant à Climate House" 
            className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-strong" 
          />
        </div>

        {/* Section 4H */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-card">
            <h3 className="text-3xl font-bold text-center mb-12">Notre Approche : Les 4H</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "HEAD",
                  subtitle: "Se former et s'informer",
                  description: "Acquérir les connaissances essentielles"
                },
                {
                  title: "HEART",
                  subtitle: "Créer du lien",
                  description: "Tisser des relations authentiques"
                },
                {
                  title: "HANDS",
                  subtitle: "Faire ensemble",
                  description: "Passer à l'action collective"
                },
                {
                  title: "HOUSE",
                  subtitle: "Prendre soin de son réseau",
                  description: "Cultiver son écosystème"
                }
              ].map((h, index) => (
                <div key={h.title} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                    H
                  </div>
                  <h4 className="font-bold text-lg mb-2">{h.title}</h4>
                  <p className="text-sm text-primary font-medium mb-2">{h.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{h.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Section 2 colonnes : Thématiques et Formats */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonne Thématiques */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-3">6 Thématiques</h3>
                <p className="text-muted-foreground">
                  Autour des enjeux majeurs de la transition
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {themes.map((theme, index) => (
                  <Badge 
                    key={theme.name} 
                    className="px-4 py-2 text-sm font-medium bg-card hover:shadow-soft transition-all border-2 border-primary text-foreground animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {theme.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Colonne Formats */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-3">10 Formats</h3>
                <p className="text-muted-foreground">
                  Pensés par et pour notre communauté d'entrepreneurs
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {formats.map((format, index) => (
                  <Card 
                    key={format.name} 
                    className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <h4 className="font-bold text-base mb-1">{format.name}</h4>
                    <p className="text-xs text-muted-foreground">{format.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lu.ma Calendar Embed */}
        <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Nos prochains événements</h3>
                  <p className="text-sm text-muted-foreground">Cliquez sur un événement pour réserver votre place</p>
                </div>
              </div>
            </div>
            
            <div className="relative bg-background" style={{ minHeight: "600px" }}>
              {/* Lu.ma Calendar Iframe */}
              <iframe
                src="https://luma.com/embed/calendar/cal-x45uxomxwmUEX63/events"
                width="100%"
                height="600"
                frameBorder="0"
                style={{ 
                  border: "none",
                  borderRadius: "0 0 1rem 1rem"
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Calendrier des événements Climate House"
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Vous souhaitez organiser un événement à la Climate House ?
            </p>
            <a 
              href="https://lu.ma/climatehouse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Voir tous nos événements sur Lu.ma
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
