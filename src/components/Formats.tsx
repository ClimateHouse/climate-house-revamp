import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import eventImage from "@/assets/event-candles.jpg";
const formats = [{
  name: "Masterminds",
  description: "1 thématique, 1 journée, des visions plurielles"
}, {
  name: "Boostcamps",
  description: "½ journée mensuelle sur la posture de leader"
}, {
  name: "Conversations",
  description: "Échanges approfondis sur des sujets clés"
}, {
  name: "Controverses",
  description: "Débats constructifs sur des enjeux complexes"
}, {
  name: "Groupes de Travail",
  description: "Projets thématiques avec livrables concrets"
}, {
  name: "Meet Up",
  description: "Rencontres informelles de l'écosystème"
}, {
  name: "Explos",
  description: "Explorations de nouveaux territoires"
}, {
  name: "Tables d'Hôtes",
  description: "Dîners intimistes entre leaders"
}, {
  name: "Soirées Festives",
  description: "Moments de convivialité et célébration"
}, {
  name: "Visites Immersives",
  description: "Découvertes terrain inspirantes"
}];
const themes = [{
  name: "Biodiversité & Océans",
  color: "bg-blue-500"
}, {
  name: "Agriculture & Alimentation",
  color: "bg-green-500"
}, {
  name: "Infrastructures & Habitat",
  color: "bg-amber-500"
}, {
  name: "Énergies",
  color: "bg-yellow-500"
}, {
  name: "Finance Responsable",
  color: "bg-purple-500"
}, {
  name: "Modèles & Culture",
  color: "bg-pink-500"
}];
export const Formats = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image principale */}
          <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
            <img src={eventImage} alt="Événement inspirant à Climate House" className="w-full h-[300px] md:h-[450px] object-cover rounded-3xl shadow-strong" />
          </div>

          {/* Formats */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-4">Notre programmation</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Pensés par et pour notre communauté d'entrepreneur</p>
            
            {/* 4H Framework */}
            <Card className="p-8 md:p-12 bg-card mb-12">
              <h3 className="text-3xl font-bold text-center mb-12">Notre Approche : Les 4H</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[{
                  title: "HEAD",
                  subtitle: "Se former et s'informer",
                  description: "Acquérir les connaissances essentielles"
                }, {
                  title: "HEART",
                  subtitle: "Créer du lien",
                  description: "Tisser des relations authentiques"
                }, {
                  title: "HANDS",
                  subtitle: "Faire ensemble",
                  description: "Passer à l'action collective"
                }, {
                  title: "HOUSE",
                  subtitle: "Prendre soin de son réseau",
                  description: "Cultiver son écosystème"
                }].map((h, index) => (
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formats.map((format, index) => <Card key={format.name} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
              animationDelay: `${index * 50}ms`
            }}>
                  <h3 className="font-bold text-lg mb-2">{format.name}</h3>
                  <p className="text-sm text-muted-foreground">{format.description}</p>
                </Card>)}
            </div>
          </div>

          {/* Thématiques */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-4">6 Thématiques</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Autour des enjeux majeurs de la transition
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {themes.map((theme, index) => <Badge key={theme.name} className="px-6 py-3 text-base font-medium bg-card hover:shadow-soft transition-all border-2 border-primary text-foreground animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  {theme.name}
                </Badge>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};