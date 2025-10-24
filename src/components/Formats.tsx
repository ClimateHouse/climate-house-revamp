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
  name: "Tables d'Hôtes",
  description: "Dîners intimistes entre leaders"
}];
const themes = [{
  name: "Biodiversité & Océans",
  description: "Préserver les écosystèmes marins et terrestres essentiels",
  color: "bg-blue-500"
}, {
  name: "Agriculture & Alimentation",
  description: "Transformer nos systèmes alimentaires vers la durabilité",
  color: "bg-green-500"
}, {
  name: "Infrastructures & Habitat",
  description: "Construire des espaces de vie résilients et bas-carbone",
  color: "bg-amber-500"
}, {
  name: "Énergies",
  description: "Accélérer la transition vers les énergies renouvelables",
  color: "bg-yellow-500"
}, {
  name: "Finance Responsable",
  description: "Orienter les capitaux vers l'économie durable",
  color: "bg-purple-500"
}, {
  name: "Modèles & Culture",
  description: "Réinventer nos paradigmes économiques et sociétaux",
  color: "bg-pink-500"
}];
export const Formats = () => {
  return <section className="py-20 bg-background">
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
                  subtitle: "Tête",
                  description: "Le partage de connaissances et de théorie"
                }, {
                  title: "HEART",
                  subtitle: "Cœur",
                  description: "L'expression de nos émotions et le rapport à soi, aux autres et au vivant"
                }, {
                  title: "HANDS",
                  subtitle: "Corps",
                  description: "L'expérimentation et la mise en mouvement"
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Thématiques - Colonne de gauche */}
              <div>
                <h3 className="text-2xl font-bold mb-3">6 Thématiques</h3>
                <p className="text-muted-foreground mb-6">
                  Autour des enjeux majeurs de la transition
                </p>
                
                <div className="space-y-3">
                  {themes.map((theme, index) => (
                    <Card key={theme.name} className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
                      animationDelay: `${index * 50}ms`
                    }}>
                      <h4 className="font-bold text-base mb-1">{theme.name}</h4>
                      <p className="text-sm text-muted-foreground">{theme.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Formats - Colonne de droite */}
              <div>
                <h3 className="text-2xl font-bold mb-3">6 Formats</h3>
                <p className="text-muted-foreground mb-6">
                  Pensés par et pour notre communauté d'entrepreneurs
                </p>
                
                <div className="space-y-3">
                  {formats.map((format, index) => (
                    <Card key={format.name} className="p-4 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
                      animationDelay: `${index * 50}ms`
                    }}>
                      <h4 className="font-bold text-base mb-1">{format.name}</h4>
                      <p className="text-sm text-muted-foreground">{format.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};