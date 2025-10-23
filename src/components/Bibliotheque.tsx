import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Download, Search } from "lucide-react";
export const Bibliotheque = () => {
  return <section id="bibliotheque" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bibliothèque</h2>
          <p className="text-xl text-muted-foreground">Retrouvez les livrables des missions réalisées avec nos différents adhérents. 
Un espace de partage et de capitalisation des connaissances pour accélérer votre transformation.
        </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-12 text-center bg-gradient-soft">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Espace en construction</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Notre bibliothèque de ressources est en cours de développement. 
              Bientôt disponible : études de cas, méthodologies, guides pratiques et retours d'expérience 
              de nos missions d'accompagnement.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-background rounded-xl">
                <FileText className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Études de cas</h4>
                <p className="text-sm text-muted-foreground">
                  Retours d'expérience détaillés
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <Download className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Méthodologies</h4>
                <p className="text-sm text-muted-foreground">
                  Guides et frameworks éprouvés
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <Search className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Recherche</h4>
                <p className="text-sm text-muted-foreground">
                  Accès rapide aux ressources
                </p>
              </div>
            </div>

            <Button size="lg" className="shadow-md">
              Nous contacter pour plus d'informations
            </Button>
          </Card>
        </div>
      </div>
    </section>;
};