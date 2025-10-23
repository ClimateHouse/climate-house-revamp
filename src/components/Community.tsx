import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community.jpg";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Climate House nous a permis de rencontrer des partenaires clés et d'accélérer notre croissance. L'écosystème est exceptionnel.",
    author: "Marie Dubois",
    role: "CEO, GreenTech Startup",
  },
  {
    quote:
      "Un lieu inspirant où la collaboration prime. Nous avons co-créé plusieurs projets innovants avec d'autres membres.",
    author: "Thomas Martin",
    role: "Directeur Innovation, ONG Environnement",
  },
  {
    quote:
      "La communauté Climate House est unique. Chaque jour apporte de nouvelles opportunités et connexions précieuses.",
    author: "Sophie Bernard",
    role: "Fondatrice, Impact Social",
  },
];

export const Community = () => {
  return (
    <section id="communaute" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">La Communauté</h2>
          <p className="text-xl text-muted-foreground">
            Une communauté de 400 entrepreneurs passionnés, unis par la volonté de
            construire une économie durable. 80 cofondateurs à parité femmes-hommes ont
            mis leurs ressources au service de cette vision collective.
          </p>
        </div>

        {/* Image communauté */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <img
            src={communityImage}
            alt="Membres de la communauté Climate House en réunion"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-strong"
          />
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-soft">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              80
            </div>
            <div className="text-lg font-semibold mb-1">Cofondateurs</div>
            <p className="text-sm text-muted-foreground">
              À parité femmes-hommes, issus de secteurs variés
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-soft">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              70+
            </div>
            <div className="text-lg font-semibold mb-1">Structures</div>
            <p className="text-sm text-muted-foreground">
              Entreprises, ONG, startups et collectifs
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-soft">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              400
            </div>
            <div className="text-lg font-semibold mb-1">Colocataires</div>
            <p className="text-sm text-muted-foreground">
              Entrepreneurs engagés pour le climat
            </p>
          </div>
        </div>

        {/* Témoignages */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Ce que disent nos colocataires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className="p-8 hover:shadow-strong transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline">
            Découvrir tous nos membres
          </Button>
        </div>
      </div>
    </section>
  );
};
