import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/climate-house-logo-green.png";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-secondary backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Climate House - Accélérons la transition" className="h-6 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <a href="/climate-house" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              La Maison
            </a>
            <a href="/atelier" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Ate.lier
            </a>
            <a href="/climate-house#organiser-evenement" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Votre événement
            </a>
            <a href="/communaute" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Communauté
            </a>
            <a href="/bibliotheque" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Bibliothèque
            </a>
            <a 
              href="/atelier#calendrier"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              onClick={(e) => {
                const path = window.location.pathname;
                if (path === '/atelier') {
                  e.preventDefault();
                  const element = document.getElementById('calendrier');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Calendrier
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <Button size="default" className="shadow-md">
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
            <a href="/climate-house" className="text-foreground hover:text-primary transition-colors py-2">
              La Maison
            </a>
            <a href="/atelier" className="text-foreground hover:text-primary transition-colors py-2">
              Ate.lier
            </a>
            <a href="/climate-house#organiser-evenement" className="text-foreground hover:text-primary transition-colors py-2">
              Votre événement
            </a>
            <a href="/communaute" className="text-foreground hover:text-primary transition-colors py-2">
              Communauté
            </a>
            <a href="/bibliotheque" className="text-foreground hover:text-primary transition-colors py-2">
              Bibliothèque
            </a>
            <a 
              href="/atelier#calendrier"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={(e) => {
                const path = window.location.pathname;
                if (path === '/atelier') {
                  e.preventDefault();
                  const element = document.getElementById('calendrier');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Calendrier
            </a>
            <Button className="w-full mt-2">Nous contacter</Button>
          </div>}
      </nav>
    </header>;
};