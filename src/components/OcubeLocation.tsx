import { MapPin, Train, Bus, Bike } from "lucide-react";
import { Card } from "@/components/ui/card";

export const OcubeLocation = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Localisation */}
            <Card className="p-8 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Localisation</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium">55 rue Saint Joseph</p>
                    <p className="font-medium">33000 Bordeaux</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Accessibilité */}
            <Card className="p-8 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Train className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Accessibilité</h3>
                  
                  <div className="space-y-4">
                    {/* Tram */}
                    <div className="flex items-start gap-3">
                      <Train className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground mb-1">Tram C :</p>
                        <p className="text-muted-foreground">Paul Doumer et Camille Godard</p>
                        <p className="font-semibold text-foreground mt-2 mb-1">Tram B :</p>
                        <p className="text-muted-foreground">Chartrons</p>
                      </div>
                    </div>

                    {/* Bus */}
                    <div className="flex items-start gap-3">
                      <Bus className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-semibold text-foreground mb-1">Bus 5 et 15 :</p>
                        <p className="text-muted-foreground">Paul Doumer et Camille Godard</p>
                      </div>
                    </div>

                    {/* Vélo */}
                    <div className="flex items-start gap-3">
                      <Bike className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-muted-foreground">Arceaux à vélos à quelques mètres de l'espace</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
