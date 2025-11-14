import { MapPin, Train, Bus, Bike } from "lucide-react";
import { Card } from "@/components/ui/card";

export const OcubeLocation = () => {
  return (
    <section className="py-12 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Localisation */}
            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Localisation</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p className="font-medium">55 rue Saint Joseph</p>
                    <p className="font-medium">33000 Bordeaux</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Accessibilité */}
            <Card className="p-6 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Train className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">Accessibilité</h3>
                  
                  <div className="space-y-3">
                    {/* Tram */}
                    <div className="flex items-start gap-2">
                      <Train className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-xs">
                        <p className="font-semibold text-foreground mb-0.5">Tram C :</p>
                        <p className="text-muted-foreground">Paul Doumer et Camille Godard</p>
                        <p className="font-semibold text-foreground mt-1.5 mb-0.5">Tram B :</p>
                        <p className="text-muted-foreground">Chartrons</p>
                      </div>
                    </div>

                    {/* Bus */}
                    <div className="flex items-start gap-2">
                      <Bus className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-xs">
                        <p className="font-semibold text-foreground mb-0.5">Bus 5 et 15 :</p>
                        <p className="text-muted-foreground">Paul Doumer et Camille Godard</p>
                      </div>
                    </div>

                    {/* Vélo */}
                    <div className="flex items-start gap-2">
                      <Bike className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <div className="text-xs">
                        <p className="text-muted-foreground">Arceaux à vélos à quelques mètres</p>
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
