import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import communityImage from "@/assets/cofondateurs-wall.jpg";
import { Linkedin } from "lucide-react";
const teamMembers = [
  {
    name: "Henri-François MARTIN",
    role: "CO-directeur général",
    image: "",
    linkedin: "https://www.linkedin.com/in/henri-françoismartin/",
    initials: "HM"
  },
  {
    name: "Maika NUTI",
    role: "CO-directrice générale",
    image: "",
    linkedin: "#",
    initials: "MN"
  },
  {
    name: "Valère BRUNET",
    role: "Lead Dynamique Collective",
    image: "",
    linkedin: "#",
    initials: "VB"
  },
  {
    name: "Sixtine VAN DEN BROEK",
    role: "Support Programmation",
    image: "",
    linkedin: "#",
    initials: "SV"
  },
  {
    name: "Manon FAVEROLLE",
    role: "Lead Event",
    image: "",
    linkedin: "#",
    initials: "MF"
  },
  {
    name: "Ulysse PUGNET",
    role: "Support Administratif & Financier",
    image: "",
    linkedin: "#",
    initials: "UP"
  },
  {
    name: "Stéphanie AMPART",
    role: "Lead Programmation",
    image: "",
    linkedin: "#",
    initials: "SA"
  },
  {
    name: "Charlotte OLAGNE",
    role: "Lead Maison",
    image: "",
    linkedin: "#",
    initials: "CO"
  },
  {
    name: "Vincent DE COIGNAC",
    role: "Key Account Manager",
    image: "",
    linkedin: "#",
    initials: "VC"
  },
  {
    name: "Luna RAIX",
    role: "Support event",
    image: "",
    linkedin: "#",
    initials: "LR"
  },
  {
    name: "Elisabeth GUITINE",
    role: "Lead Administratif et Financier",
    image: "",
    linkedin: "#",
    initials: "EG"
  },
  {
    name: "Sarah BANDERLY",
    role: "Lead Communication",
    image: "",
    linkedin: "#",
    initials: "SB"
  },
  {
    name: "Simon OUAKI",
    role: "Support Communication",
    image: "",
    linkedin: "#",
    initials: "SO"
  }
];

export const Community = () => {
  return <section id="communaute" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 py-0">La Communauté</h2>
          <p className="text-xl text-muted-foreground">
            Une communauté de plus de 800 entrepreneurs passionnés, unis par la volonté de
            construire une économie durable. 80 cofondateurs à parité femmes-hommes ont
            mis leurs ressources au service de cette vision collective.
          </p>
        </div>

        {/* Image communauté */}
        <div className="max-w-5xl mx-auto mb-16 animate-scale-in">
          <img src={communityImage} alt="Mur des cofondateurs Climate House - 80 portraits" className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-strong" />
        </div>

        {/* Chiffres clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              80
            </div>
            <div className="text-lg font-semibold mb-1">Cofondateurs</div>
            <p className="text-sm text-muted-foreground">
              À parité femmes-hommes, issus de secteurs variés
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              70+
            </div>
            <div className="text-lg font-semibold mb-1">Structures</div>
            <p className="text-sm text-muted-foreground">
              Entreprises, ONG, startups et collectifs
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-card border border-border">
            <div className="text-5xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              430
            </div>
            <div className="text-lg font-semibold mb-1">Colocataires</div>
            <p className="text-sm text-muted-foreground">
              Entrepreneurs engagés pour le climat
            </p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" variant="outline" asChild>
            <a href="/cofondateurs">Découvrir tous les cofondateurs</a>
          </Button>
        </div>

        {/* Section Équipe */}
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">L'Équipe</h3>
            <p className="text-lg text-muted-foreground">
              13 personnes Climate House qui mettent quotidiennement leur énergie au service du projet
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24 border-2 border-border group-hover:border-primary transition-colors duration-300 shadow-soft">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-lg font-semibold bg-card">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
                <h4 className="font-semibold text-sm mb-1">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};