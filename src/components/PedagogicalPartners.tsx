export const PedagogicalPartners = () => {
  const partners = [
    "Université Paris-Saclay",
    "Impact France",
    "makesense",
    "AXA Climate",
    "Convention des Entreprises pour le Climat",
    "re3en school",
    "TheConduit",
    "C3D",
    "Arbres",
    "Open Lande",
    "Institut de l'Économie Positive",
    "Produrable",
    "Collège de France",
    "Sator"
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Les partenaires pédagogiques de la Climate House
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="text-lg font-bold text-muted-foreground/60 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
