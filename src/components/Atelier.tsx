import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Network, CheckCircle } from "lucide-react";

const offerings = [
  {
    icon: Users,
    title: "L'Ate.lier Individuel",
    subtitle: "Se transformer",
    description: "Accès illimité à plus de 150 événements par an : Masterminds, Boostcamps, Conversations, Tables d'hôtes et bien plus.",
    features: [
      "Accès à la programmation complète",
      "Participation aux groupes de travail thématiques",
      "Accès à l'écosystème et à la communauté",
      "Networking avec 700+ membres"
    ],
    cta: "Devenir adhérent"
  },
  {
    icon: Building2,
    title: "L'Ate.lier Entreprise",
    subtitle: "Transformer son organisation",
    description: "Programmes sur-mesure pour accompagner la transformation de votre organisation avec l'expertise de notre communauté.",
    features: [
      "Ingénierie pédagogique personnalisée",
      "Intervention d'experts de la communauté",
      "Formats adaptés à vos enjeux",
      "Référent Climate House dédié",
      "Pack communication inclus"
    ],
    cta: "Découvrir l'offre",
    highlight: true
  },
  {
    icon: Network,
    title: "L'Ate.lier Inter-Entreprises",
    subtitle: "Coopérer pour transformer son secteur",
    description: "Alliances stratégiques et groupes de travail collaboratifs entre organisations pour relever les défis collectifs.",
    features: [
      "Co-construction de bonnes pratiques",
      "Création d'alliances sectorielles",
      "Mobilisation de ressources clés",
      "Temps forts collectifs à la CH",
      "Impact à l'échelle de votre industrie"
    ],
    cta: "Créer une alliance"
  }
];

export const Atelier = () => {
  return (
    <section id="atelier" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">L'Ate.lier</h2>
          <p className="text-xl text-muted-foreground">
            Le programme de transformation de Climate House pour donner aux individus 
            et aux organisations les moyens d'agir pour un avenir durable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {offerings.map((offering, index) => (
            <Card
              key={offering.title}
              className={`p-8 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                offering.highlight ? 'border-2 border-primary' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <offering.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{offering.title}</h3>
              <p className="text-sm text-primary font-semibold mb-4">{offering.subtitle}</p>
              <p className="text-muted-foreground mb-6">{offering.description}</p>
              
              <ul className="space-y-3 mb-8">
                {offering.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={offering.highlight ? "w-full bg-gradient-hero" : "w-full"} 
                variant={offering.highlight ? "default" : "outline"}
              >
                {offering.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* 4H Framework */}
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-card">
            <h3 className="text-3xl font-bold text-center mb-12">Notre Approche : Les 4H</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "HEAD", subtitle: "Se former et s'informer", description: "Acquérir les connaissances essentielles" },
                { title: "HEART", subtitle: "Créer du lien", description: "Tisser des relations authentiques" },
                { title: "HANDS", subtitle: "Faire ensemble", description: "Passer à l'action collective" },
                { title: "HOUSE", subtitle: "Prendre soin de son réseau", description: "Cultiver son écosystème" }
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
      </div>
    </section>
  );
};
