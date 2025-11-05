import { Leaf, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
const footerLinks = {
  "La maison": [{
    label: "Devenir résident",
    href: "/climate-house"
  }, {
    label: "Organiser un événement",
    href: "/evenement"
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
    href: "/calendrier"
  }, {
    label: "Devenez adhérents",
    href: "#"
  }],
  "Ressources": [{
    label: "FAQ",
    href: "#"
  }, {
    label: "La communauté recrute",
    href: "https://jobs.makesense.org/fr/s/jobs/all?labels=climate-house-8859"
  }, {
    label: "contact@climate.house",
    href: "mailto:contact@climate.house"
  }, {
    label: "Paris, France",
    href: "#"
  }],
  "Suivez-nous": [{
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/climate-house-ch/?viewAsMember=true",
    icon: "linkedin"
  }, {
    label: "Instagram",
    href: "https://www.instagram.com/climatehouse",
    icon: "instagram"
  }]
};
export const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
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
                {links.map(link => <li key={link.label} className="flex items-center gap-2">
                    {link.icon === "linkedin" && <Linkedin className="h-4 w-4 text-primary-foreground/70" />}
                    {link.icon === "instagram" && <Instagram className="h-4 w-4 text-primary-foreground/70" />}
                    <a href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="/cgu" className="hover:text-primary-foreground transition-colors">
                Conditions générales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};