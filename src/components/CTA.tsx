import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
export const CTA = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter */}
          <Card className="p-10 animate-fade-in shadow-strong" style={{
          animationDelay: "200ms"
        }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-2xl font-bold">Restez informé</h3>
                </div>
                <p className="text-muted-foreground">
                  Recevez nos actualités, événements et opportunités de collaboration
                </p>
              </div>
              <div className="flex-1 w-full">
                <form className="flex gap-2">
                  <Input type="email" placeholder="votre@email.com" className="flex-1" />
                  <Button type="submit" className="bg-gradient-hero">
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};