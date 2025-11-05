import { Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CommunityHero = () => {
  return (
    <section className="relative py-24 bg-gradient-soft border-b border-border overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-bl-[100px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Un écosystème engagé</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: '100ms' }}>
            La Communauté Climate House :<br />
            <span className="text-primary">
              agir ensemble pour le climat
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            Une communauté de plus de 800 entrepreneurs passionnés, unis par la volonté de
            construire une économie durable. 170 cofondateurs à parité femmes-hommes ont
            mis leurs ressources au service de cette vision collective.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">170 cofondateurs</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">430 colocataires</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">70+ structures</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button size="lg" asChild>
              <a href="/cofondateurs">Découvrir les Cofondateurs</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/colocataires">Découvrir les Colocataires</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
