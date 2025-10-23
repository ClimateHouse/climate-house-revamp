import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
const parcours = [{
  name: "Individuel",
  target: "Individuel",
  description: "Accès illimité à la programmation",
  included: ["Accès communauté, programmation et GT", "Participation aux événements"],
  excluded: ["Temps forts collectifs", "Référent Climate House dédié", "Pack Communication", "Mobilisation ressources communauté"],
  example: "Groupe de Travail \"Finance durable\""
}, {
  name: "À la Carte",
  target: "En équipe (≥ 5 personnes)",
  description: "Programmation illimitée & temps forts",
  included: ["Accès communauté, programmation et GT", "2 temps forts collectifs à la CH", "Référent Climate House dédié", "Mobilisation ressources clés communauté"],
  excluded: ["Pack Communication"],
  example: "Mastermind \"Femmes & Argent\"",
  highlight: true
}, {
  name: "Accélération",
  target: "En équipe (≥ 10 personnes)",
  description: "1 structure, 1 projet, 6 rencontres",
  included: ["Accès communauté, programmation et GT", "2 temps forts collectifs", "Référent Climate House dédié", "Pack Communication complet", "Mobilisation ressources clés", "6 rencontres transformantes (½ journée)"],
  excluded: [],
  example: "Élaboration feuille de route Économie Circulaire"
}, {
  name: "Alliance",
  target: "Multi-structures (≥ 5 structures)",
  description: "1 thématique, multi-acteurs",
  included: ["Accès communauté, programmation et GT", "2 temps forts collectifs", "Référent Climate House dédié", "Pack Communication complet", "Mobilisation ressources clés", "Format groupe de travail collaboratif"],
  excluded: [],
  example: "Alliance sur la mobilité de demain"
}];
export const Parcours = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">4 parcours adhérents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Des parcours complémentaires de rencontres transformantes 
adaptés à vos besoins et à votre niveau d'engagement
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {parcours.map((p, index) => <Card key={p.name} className={`p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in ${p.highlight ? 'border-2 border-primary' : ''}`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                {p.highlight && <Badge className="mb-4 bg-gradient-hero">Recommandé</Badge>}
                
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{p.target}</p>
                <p className="text-muted-foreground text-sm mb-6">{p.description}</p>
                
                <div className="space-y-3 mb-6">
                  {p.included.map(item => <div key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{item}</span>
                    </div>)}
                  {p.excluded.map(item => <div key={item} className="flex items-start gap-2 opacity-50">
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>)}
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1">Exemple :</p>
                  <p className="text-xs font-medium">{p.example}</p>
                </div>
                
                <Button className={`w-full mt-6 ${p.highlight ? 'bg-gradient-hero' : ''}`} variant={p.highlight ? 'default' : 'outline'}>
                  En savoir plus
                </Button>
              </Card>)}
          </div>

          <Card className="p-8 text-center bg-muted/50">
            <p className="text-lg mb-4">
              Vous souhaitez apprendre à nous connaître avant d'adhérer ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                Participer à un événement
              </Button>
              <Button className="bg-gradient-hero">
                Organiser un événement
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
import { Badge } from "@/components/ui/badge";