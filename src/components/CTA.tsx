import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Mail } from "lucide-react";
export const CTA = () => {
  return <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Principal */}
          <Card className="p-12 bg-gradient-hero text-primary-foreground mb-8 animate-scale-in shadow-strong">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Accélérez la transition</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">Transformez votre organisation avec la Climate House. Rejoignez 200+ organisations engagées dans la construction de l'économie de demain.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90 group">
                  Découvrir nos offres entreprises
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver une visite
                </Button>
              </div>
            </div>
          </Card>

          {/* Newsletter */}
          <Card className="p-8 animate-fade-in" style={{
          animationDelay: "200ms"
        }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">Restez informé</h3>
                </div>
                <p className="text-muted-foreground">
                  Recevez nos actualités, événements et opportunités de collaboration
                </p>
              </div>
              <div className="flex-1 w-full">
                <form className="flex gap-2">
                  <Input type="email" placeholder="votre@email.com" className="flex-1" />
                  <Button type="submit" className="bg-gradient-hero">
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};