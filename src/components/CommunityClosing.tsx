import communityOutdoorImage from "@/assets/community-outdoor.jpg";

export const CommunityClosing = () => {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte à gauche */}
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Un modèle entrepreneurial guidé par l'impact, porté par 80 cofondateurs engagés
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Le cœur vibrant du projet : ils mettent leur temps, leur argent et leur réseau au service du Climat
              </p>
            </div>

            {/* Image à droite */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="overflow-hidden rounded-3xl shadow-strong">
                <img
                  src={communityOutdoorImage}
                  alt="La communauté Climate House engagée"
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
