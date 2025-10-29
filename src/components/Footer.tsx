import { Leaf, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
const footerLinks = {
  "La maison": [{
    label: "Devenir résident",
    href: "#"
  }, {
    label: "Organiser un événement",
    href: "#"
  }, {
    label: "Visite virtuelle",
    href: "https://discover.matterport.com/space/UxagxBR7SZk"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 px-0 py-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Climate House</span>
            </div>
            
            <p className="text-sm text-primary-foreground/70 mt-4">
              Accélérons la transition écologique et sociale ensemble
            </p>
          </div>

          {/* Links */}
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