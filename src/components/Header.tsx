import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/climate-house-logo.png";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Climate House - Accélérons la transition" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#espaces" className="text-foreground hover:text-primary transition-colors">
              La Maison
            </a>
            <a href="#atelier" className="text-foreground hover:text-primary transition-colors">
              L'Ate.lier
            </a>
            <a href="#communaute" className="text-foreground hover:text-primary transition-colors">
              Qui sommes-nous?
            </a>
            <a href="#calendrier" className="text-foreground hover:text-primary transition-colors">
              Calendrier
            </a>
            <a href="#bibliotheque" className="text-foreground hover:text-primary transition-colors">
              Bibliothèque
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button size="lg" className="shadow-md">
              Nous contacter
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in border-t border-border pt-4">
            <a href="#espaces" className="text-foreground hover:text-primary transition-colors py-2">
              La Maison
            </a>
            <a href="#atelier" className="text-foreground hover:text-primary transition-colors py-2">
              L'Ate.lier
            </a>
            <a href="#communaute" className="text-foreground hover:text-primary transition-colors py-2">
              Qui sommes-nous?
            </a>
            <a href="#calendrier" className="text-foreground hover:text-primary transition-colors py-2">
              Calendrier
            </a>
            <a href="#bibliotheque" className="text-foreground hover:text-primary transition-colors py-2">
              Bibliothèque
            </a>
            <Button className="w-full mt-2">Nous contacter</Button>
          </div>}
      </nav>
    </header>;
};