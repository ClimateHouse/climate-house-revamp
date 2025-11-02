export const Calendrier = () => {
  return (
    <section id="calendrier" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4">Les moments forts à venir</p>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calendrier de la programmation
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold mb-2">Nos prochains événements</h3>
              <p className="text-sm text-muted-foreground">Cliquez sur un événement pour réserver votre place</p>
            </div>
            
            <div className="relative bg-background" style={{ minHeight: "600px" }}>
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
