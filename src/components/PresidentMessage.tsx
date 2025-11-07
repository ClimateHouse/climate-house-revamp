import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ChevronRight, Download } from "lucide-react";
import presidentImage from "@/assets/lucie-basch-president.jpg";

export const PresidentMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const previewText = `Contribuer à la transformation de l'économie française au service de la transition écologique, environnementale et sociale : voilà la mission qui nous anime à La Climate House.

Moins d'un an après la naissance de La Climate House, il nous a semblé essentiel de réaliser notre première mesure d'impact. Pas simplement pour dresser un bilan, mais parce que l'impact est, depuis le premier jour, notre étoile polaire. C'est ce qui guide nos choix, nos projets, nos partenariats. Dans une gouvernance innovante de 80 entrepreneurs actionnaires, et propulsé par un lancement génial, les possibilités sont nombreuses. Nous voulons rester alignés sur notre raison d'être, et rester focus sur notre objectif.

Si je ne devais retenir qu'une seule chose de ce rapport : notre plus grand impact réside dans notre capacité à faire naître des rencontres qui mènent à l'action...`;

  const fullText = `Contribuer à la transformation de l'économie française au service de la transition écologique, environnementale et sociale : voilà la mission qui nous anime à La Climate House.

Moins d'un an après la naissance de La Climate House, il nous a semblé essentiel de réaliser notre première mesure d'impact. Pas simplement pour dresser un bilan, mais parce que l'impact est, depuis le premier jour, notre étoile polaire. C'est ce qui guide nos choix, nos projets, nos partenariats. Dans une gouvernance innovante de 80 entrepreneurs actionnaires, et propulsé par un lancement génial, les possibilités sont nombreuses. Nous voulons rester alignés sur notre raison d'être, et rester focus sur notre objectif.

Si je ne devais retenir qu'une seule chose de ce rapport : notre plus grand impact réside dans notre capacité à faire naître des rencontres qui mènent à l'action.

En réunissant celles et ceux qui agissent, avec des approches et expertises complémentaires, nous créons un cadre pour faire émerger des projets communs et ancrer durablement des dynamiques collectives : Ces expérimentations à la croisée de la recherche scientifique et de l'action de terrain, alliances inattendues entre entrepreneurs, artistes, étudiants et grandes entreprises. Chaque jour, nous voyons combien ces échanges font naître des initiatives plus ambitieuses, systémiques, durables.

Nous en sommes convaincus : la bascule écologique et sociale, dont notre époque a besoin, passe par un renouvellement profond de notre manière de faire collectif. Nous devons réapprendre à faire les uns avec les autres, et non les uns contre les autres. Comprendre que ce n'est pas parce que nous avons raison que l'autre a tort. Décider, avec notre tête et notre raison, mais aussi avec notre cœur, ce qui nous touche, nous émeut, nous dépasse.

C'est en mobilisant notre intelligence, notre sensibilité et notre capacité d'agir que nous avancerons dans la bonne direction. Car la transition ne se joue pas seulement dans les chiffres, les technologies ou les politiques publiques. Elle prend aussi racine dans les lieux du quotidien : les salles où l'on débat, les ateliers où l'on crée, les cuisines où l'on partage un repas, et les récits qu'on transmet. Elle se nourrit d'émotions, d'imaginaires, de moments vécus, qui donnent l'élan d'agir. Ensemble, ici et maintenant.

Nous avons hâte d'intensifier notre impact, d'approfondir nos liens, et de relever ce défi collectif avec celles et ceux qui partagent cette volonté d'agir. Je me réjouis de pouvoir compter sur le leadership incarné de Maika Nuti et le dévouement sans faille de Henri-François Martin, ainsi que sur leur très belle équipe engagée. Merci à toutes celles et ceux qui contribuent à ce projet aussi nourrissant qu'intense et engageant : les colocataires, les adhérents, les cofondateurs, les entreprises qui nous font confiance, et bien sûr les équipes de l'ESSEC et d'Impact Labs pour leur accompagnement dans la construction de ce premier rapport.

Grâce à vous, nous embarquons l'économie dans une transformation profonde, assumée, et déterminée. Nous posons les bases d'une culture commune pour l'impact : exigeante, vivante, collective.`;

  return (
    <>
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Le mot de la Présidente
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Aperçu du texte */}
              <div className="space-y-6 order-2 md:order-1">
                <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                  {previewText}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="group"
                  >
                    Lire le message complet
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group"
                  >
                    <a href="/documents/climate-house-mesure-impact-2025.pdf" download>
                      Télécharger le rapport d'impact
                      <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image de la présidente */}
              <div className="relative order-1 md:order-2">
                <div className="overflow-hidden rounded-2xl shadow-strong h-full max-h-[500px]">
                  <img
                    src={presidentImage}
                    alt="Lucie Basch, Présidente de la Climate House"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xl font-semibold">Lucie Basch</p>
                  <p className="text-muted-foreground">Présidente de la Climate House</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialog pour le texte complet */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Le mot de la Présidente</DialogTitle>
            <DialogDescription className="text-base mt-4">
              Lucie Basch, Présidente de la Climate House
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4 text-foreground leading-relaxed whitespace-pre-line">
            {fullText}
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <p className="font-semibold text-right">Lucie Basch</p>
            <p className="text-muted-foreground text-right">Présidente de la Climate House</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
