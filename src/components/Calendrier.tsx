import { Calendar as CalendarIcon, Sparkles } from "lucide-react";

export const Calendrier = () => {
  return (
    <section id="calendrier" className="py-24 bg-gradient-to-b from-background via-background/50 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Les moments forts à venir</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Calendrier des Événements
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La Climate House c'est plus de 150 événements par an. 
            Rejoignez-nous lors d'espaces collaboratifs pour apprendre et contribuer.
          </p>
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
