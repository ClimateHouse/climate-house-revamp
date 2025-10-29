import { Linkedin, Instagram } from "lucide-react";
import footerLogo from "@/assets/climate-house-footer-logo.png";
const footerLinks = {
  "La maison": [{
    label: "Devenir résident",
    href: "#"
  }, {
    label: "Organiser un événement",
    href: "#"
  }, {
    label: "Visite virtuelle",
    href: "#"
  }],
  "L'Ate.lier": [{
    label: "Découvrir nos parcours",
    href: "/atelier"
  }, {
    label: "Consulter nos livrables",
    href: "/bibliotheque"
  }, {
    label: "Prochains événements",
    href: "/atelier#calendrier"
  }, {
    label: "Devenez adhérents",
    href: "#"
  }],
  "Ressources": [{
    label: "FAQ",
    href: "#"
  }, {
    label: "contact@climate.house",
    href: "mailto:contact@climate.house"
  }, {
    label: "Paris, France",
    href: "#"
  }]
};
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-end gap-8 md:gap-12 mb-12">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <img src={footerLogo} alt="Climate House" className="h-32 w-auto" />
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
                <h3 className="font-bold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map(link => <li key={link.label}>
                      <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {link.label}
                      </a>
                    </li>)}
                </ul>
              </div>)}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Climate House. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};