import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "En à peine 2 mois ½ on se sent accueilli.e.s, pris.e.s en charge, boosté.e.s. Et en plus, on crée du lien, merci la Maison !",
    author: "Davor SIMAC",
    role: "Cofondateur Aurea Prima"
  },
  {
    quote: "Quel top écosystème effervescent que celui que vous avez créé [...] les rencontres spontanées sont riches et belles",
    author: "Stéphane BOURBIER",
    role: "Founding Partner Asterion Ventures"
  },
  {
    quote: "Merci de nous montrer que la transition peut être sérieuse & joyeuse, scientifique & humaine.",
    author: "Aïna QUEIROZ",
    role: "Conférencière, Autrice et Animatrice du Podcast \"Bioinspi\""
  },
  {
    quote: "[...] C'est un plaisir. Equipe au top. Projets avec du sens qui bourdonnent partout. Encore mieux que ce qu'on imaginait. :)",
    author: "Christian JORGE",
    role: "Founder & CEO, Omie"
  },
  {
    quote: "Vous avez de véritables pépites [...] Nous sommes très heureux de faire partie de ce bel écosystème et sommes impatients de poursuivre des pistes de collaboration",
    author: "Nicolas DESSUS",
    role: "Co-founder - Next"
  },
  {
    quote: "Merci pour votre aide dans le succès de l'événement et plus largement dans le soutien que vous nous apportez depuis le départ.",
    author: "Nicolas DESSUS",
    role: "Cofondateur Join Next"
  },
  {
    quote: "Merci pour les good vibes générales ! On sent que votre team est impliquée et fait des extra miles pour le confort des colocs, ça fait plaisir ! Keep rocking team :)",
    author: "Une Colocataire anonyme",
    role: "Membre de la communauté"
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
