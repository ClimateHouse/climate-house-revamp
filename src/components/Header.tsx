import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/climate-house-logo-green.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    La Maison
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border shadow-lg">
                    <ul className="grid w-48 gap-1 p-2">
                      <li>
                        <a
                          href="/climate-house"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none mb-1">Paris</div>
                          <p className="text-xs leading-snug text-muted-foreground">
                            39 rue du caire, 75002
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/climate-house-bordeaux"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none mb-1">Bordeaux</div>
                          <p className="text-xs leading-snug text-muted-foreground">
                            55 rue Saint Joseph, 33000
                          </p>
                        </a>
                      </li>
                      <li className="opacity-60 cursor-not-allowed">
                        <div className="block select-none rounded-md p-3 leading-none">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-sm font-medium leading-none">Marseille</span>
                            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Bientôt</Badge>
                          </div>
                          <p className="text-xs leading-snug text-muted-foreground">
                            Prochainement
                          </p>
                        </div>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a href="/atelier" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Ate.lier
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Votre événement
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background border border-border shadow-lg">
                    <ul className="grid w-48 gap-1 p-2">
                      <li>
                        <a
                          href="/evenement"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none mb-1">Paris</div>
                          <p className="text-xs leading-snug text-muted-foreground">
                            39 rue du caire, 75002
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/evenement-bordeaux"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none mb-1">Bordeaux</div>
                          <p className="text-xs leading-snug text-muted-foreground">
                            55 rue Saint Joseph, 33000
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
            <div>
              <div className="text-foreground font-medium py-2 text-sm">La Maison</div>
              <div className="pl-4 flex flex-col gap-2">
                <a href="/climate-house" className="text-foreground hover:text-primary transition-colors py-1.5 text-sm">
                  Paris
                </a>
                <a href="/climate-house-bordeaux" className="text-foreground hover:text-primary transition-colors py-1.5 text-sm">
                  Bordeaux
                </a>
                <div className="flex items-center gap-2 py-1.5 opacity-60">
                  <span className="text-sm">Marseille</span>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">Bientôt</Badge>
                </div>
              </div>
            </div>
            <a href="/atelier" className="text-foreground hover:text-primary transition-colors py-2">
              Ate.lier
            </a>
            <div>
              <div className="text-foreground font-medium py-2 text-sm">Votre événement</div>
              <div className="pl-4 flex flex-col gap-2">
                <a href="/evenement" className="text-foreground hover:text-primary transition-colors py-1.5 text-sm">
                  Paris
                </a>
                <a href="/evenement-bordeaux" className="text-foreground hover:text-primary transition-colors py-1.5 text-sm">
                  Bordeaux
                </a>
              </div>
            </div>
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