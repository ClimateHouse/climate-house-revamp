export const TrustedBy = () => {
  const corporateClients = [
    "GROUPE SNCF",
    "BPCE",
    "LCL",
    "MAIF",
    "ING",
    "Les Echos",
    "CREDIT COOPERATIF",
    "PARIS",
    "50 PARTNERS"
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Ils nous font confiance
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {corporateClients.map((client, index) => (
              <div
                key={client}
                className="text-lg font-bold text-muted-foreground/60 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">200+</span> organisations adhérentes  •  
              <span className="font-bold text-primary ml-2">70+</span> structures résidentes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
