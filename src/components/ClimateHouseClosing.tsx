import communityCandlesImage from "@/assets/community-candles.jpg";

export const ClimateHouseClosing = () => {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                La Climate House ne se visite pas, elle se vit
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Un collectif qui génère ses propres opportunités, se nourrit de ses échanges et fait grandir chacun de ses membres
              </p>
            </div>

            {/* Image à droite */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="overflow-hidden rounded-3xl shadow-strong">
                <img
                  src={communityCandlesImage}
                  alt="La communauté Climate House réunie"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
