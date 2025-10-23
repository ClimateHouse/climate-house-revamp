import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Climate House
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-foreground hover:text-primary transition-colors">
              Notre Mission
            </a>
            <a href="#espaces" className="text-foreground hover:text-primary transition-colors">
              Nos Espaces
            </a>
            <a href="#communaute" className="text-foreground hover:text-primary transition-colors">
              La Communauté
            </a>
            <a href="#calendrier" className="text-foreground hover:text-primary transition-colors">
              Calendrier
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Se connecter</Button>
            <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
              Devenir colocataire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <a href="#mission" className="text-foreground hover:text-primary transition-colors">
              Notre Mission
            </a>
            <a href="#espaces" className="text-foreground hover:text-primary transition-colors">
              Nos Espaces
            </a>
            <a href="#communaute" className="text-foreground hover:text-primary transition-colors">
              La Communauté
            </a>
            <a href="#calendrier" className="text-foreground hover:text-primary transition-colors">
              Calendrier
            </a>
            <Button variant="ghost" className="w-full justify-start">
              Se connecter
            </Button>
            <Button className="bg-gradient-hero w-full">Devenir colocataire</Button>
          </div>
        )}
      </nav>
    </header>
  );
};
