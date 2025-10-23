import { Leaf, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
const footerLinks = {
  "La Maison": [{
    label: "Notre Mission",
    href: "#mission"
  }, {
    label: "Nos Espaces",
    href: "#espaces"
  }, {
    label: "La Communauté",
    href: "#communaute"
  }, {
    label: "L'Ate•lier",
    href: "#atelier"
  }],
  "Rejoindre": [{
    label: "Devenir colocataire",
    href: "#"
  }, {
    label: "Organiser un événement",
    href: "#"
  }, {
    label: "Visiter Climate House",
    href: "#"
  }, {
    label: "Partenariats",
    href: "#"
  }],
  "Ressources": [{
    label: "Calendrier des événements",
    href: "#calendrier"
  }, {
    label: "Blog",
    href: "#"
  }, {
    label: "Presse",
    href: "#"
  }, {
    label: "FAQ",
    href: "#"
  }]
};
export const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 px-0 py-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Climate House</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:contact@climate.house" className="hover:text-background">
                  contact@climate.house
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+33 (0)1 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(link => <li key={link.label}>
                    <a href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2024 Climate House. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-background transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};