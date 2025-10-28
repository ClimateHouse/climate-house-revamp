import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, FileType } from "lucide-react";
import { useState } from "react";

interface Document {
  id: string;
  title: string;
  description: string;
  category: "Alliance" | "Groupes de travail";
  date: string;
  fileSize: string;
  tags: string[];
  downloadUrl: string;
}

const documents: Document[] = [
  {
    id: "1",
    title: "Protocole de décarbonation - Fret et Transport de Fonds",
    description: "Synthèse du protocole de décarbonation élaboré par le collectif Achats 2030 pour le secteur du fret et transport de fonds.",
    category: "Alliance",
    date: "7 octobre 2025",
    fileSize: "2.4 MB",
    tags: ["Décarbonation", "Transport", "Achats 2030"],
    downloadUrl: "/documents/protocole-decarbonation-fret-transport.pdf"
  }
];

export const Bibliotheque = () => {
  const [selectedCategory, setSelectedCategory] = useState<"Toutes" | "Alliance" | "Groupes de travail">("Toutes");

  const categories = ["Toutes", "Alliance", "Groupes de travail"] as const;
  
  const filteredDocuments = selectedCategory === "Toutes" 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const allianceCount = documents.filter(doc => doc.category === "Alliance").length;
  const groupesCount = documents.filter(doc => doc.category === "Groupes de travail").length;

  return (
    <section id="bibliotheque" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bibliothèque</h1>
          <p className="text-xl text-muted-foreground">
            Retrouvez les livrables des missions réalisées avec nos différents adhérents. 
            Un espace de partage et de capitalisation des connaissances pour accélérer votre transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="min-w-[140px]"
              >
                {category}
                {category === "Alliance" && allianceCount > 0 && (
                  <Badge variant="secondary" className="ml-2">{allianceCount}</Badge>
                )}
                {category === "Groupes de travail" && groupesCount > 0 && (
                  <Badge variant="secondary" className="ml-2">{groupesCount}</Badge>
                )}
                {category === "Toutes" && (
                  <Badge variant="secondary" className="ml-2">{documents.length}</Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{doc.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{doc.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doc.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{doc.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileType className="h-4 w-4" />
                        <span>{doc.fileSize}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      asChild
                    >
                      <a href={doc.downloadUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Télécharger le document
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucun document dans cette catégorie</h3>
              <p className="text-muted-foreground">
                Les documents seront ajoutés prochainement.
              </p>
            </Card>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <Card className="p-8 bg-gradient-soft">
            <h3 className="text-2xl font-bold mb-4">Besoin d'accompagnement ?</h3>
            <p className="text-muted-foreground mb-6">
              Nos experts sont à votre disposition pour vous accompagner dans votre transformation 
              et créer des livrables adaptés à vos enjeux.
            </p>
            <Button size="lg" className="shadow-md">
              Nous contacter
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};