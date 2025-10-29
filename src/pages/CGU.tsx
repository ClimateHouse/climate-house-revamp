import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const CGU = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-6">Conditions Générales d'Utilisation (CGU)</h1>
          <p className="text-muted-foreground mb-8">Dernière mise à jour : 25 mars 2025</p>
          
          <div className="space-y-8">
            <p>
              L'accès et l'utilisation du site web <a href="https://climate.house" className="text-primary hover:underline">https://climate.house</a> (ci-après le « Site ») impliquent l'acceptation pleine et entière des présentes Conditions Générales d'Utilisation (ci-après les « CGU ») par tout utilisateur (ci-après l'« Utilisateur » ou « vous »). Si vous n'acceptez pas tout ou partie des présentes CGU, veuillez ne pas utiliser le Site.
            </p>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Objet</h2>
              <p>
                Les présentes CGU ont pour objet de définir les modalités d'accès, de navigation et d'utilisation du Site, ainsi que les responsabilités respectives de Climate House et de l'Utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Informations légales</h2>
              <p>
                Le Site est édité par Climate House, société par actions simplifiée (SAS) au capital social de [à compléter si nécessaire], immatriculée au RCS de Paris sous le numéro 928 809 300, dont le siège social est situé au 10 rue de Penthièvre, 75008 Paris, France.
              </p>
              <p className="mt-4">
                <strong>Directeur de la publication :</strong> Maïka Nuti
              </p>
              <p>
                <strong>Contact :</strong> <a href="mailto:hello@climate.house" className="text-primary hover:underline">hello@climate.house</a> – Tél. : <a href="tel:+33757127219" className="text-primary hover:underline">+33 7 57 12 72 19</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Accès au Site</h2>
              <p>
                Le Site est accessible gratuitement, 24h/24 et 7j/7. Cependant, Climate House se réserve le droit, sans préavis, de suspendre l'accès au Site pour des raisons de maintenance, de mise à jour ou pour tout autre motif d'ordre technique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Utilisation du Site</h2>
              <p>L'Utilisateur s'engage à :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ne pas porter atteinte au bon fonctionnement du Site ;</li>
                <li>Ne pas détourner les fonctionnalités du Site à des fins frauduleuses, malveillantes ou illicites ;</li>
                <li>Ne pas introduire de virus, de code malveillant ou tenter d'accéder aux données d'autres utilisateurs ;</li>
                <li>Ne pas porter atteinte aux droits de Climate House ou de tiers, notamment les droits de propriété intellectuelle.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Propriété intellectuelle</h2>
              <p>
                Tous les éléments présents sur le Site (textes, images, vidéos, graphismes, logo, structure, code, etc.) sont protégés par le droit de la propriété intellectuelle et sont la propriété exclusive de Climate House ou de ses partenaires.
              </p>
              <p className="mt-4">
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, de tout ou partie du Site, sans autorisation écrite préalable, est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Données personnelles et cookies</h2>
              <p>
                L'utilisation du Site implique la collecte et le traitement de certaines données personnelles, conformément à notre Politique de Confidentialité et à notre Politique de Cookies. L'Utilisateur est invité à les consulter pour comprendre la nature, la finalité et les modalités de traitement de ses données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Responsabilités</h2>
              <p>
                Climate House s'efforce de fournir sur le Site des informations aussi précises que possible. Toutefois, elle ne saurait garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation du Site et des informations qu'il contient se fait sous la seule responsabilité de l'Utilisateur.
              </p>
              <p className="mt-4">Climate House ne pourra être tenue responsable :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Des dommages directs ou indirects liés à l'accès ou à l'utilisation du Site (perte de données, virus, interruption de service, etc.) ;</li>
                <li>Des éventuelles erreurs ou omissions dans les contenus ;</li>
                <li>Des liens hypertextes vers des sites externes dont elle ne contrôle pas le contenu.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Liens hypertextes</h2>
              <p>
                Le Site peut contenir des liens vers des sites tiers. Climate House n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur politique de confidentialité ou tout dommage lié à leur consultation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modification des CGU</h2>
              <p>
                Climate House se réserve le droit de modifier à tout moment les présentes CGU, sans préavis. Les nouvelles versions seront publiées sur cette page avec la date de mise à jour correspondante. Il est recommandé aux Utilisateurs de consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Loi applicable et juridiction compétente</h2>
              <p>
                Les présentes CGU sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux du ressort de la Cour d'appel de Paris seront seuls compétents.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CGU;
