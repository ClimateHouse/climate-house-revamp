import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const parcours = [{
  name: "A la carte",
  target: "Individuel",
  type: "particulier",
  description: "Accès illimité à la programmation",
  included: ["Accès illimité à la programmation", "Accès communauté et Groupe de Travail"],
  excluded: ["Référent Climate House dédié", "2 temps forts collectifs sur mesure"],
  example: "Groupe de Travail \"Finance durable\"",
  link: "/communaute#adhesion-individuelle"
}, {
  name: "À la carte",
  target: "En équipe (≥ 5 personnes)",
  type: "entreprise",
  description: "Programmation illimitée & temps forts",
  included: ["Accès illimité à la programmation", "Accès communauté et Groupe de Travail", "Référent Climate House dédié", "2 temps forts collectifs"],
  excluded: ["4 ateliers sur mesure (½ journée)", "Pack Communication: NL, LinkedIn, site"],
  example: "Master Mind L'appel au vivant"
}, {
  name: "Accélération",
  target: "En équipe (≥ 10 personnes)",
  type: "entreprise",
  description: "1 structure, 1 projet, 6 rencontres",
  included: ["Accès illimité à la programmation", "Accès communauté et Groupe de Travail", "Référent Climate House dédié", "2 temps forts collectifs", "4 ateliers (½ journée)", "Mobilisation des membres de la communauté", "Pack Communication: NL, LinkedIn, site"],
  excluded: [],
  example: "Élaboration feuille de route Économie Circulaire"
}, {
  name: "Alliance",
  target: "Multi-structures (≥ 5 structures)",
  type: "entreprise",
  description: "1 thématique, multi-acteurs",
  included: ["Calibrage thématique avec nos Cofondateurs", "Mobilisation chaine de valeur (concurrents, clients, fournisseurs,...)", "Mobilisation des membres de la communauté", "Ingénierie pédagogique", "Tiers de confiance et affaires publique", "Temps forts collectifs et ateliers (½ journée)", "Diffusion des livrables (Site, NL, Linkedin,...)"],
  excluded: [],
  example: "Alliance sur les politiques d'achat responsable"
}];
export const Parcours = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">4 parcours</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Des formats de rencontres transformantes adaptés à votre feuille de route et à votre niveau d'engagement
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {parcours.map((p, index) => <Card key={p.name} className="p-6 flex flex-col border-2 border-border hover:border-primary hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="min-h-[32px] mb-4 flex gap-2 flex-wrap">
                  <Badge variant={p.type === "particulier" ? "default" : "secondary"}>
                    {p.type === "particulier" ? "Particulier" : "Entreprise"}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 min-h-[32px]">{p.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3 min-h-[40px]">{p.target}</p>
                <p className="text-muted-foreground text-sm mb-6 min-h-[42px]">{p.description}</p>
                
                <div className="space-y-3 mb-6 flex-grow">
                  {p.included.map(item => <div key={item} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{item}</span>
                    </div>)}
                  {p.excluded.map(item => <div key={item} className="flex items-start gap-2 opacity-50">
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>)}
                </div>
                
                <div className="pt-4 border-t border-border mb-6">
                  <p className="text-xs text-muted-foreground mb-1">Exemple :</p>
                  <p className="text-xs font-medium">{p.example}</p>
                </div>
                
                {p.link ? (
                  <Button asChild className="w-full mt-auto" variant="outline">
                    <Link to={p.link}>En savoir plus</Link>
                  </Button>
                ) : (
                  <Button className="w-full mt-auto" variant="outline">
                    En savoir plus
                  </Button>
                )}
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