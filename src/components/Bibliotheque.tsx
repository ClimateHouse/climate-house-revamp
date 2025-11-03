import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Download, Calendar, FileType, Search, X } from "lucide-react";
import { useState, useMemo } from "react";

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
  },
  {
    id: "2",
    title: "Protocole de décarbonation - Réseaux et Téléphonie",
    description: "Synthèse du protocole de décarbonation élaboré par le collectif Achats 2030 pour le secteur des réseaux et téléphonie.",
    category: "Alliance",
    date: "7 octobre 2025",
    fileSize: "2.1 MB",
    tags: ["Décarbonation", "Téléphonie", "Achats 2030"],
    downloadUrl: "/documents/protocole-decarbonation-reseaux-telephonie.pdf"
  },
  {
    id: "3",
    title: "Protocole de décarbonation - Prestations Intellectuelles",
    description: "Synthèse du protocole de décarbonation élaboré par le collectif Achats 2030 pour le secteur des prestations intellectuelles.",
    category: "Alliance",
    date: "7 octobre 2025",
    fileSize: "2.3 MB",
    tags: ["Décarbonation", "Services", "Achats 2030"],
    downloadUrl: "/documents/protocole-decarbonation-prestations-intellectuelles.pdf"
  },
  {
    id: "4",
    title: "Protocole de décarbonation - Moyens de Paiements",
    description: "Synthèse du protocole de décarbonation élaboré par le collectif Achats 2030 pour le secteur des moyens de paiements.",
    category: "Alliance",
    date: "7 octobre 2025",
    fileSize: "2.2 MB",
    tags: ["Décarbonation", "Finance", "Achats 2030"],
    downloadUrl: "/documents/protocole-decarbonation-moyens-paiements.pdf"
  },
  {
    id: "5",
    title: "Mesure d'Impact Sociale et Environnementale 2025",
    description: "Document de référence sur la méthodologie et les résultats de la mesure d'impact sociale et environnementale de Climate House.",
    category: "Groupes de travail",
    date: "2025",
    fileSize: "3.5 MB",
    tags: ["Impact", "Mesure", "RSE", "Environnement"],
    downloadUrl: "/documents/climate-house-mesure-impact-2025.pdf"
  },
  {
    id: "6",
    title: "Mastermind #Argent - Femme et Argent",
    description: "Document de la Mastermind sur le thème Femme et Argent, avec des visions plurielles scientifiques, économiques, sociologiques, artistiques et écologiques.",
    category: "Groupes de travail",
    date: "Novembre 2025",
    fileSize: "2.8 MB",
    tags: ["Mastermind", "Finance", "Femmes", "Égalité"],
    downloadUrl: "/documents/mastermind-femme-argent-11-25.pdf"
  },
  {
    id: "7",
    title: "Boost-Camp #7 - Coopérer",
    description: "Support du Boost-Camp #7 sur la coopération, partie du Parcours Collecta pour entreprendre et apprendre ensemble.",
    category: "Groupes de travail",
    date: "Novembre 2025",
    fileSize: "1.9 MB",
    tags: ["Boost-Camp", "Coopération", "Formation", "Parcours Collecta"],
    downloadUrl: "/documents/boostcamp-cooperer-11-25.pdf"
  }
];

export const Bibliotheque = () => {
  const [selectedCategory, setSelectedCategory] = useState<"Toutes" | "Alliance" | "Groupes de travail">("Toutes");
  const [selectedTheme, setSelectedTheme] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Toutes", "Alliance", "Groupes de travail"] as const;
  
  // Extract all unique themes from tags
  const allThemes = useMemo(() => {
    const themesSet = new Set<string>();
    documents.forEach(doc => {
      doc.tags.forEach(tag => themesSet.add(tag));
    });
    return ["Tous", ...Array.from(themesSet).sort()];
  }, []);

  // Filter documents by category, theme and search query
  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesCategory = selectedCategory === "Toutes" || doc.category === selectedCategory;
      const matchesTheme = selectedTheme === "Tous" || doc.tags.includes(selectedTheme);
      const matchesSearch = searchQuery === "" || 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesTheme && matchesSearch;
    });
  }, [selectedCategory, selectedTheme, searchQuery]);

  const allianceCount = documents.filter(doc => doc.category === "Alliance").length;
  const groupesCount = documents.filter(doc => doc.category === "Groupes de travail").length;

  const hasActiveFilters = selectedCategory !== "Toutes" || selectedTheme !== "Tous" || searchQuery !== "";

  const clearAllFilters = () => {
    setSelectedCategory("Toutes");
    setSelectedTheme("Tous");
    setSearchQuery("");
  };

  return (
    <section id="bibliotheque" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bibliothèque</h1>
          <p className="text-xl text-muted-foreground">
            Retrouvez les livrables des missions réalisées avec nos différents adhérents
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher par titre, description ou thème..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-12 py-6 text-lg"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Filters Section */}
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          {/* Format Filter */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Filtrer par format
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="min-w-[120px]"
                  size="sm"
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

          {/* Theme Filter */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Filtrer par thème
            </h3>
            <div className="flex flex-wrap gap-2">
              {allThemes.map((theme) => (
                <Button
                  key={theme}
                  variant={selectedTheme === theme ? "default" : "outline"}
                  onClick={() => setSelectedTheme(theme)}
                  size="sm"
                >
                  {theme}
                </Button>
              ))}
            </div>
          </div>

          {/* Clear filters button */}
          {hasActiveFilters && (
            <div className="flex justify-center pt-2">
              <Button
                variant="ghost"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-2" />
                Réinitialiser tous les filtres
              </Button>
            </div>
          )}
        </div>

        {/* Documents Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredDocuments.length} {filteredDocuments.length === 1 ? "document trouvé" : "documents trouvés"}
            </p>
          </div>

          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredDocuments.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                  <CardHeader className="flex-grow-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          doc.category === "Alliance" 
                            ? "bg-primary/10 text-primary border-primary/30" 
                            : "bg-accent/10 text-accent border-accent/30"
                        }
                      >
                        {doc.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{doc.title}</CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {doc.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
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
                      className="w-full mt-auto" 
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
              <h3 className="text-xl font-semibold mb-2">Aucun document trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Aucun document ne correspond à vos critères de recherche.
              </p>
              {hasActiveFilters && (
                <Button onClick={clearAllFilters} variant="outline">
                  Réinitialiser les filtres
                </Button>
              )}
            </Card>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <Card className="p-8 md:p-10 bg-gradient-soft border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Faites grandir l'écosystème</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cette bibliothèque est le fruit de notre intelligence collective. Vous souhaitez contribuer avec vos ressources ou co-créer un nouveau format avec la communauté ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="shadow-md w-full sm:w-auto min-w-[200px]">
                Adhérer à la communauté
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm w-full sm:w-auto min-w-[200px]">
                Nous contacter
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};