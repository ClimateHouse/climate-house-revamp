import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Climate House nous a permis de rencontrer des partenaires clés et d'accélérer notre croissance. L'écosystème est exceptionnel.",
    author: "Marie Dubois",
    role: "CEO, GreenTech Startup"
  },
  {
    quote: "Un lieu inspirant où la collaboration prime. Nous avons co-créé plusieurs projets innovants avec d'autres membres.",
    author: "Thomas Martin",
    role: "Directeur Innovation, ONG Environnement"
  },
  {
    quote: "La communauté Climate House est unique. Chaque jour apporte de nouvelles opportunités et connexions précieuses.",
    author: "Sophie Bernard",
    role: "Fondatrice, Impact Social"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
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
      </div>
    </section>
  );
};
