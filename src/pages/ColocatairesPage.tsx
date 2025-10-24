import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink } from "lucide-react";

const colocataires = [
  {
    name: "Sustainable One",
    company: "Sustainable One",
    sector: "Conseil RSE",
    website: "https://www.sustainable.one",
    description: "Aider les entreprises à réaliser leur transition vers un nouveau cadre de création de valeur compatible avec une contribution nette positive ou régénératrice.",
    product: "Le Value Office"
  },
  {
    name: "V Comme Vanille",
    company: "V Comme Vanille",
    sector: "Alimentation",
    website: "https://www.vcommevanille.com/",
    description: "V comme Vanille vous emmène sur les routes de la vanille originelle, riche de saveurs, de traditions et de savoir-faire ancestraux.",
    product: "La Pompona (Beni, Bolivie)"
  },
  {
    name: "Rainforest Alliance",
    company: "Rainforest Alliance",
    sector: "ONG Environnement",
    website: "https://www.rainforest-alliance.org/",
    description: "Accompagner les entreprises dans la réduction de leurs impacts environnementaux et sociaux.",
    product: "Certification et programmes d'accompagnement"
  },
  {
    name: "Fronterra (Ama Pacha)",
    company: "Fronterra",
    sector: "Conservation",
    website: "https://fronterra.eco",
    description: "Développement de projets à impact social à travers la restauration de la nature, l'agroforesterie et la conservation de la biodiversité en Amérique latine.",
    product: "Parc Sierra del Divisor"
  },
  {
    name: "Green Cash",
    company: "Green Cash",
    sector: "Média",
    website: "https://www.notion.so/Rayonnez-dans-tous-les-m-dias-gr-ce-mon-accompagnement-RP-1f451d09aa768020873ac1cc197852c5",
    description: "Média qui décrypte l'investissement à impact et accompagnement des acteurs de l'impact dans la stratégie de communication & RP.",
    product: "Média Green Cash"
  },
  {
    name: "Origami Groupe",
    company: "Origami Groupe",
    sector: "Finance",
    website: "https://origami-groupe.com/",
    description: "Family office à impact. Conseil en investissement durable.",
    product: "Fonds à impact civilisation"
  },
  {
    name: "Agence Clé",
    company: "Agence Clé",
    sector: "Communication",
    website: "https://www.agencecle.com/",
    description: "Communication engagée.",
    product: "Méthode CLE"
  },
  {
    name: "Sasi Ecosystems",
    company: "Sasi Ecosystems",
    sector: "Tech IA",
    website: "https://pragmaregen.com/",
    description: "Empouvoirer les professionnels pour un usage raisonné, souverain de l'intelligence artificielle au service des problématiques du développement durable.",
    product: "Routeur open source pour tester les connaissances des LLM"
  },
  {
    name: "Terr.a",
    company: "Terr.a",
    sector: "Energie",
    website: "https://www.terr-a.fr/",
    description: "Plateforme de développement et d'investissement dédiée aux projets d'énergie renouvelable en France et en Europe.",
    product: "Installations solaires et éoliennes"
  },
  {
    name: "Weber Utilities Consulting",
    company: "WUC",
    sector: "Conseil Energie",
    website: "https://www.weberutilitiesconsulting.com",
    description: "Accompagnement dans la mise en place et le pilotage de programmes d'efficacité énergétique, de neutralité carbone et de sobriété en eau.",
    product: "Energy Modeling Tool"
  },
  {
    name: "Sustainable Metrics",
    company: "Sustainable Metrics",
    sector: "Conseil RSE",
    website: "https://www.crowe.com/fr/sustainable-metrics",
    description: "Cabinet de conseil spécialisé en stratégie RSE et durabilité. Accompagnement dans la mesure d'impact et la définition de feuille de route climat.",
    product: "Accompagnement stratégie RSE"
  },
  {
    name: "EcoTree",
    company: "EcoTree",
    sector: "Forêt",
    website: "https://ecotree.green/",
    description: "Identifier des écosystèmes naturels dégradés ou menacés, les restaurer et mesurer scientifiquement l'impact sur le climat et la biodiversité.",
    product: "Investissement en forêt et crédits carbone"
  },
  {
    name: "Sustenuto",
    company: "Sustenuto",
    sector: "Conseil RSE",
    website: "https://sustenuto.com/",
    description: "Cabinet belge de conseil stratégique ESG qui aide entreprises et marques à mettre la durabilité au cœur du business.",
    product: "Accompagnement CSRD"
  },
  {
    name: "Marius Renov",
    company: "Marius Renov",
    sector: "Rénovation",
    website: "https://marius-renov.fr/",
    description: "La première plateforme conçue par des MAR pour des MAR. Digitalisation et automatisation pour les Accompagnateurs Rénov.",
    product: "Plateforme Marius"
  },
  {
    name: "Maxwell Advisory",
    company: "Maxwell Advisory",
    sector: "Finance",
    website: "https://maxwelladvisory.eu/home",
    description: "Combler le fossé entre les entreprises en croissance dans les secteurs de l'énergie et de la décarbonation industrielle, et les investisseurs.",
    product: "Conseil financier et stratégique"
  },
  {
    name: "Hector Le Collector",
    company: "Hector Le Collector",
    sector: "Déchets",
    website: "https://hectorlecollector.fr/",
    description: "Transformer les lieux de travail en points de collecte pour les déchets organiques et les transformer en énergie grâce à la méthanisation.",
    product: "Kit Hector le Collector"
  },
  {
    name: "H2B",
    company: "H2B",
    sector: "Certification",
    website: "https://www.h2bservices.com/",
    description: "Spécialiste de l'évaluation de conformité pour le climat, la santé et l'environnement.",
    product: "Services de certification"
  },
  {
    name: "Dero Technologies",
    company: "Dero Technologies",
    sector: "Tech",
    website: "https://www.dero.fr/",
    description: "Plateforme qui répertorie tous les produits de seconde main pour démocratiser la consommation responsable.",
    product: "Plateforme Dero"
  },
  {
    name: "The Climate Tech Observatory",
    company: "The Climate Tech Observatory",
    sector: "Recherche",
    website: "https://www.helloasso.com/associations/the-climate-tech-observatory",
    description: "Association en construction pour l'analyse des technologies énergétiques et climatiques.",
    product: "Observatoire des technologies climat"
  },
  {
    name: "Mouvement Tilt",
    company: "Mouvement Tilt",
    sector: "Formation",
    website: "https://mouvement-tilt.com/",
    description: "Parcours d'accompagnement à la transformation écologique, accessibles gratuitement à tous les acteurs de l'intérêt général.",
    product: "Parcours de formation"
  },
  {
    name: "Le Club 21e Siècle",
    company: "Le Club 21e Siècle",
    sector: "Association",
    website: "https://club21siecle.org/",
    description: "Offrir à la société française une vision positive de la diversité d'origine et renforcer l'égalité des chances.",
    product: "Réseau et plaidoyer"
  },
  {
    name: "The Yield Lab",
    company: "The Yield Lab",
    sector: "Investissement",
    website: "https://www.linkedin.com/company/theyieldlab/",
    description: "Pallier le manque de capitaux et de soutien aux jeunes entreprises de technologies agricoles à l'international.",
    product: "Fonds d'investissement AgTech"
  },
  {
    name: "Beeodiversity",
    company: "Beeodiversity",
    sector: "Biodiversité",
    website: "https://beeodiversity.com/fr/",
    description: "Stratégie et indicateurs biodiversité, monitoring de la pollution et analyse de l'impact environnemental.",
    product: "Programme EVOLVE"
  },
  {
    name: "Veridian",
    company: "Veridian",
    sector: "Energie",
    website: "https://www.veridian-services.com/",
    description: "Accélérer la transition énergétique en mettant en relation les meilleurs techniciens avec les entreprises d'installation solaire et bornes électriques.",
    product: "Marketplace alimentée par IA"
  },
  {
    name: "C3D",
    company: "C3D",
    sector: "Association",
    website: "https://www.cddd.fr/",
    description: "Association réunissant plus de 380 directeurs du développement durable et de la RSE d'entreprises et d'organisations diversifiées.",
    product: "Réseau C3D"
  },
  {
    name: "Roadmate",
    company: "Roadmate",
    sector: "Mobilité",
    website: "https://www.roadmate.io/",
    description: "Solution pour les entreprises désireuses de mettre en place le Forfait Mobilité Durable.",
    product: "Plateforme Roadmate"
  },
  {
    name: "5ème Saison",
    company: "5ème Saison",
    sector: "Conseil",
    website: "https://www.linkedin.com/in/thomas-busuttil-b770688/",
    description: "Cabinet de conseil spécialisé en innovation durable et régénératrice, stratégies et finance à impact.",
    product: "Conseil en innovation régénératrice"
  },
  {
    name: "Hympact",
    company: "Hympact",
    sector: "Tech",
    website: "https://www.hympact.ch/",
    description: "Mise en conformité des entreprises en matière de CSRD grâce à des solutions innovantes basées sur l'IA.",
    product: "Plateforme sans code CSRD"
  },
  {
    name: "Climate Analytics",
    company: "Climate Analytics",
    sector: "Recherche",
    website: "https://climateanalytics.org/about-us/who-we-are",
    description: "Fournir des connaissances scientifiques et analyses pour accélérer l'action climatique et maintenir le réchauffement en dessous de 1,5°C.",
    product: "Données et scénarios climatiques"
  },
  {
    name: "Cerf Vert",
    company: "Cerf Vert",
    sector: "Forêt",
    website: "https://www.cerfvert.org/",
    description: "Rassembler des citoyennes et citoyens pour développer la biodiversité des forêts françaises.",
    product: "Foncière Citoyenne"
  },
  {
    name: "350.org",
    company: "350.org",
    sector: "ONG",
    website: "http://350.org/",
    description: "Campagnes populaires pour démanteler l'influence de l'industrie des combustibles fossiles et renforcer des systèmes propres ancrés dans la justice.",
    product: "Campagnes citoyennes"
  },
  {
    name: "Data For Good",
    company: "Data For Good",
    sector: "Tech",
    website: "https://dataforgood.fr/",
    description: "Communauté de bénévoles de la Tech mettant leurs compétences au profit de problèmes sociaux et environnementaux.",
    product: "Projets data science à impact"
  },
  {
    name: "Climeet",
    company: "Climeet",
    sector: "Événementiel",
    website: "https://climeet.events/",
    description: "Leader français de la mesure et de la réduction des émissions carbone des événements.",
    product: "Plateforme Climeet"
  },
  {
    name: "Post Influence",
    company: "Post Influence",
    sector: "Marketing",
    website: "https://post-influence.com/",
    description: "Conseiller et former pour intégrer l'urgence climatique dans les stratégies de marketing d'influence.",
    product: "Conseil et formation"
  },
  {
    name: "Fertîles",
    company: "Fertîles",
    sector: "Formation",
    website: "https://fertiles.co/",
    description: "École de la coopération engagée pour acquérir les clés de mener des projets collectifs qui contribuent aux changements.",
    product: "Formations en immersion"
  },
  {
    name: "Orygeen",
    company: "Orygeen",
    sector: "Energie",
    website: "http://www.orygeen.eu/",
    description: "Accompagnement des entreprises dans leur transition énergétique en proposant des solutions sur mesure.",
    product: "Solutions d'efficacité énergétique"
  },
  {
    name: "Water Family",
    company: "Water Family",
    sector: "ONG",
    website: "https://waterfamily.org/",
    description: "Agir pour la préservation de l'eau, de notre santé et du vivant grâce à la sensibilisation et l'éducation.",
    product: "Programme Du Flocon à la Vague"
  },
  {
    name: "So Good",
    company: "So Good",
    sector: "Média",
    website: "https://www.sogoodstories.com/",
    description: "Groupe média engagé et indépendant pour mettre en lumière celles et ceux qui œuvrent pour un monde meilleur.",
    product: "Magazine et festival"
  },
  {
    name: "Meliore Foundation",
    company: "Meliore Foundation",
    sector: "Philanthropie",
    website: "https://meliorefoundation.org/",
    description: "Organisation de premier plan dans le domaine de la philanthropie, spécialisée dans le financement de communications stratégiques mondiales.",
    product: "Subventions et programmes"
  },
  {
    name: "Institut du Commerce",
    company: "Institut du Commerce",
    sector: "Association",
    website: "https://institutducommerce.org/page/accueil",
    description: "Faire coopérer distributeurs, industriels et parties prenantes pour créer de la valeur pour le vivant, la société et les entreprises.",
    product: "Plateforme de coopération"
  },
  {
    name: "Carbon Cutter",
    company: "Carbon Cutter",
    sector: "Conseil",
    website: "https://carboncutter.com/",
    description: "Cabinet de conseil spécialisé dans les enjeux de la transition écologique.",
    product: "Conseil en décarbonation"
  },
  {
    name: "Filao Labs",
    company: "Filao Labs",
    sector: "Finance",
    website: "https://filaolabs.eu/",
    description: "Conseil en stratégie, financement et structuration du secteur de la rénovation et de l'adaptation des logements.",
    product: "FIDEO-Banque de la Rénovation"
  },
  {
    name: "ExtraJool",
    company: "ExtraJool",
    sector: "Energie",
    website: "https://www.extrajool.com/",
    description: "Système innovant transformant la chaleur perdue en électricité pour améliorer l'efficience énergétique des industries.",
    product: "Système de récupération de chaleur"
  },
  {
    name: "Soqo",
    company: "Soqo",
    sector: "Conseil",
    website: "https://www.soqo.fr/",
    description: "Société à mission spécialisée dans la création de partenariats entre entreprises et associations.",
    product: "Projets à impact positif"
  },
  {
    name: "3point5",
    company: "3point5",
    sector: "Mode",
    website: "https://3point5.earth",
    description: "Faire de l'écologie une priorité universelle grâce au pouvoir du vêtement revalorisé.",
    product: "Vêtements customisés"
  },
  {
    name: "Ogni Bene",
    company: "Ogni Bene",
    sector: "Luxe",
    website: "https://www.linkedin.com/company/ognibene/about/",
    description: "Écosystème d'experts dédié à l'approvisionnement durable dans les domaines de la parfumerie, gastronomie et voyage.",
    product: "Matières premières d'exception"
  },
  {
    name: "Sistech",
    company: "Sistech",
    sector: "Formation",
    website: "https://sis.tech/france/",
    description: "Soutien à l'émancipation professionnelle des femmes réfugiées dans les métiers de la tech et du numérique.",
    product: "Programme de formation"
  },
  {
    name: "Imfusio",
    company: "Imfusio",
    sector: "Conseil",
    website: "https://imfusio.com/fr",
    description: "Amplifier les dynamiques de transformation grâce à un accompagnement sur mesure maillant conseil, facilitation, formation et coaching.",
    product: "Accompagnement transformation"
  },
  {
    name: "Ashoka",
    company: "Ashoka",
    sector: "ONG",
    website: "https://www.ashoka.org/fr-fr",
    description: "7ème ONG la plus influente au monde. Vision d'un monde où nous sommes tous acteurs de changement en faveur de l'intérêt général.",
    product: "Réseau d'entrepreneurs sociaux"
  },
  {
    name: "Alternoo",
    company: "Alternoo",
    sector: "Alimentation",
    website: "http://alternoo.fr/",
    description: "Approvisionneur et logisticien spécialiste des produits biologiques locaux en filière courte entre producteurs de Normandie et Paris.",
    product: "Logistique bio locale"
  },
  {
    name: "Egregor",
    company: "Egregor",
    sector: "Finance",
    website: "https://www.egregor.net/",
    description: "Association et fonds de dotation qui multiplient la capacité d'agir des meilleurs innovateurs sociaux et environnementaux.",
    product: "Financement à impact"
  },
  {
    name: "Darwin",
    company: "Darwin",
    sector: "Tech",
    website: "https://www.darwindata.ai/",
    description: "Permettre aux consultants et plateformes ESG d'intégrer facilement la biodiversité au sein de leur offre.",
    product: "Stratégie nature"
  },
  {
    name: "Yellow Tucan",
    company: "Yellow Tucan",
    sector: "Alimentation",
    website: "https://www.yellowtucan.com/",
    description: "Cafés de spécialité 100% arabica certifiés agriculture biologique et commerce équitable.",
    product: "Cafés bio équitables"
  },
  {
    name: "Digital4Better",
    company: "Digital4Better",
    sector: "Tech",
    website: "https://digital4better.com/",
    description: "Aider les entreprises à comprendre leur impact environnemental et social en analysant l'empreinte carbone IT et l'accessibilité numérique.",
    product: "Analyse empreinte numérique"
  },
  {
    name: "Asterion",
    company: "Asterion",
    sector: "Investissement",
    website: "https://www.asterionventures.com/",
    description: "Première société de capital-risque structurée pour accompagner les entrepreneurs à impact dès la phase de pré-amorçage.",
    product: "Fonds de capital-risque à impact"
  },
  {
    name: "Talk The Walk",
    company: "Talk The Walk",
    sector: "Conseil",
    website: "https://talkthewalk.fr/",
    description: "Cabinet de conseil à impact qui accompagne les entreprises sur le chemin de la régénération écologique et sociale.",
    product: "Conseil en régénération"
  },
  {
    name: "RMI",
    company: "RMI",
    sector: "ONG",
    website: "https://rmi.org/",
    description: "Transformer les systèmes énergétiques mondiaux grâce à des solutions axées sur le marché, pour un avenir zéro carbone.",
    product: "Solutions énergétiques"
  },
  {
    name: "Regen Studio",
    company: "Regen Studio",
    sector: "Impact",
    website: "https://www.regenstudio.co/",
    description: "Faciliter l'identification, le soutien et le financement d'initiatives à impact écosystémique.",
    product: "Plateforme de régénération"
  },
  {
    name: "Peas'Up",
    company: "Peas'Up",
    sector: "Tech",
    website: "https://www.peasup.fr/",
    description: "La boussole/plateforme en ligne pour faire de votre réduction d'impact un chemin inspirant avec défis et programmes personnalisés.",
    product: "Plateforme d'engagement"
  },
  {
    name: "Association CEC",
    company: "Association CEC",
    sector: "Formation",
    website: "https://cec-impact.org/lassociation-cec/",
    description: "Organiser des parcours de prise de conscience et de transformation pour décideurs économiques.",
    product: "Parcours de transformation"
  },
  {
    name: "Institut CEC",
    company: "Institut CEC",
    sector: "Conseil",
    website: "https://www.institut-cec.com/",
    description: "Sur-mesure et itération continue au service des transformations de modèles économiques à visée régénérative.",
    product: "Accompagnement sur mesure"
  },
  {
    name: "Sustainably",
    company: "Sustainably",
    sector: "Conseil",
    website: "https://sustainably.fr/",
    description: "Accompagnement des dirigeants dans la compréhension des impacts RSE et la mise en place de mesures de soutenabilité.",
    product: "Réseau d'experts RSE"
  },
  {
    name: "Force For Good",
    company: "Force For Good",
    sector: "Communication",
    website: "https://forceforgood.eu/agence/",
    description: "Agence de spécialistes en collecte de fonds et communication dédiée au secteur non profit.",
    product: "The Goodraising Network"
  },
  {
    name: "Ecoefflab",
    company: "Ecoefflab",
    sector: "Conseil",
    website: "https://www.ecoefflab.io/",
    description: "Expert en éco-conception, RSE et achats responsables avec 300 missions réalisées dans divers secteurs.",
    product: "Expertise éco-conception"
  },
  {
    name: "Wipus",
    company: "Wipus",
    sector: "Tech",
    website: "https://www.wipus.com/",
    description: "Aider les organisations à tirer parti des technologies numériques pour avoir un impact réellement positif au service du bien commun.",
    product: "Solutions numériques à impact"
  },
  {
    name: "Coda School",
    company: "Coda School",
    sector: "Formation",
    website: "https://www.coda.school/",
    description: "École d'informatique reconnue par l'État formant des étudiants engagés avec une pédagogie axée sur la sobriété numérique.",
    product: "Formation développeurs"
  },
  {
    name: "Bonne Vie",
    company: "Bonne Vie",
    sector: "Tiers-lieu",
    website: "https://www.bonne-vie.fr/",
    description: "Collectif engagé pour une vie décarbonée. Tiers-lieu avec 14 chambres au bord de l'eau à 1h de Paris.",
    product: "Le Moulin Inattendu"
  },
  {
    name: "Gaia Wellvent",
    company: "Gaia Wellvent",
    sector: "Événementiel",
    website: "https://www.gaiawellvent.com/",
    description: "Agence événementielle spécialisée dans le bien-être des salariés au sein des entreprises.",
    product: "Événements bien-être"
  },
  {
    name: "Join Next",
    company: "Join Next",
    sector: "Formation",
    website: "https://join-next.com/fr/",
    description: "Réconcilier business et durabilité grâce à des masterclasses et discussions pour accélérer la transition environnementale.",
    product: "Programme de formation RSE"
  },
  {
    name: "Daher",
    company: "Daher",
    sector: "Innovation",
    website: "https://virtuallab.login.daher.com/",
    description: "Programme d'Open Innovation pour explorer, connecter, tester, déployer et communiquer les innovations.",
    product: "Imagineering by Daher"
  },
  {
    name: "Tellus AI",
    company: "Tellus AI",
    sector: "Tech IA",
    website: "https://www.tellus-ai.com/",
    description: "Nouvelle génération d'intelligence artificielle pour améliorer la prédiction climatique et réduire l'exposition aux risques.",
    product: "IA climatique"
  },
  {
    name: "Plan Cash",
    company: "Plan Cash",
    sector: "Finance",
    website: "https://www.plancash.fr/",
    description: "Accroître l'indépendance financière des femmes grâce à l'éducation financière et la création d'une communauté solidaire.",
    product: "Formation finance pour femmes"
  },
  {
    name: "We Take Part",
    company: "We Take Part",
    sector: "Finance",
    website: "https://www.wetakepart.com/fr",
    description: "Investir durablement et uniquement dans les entreprises à impact positif sur la planète.",
    product: "Plateforme d'investissement"
  },
  {
    name: "ABC Transition Bas Carbone",
    company: "ABC Transition Bas Carbone",
    sector: "Formation",
    website: "https://abc-transitionbascarbone.fr/",
    description: "Sensibilisation, formation et moyens d'action concrets pour réussir la transition bas carbone depuis 2011.",
    product: "Méthode Bilan Carbone®"
  },
  {
    name: "Sator",
    company: "Sator",
    sector: "Formation",
    website: "https://www.sator.fr/",
    description: "Première plateforme mondiale rassemblant des cours d'excellence, un diplôme, et une communauté intégrée avec suivi du professeur.",
    product: "Plateforme de formation"
  },
  {
    name: "Ressorts",
    company: "Ressorts",
    sector: "Habitat",
    website: "https://ressorts.life/",
    description: "Incubation des projets qui accélèrent la transition de l'habitat avec potentiel de déploiement à grande échelle.",
    product: "Incubateur habitat durable"
  },
  {
    name: "Quota Climat",
    company: "Quota Climat",
    sector: "Association",
    website: "https://www.quotaclimat.org/",
    description: "Interpeller sur la nécessité d'un traitement médiatique à la hauteur de la crise écologique.",
    product: "Observatoire médias climat"
  },
  {
    name: "Prelude",
    company: "Prelude",
    sector: "Affaires Publiques",
    website: "https://prelude-conseil.fr/",
    description: "Cabinet de conseil en affaires publiques qui remet l'humain et l'innovation au centre des stratégies de développement territorial.",
    product: "Conseil en affaires publiques"
  },
  {
    name: "Omie",
    company: "Omie",
    sector: "Alimentation",
    website: "https://www.omie.fr/mission",
    description: "Première marque d'épicerie bio en agriculture régénérative pour régénérer les sols et le vivant.",
    product: "Produits bio régénératifs"
  },
  {
    name: "Apolownia",
    company: "Apolownia",
    sector: "Climat",
    website: "https://www.apolownia.com/",
    description: "Soutien aux entreprises dans des stratégies de décarbonation à long terme en concevant des projets de réduction carbone.",
    product: "Projets de décarbonation"
  },
  {
    name: "Vinculum Finance",
    company: "Vinculum Finance",
    sector: "Finance",
    website: "https://vinculumfinance.com/",
    description: "Aider les fondateurs à développer leur entreprise grâce à des stratégies financières sur mesure.",
    product: "Conseil financier M&A"
  },
  {
    name: "Toit de Paris",
    company: "Toit de Paris",
    sector: "Construction",
    website: "https://www.toitdeparis.com/",
    description: "Donner une seconde vie aux toitures grâce à l'économie circulaire et le réemploi des matériaux.",
    product: "Réemploi matériaux toiture"
  },
  {
    name: "Les Pépites Vertes",
    company: "Les Pépites Vertes",
    sector: "Média",
    website: "https://www.lespepitesvertes.fr/",
    description: "Motiver la nouvelle génération à travailler pour la transition écologique via média, académie et agence.",
    product: "Média et formations"
  },
  {
    name: "Insitu Architecte",
    company: "Insitu Architecte",
    sector: "Architecture",
    website: "https://www.insitu-architecture.net/",
    description: "Cabinet d'architecture spécialisé en écoconception, bioclimatisme, biomimétisme et matériaux bas carbone.",
    product: "Architecture durable"
  },
  {
    name: "Nautilus Earth",
    company: "Nautilus Earth",
    sector: "Energie",
    website: "https://www.nautilus.earth/",
    description: "One stop shop de la transition énergétique pour construire une stratégie bas carbone et former vos employés.",
    product: "Solutions transition énergétique"
  },
  {
    name: "Jumanji Studio",
    company: "Jumanji Studio",
    sector: "Startup Studio",
    website: "https://www.jumanji.studio/",
    description: "Start-up studio pour un avenir durable unissant entrepreneurs et experts pour créer des entreprises à impact positif.",
    product: "Création startups à impact"
  },
  {
    name: "Poppins",
    company: "Poppins",
    sector: "Tech",
    website: "https://www.wearepoppins.com/fr",
    description: "Application qui permet de prêter et emprunter des objets entre voisins.",
    product: "App de partage entre voisins"
  },
  {
    name: "La Belle Société",
    company: "La Belle Société",
    sector: "Production",
    website: "https://www.linkedin.com/company/la-belle-societe-production/about/",
    description: "Producteur de films accompagnant les acteurs de l'innovation et de la transition écologique, spécialisé en biomimétisme.",
    product: "Production audiovisuelle"
  },
  {
    name: "La Fresque de l'Economie Circulaire",
    company: "La Fresque de l'Economie Circulaire",
    sector: "Formation",
    website: "https://www.lafresquedeleconomiecirculaire.com/",
    description: "Atelier collaboratif pour comprendre les enjeux de transformation vers l'économie circulaire.",
    product: "Atelier pédagogique"
  },
  {
    name: "Anima",
    company: "Anima",
    sector: "Biomimétique",
    website: "https://www.anima.ai/",
    description: "Co-fondation d'entreprises inspirées par la nature pour amplifier l'impact écologique et économique de la biomimétique.",
    product: "Incubateur biomimétique"
  },
  {
    name: "Sami",
    company: "Sami",
    sector: "Tech",
    website: "https://www.sami.eco/",
    description: "Logiciel en ligne puissant et accompagnement humain premium pour accélérer la décarbonation de toutes les entreprises.",
    product: "Plateforme de décarbonation"
  },
  {
    name: "Enerfip",
    company: "Enerfip",
    sector: "Finance",
    website: "https://fr.enerfip.eu/",
    description: "Financement participatif au service de la transition énergétique. Investissez sur des projets à partir de 10 euros.",
    product: "Plateforme de crowdfunding"
  },
  {
    name: "Pépite Raisin",
    company: "Pépite Raisin",
    sector: "Economie Circulaire",
    website: "https://pepite-raisin.fr/",
    description: "Entreprise Pionnière d'Innovations Circulaires de la filière Vins avec de nouveaux débouchés à valeur ajoutée.",
    product: "Valorisation sous-produits vigne"
  },
  {
    name: "Ceebios",
    company: "Ceebios",
    sector: "Biomimétique",
    website: "https://ceebios.com/",
    description: "Accélérer la transition sociétale par le biomimétisme en fédérant un réseau d'acteurs experts.",
    product: "Centre d'expertise biomimétisme"
  },
  {
    name: "Aurea Prima",
    company: "Aurea Prima",
    sector: "Finance",
    website: "https://www.coeurforest.com/",
    description: "Fonds d'investisseurs pour donner du sens à leur épargne en investissant dans la gestion durable des forêts.",
    product: "Fonds forêts durables"
  },
  {
    name: "Canary Call",
    company: "Canary Call",
    sector: "RH",
    website: "https://canarycall.co/",
    description: "Expertise RH à 360° en coaching, formation et recrutement au service de la transition écologique et solidaire.",
    product: "Services RH à impact"
  }
];

const sectors = [
  "Tous les secteurs",
  "Conseil RSE",
  "Energie",
  "Finance",
  "ONG",
  "Tech",
  "Formation",
  "Média",
  "Alimentation",
  "Communication",
  "Recherche",
  "Association",
  "Architecture",
  "Autre"
];

export const ColocatairesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous les secteurs");

  const filteredColocataires = colocataires
    .filter((coloc) => {
      const matchesSearch =
        coloc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coloc.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coloc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSector =
        selectedSector === "Tous les secteurs" ||
        coloc.sector === selectedSector;

      return matchesSearch && matchesSector;
    })
    .sort((a, b) => a.company.localeCompare(b.company));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section with Search */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
                Nos Colocataires
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Découvrez les entreprises et organisations qui font vivre la Climate House au quotidien. 
                Une communauté diversifiée et engagée pour la transition écologique.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-foreground/60 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Rechercher un colocataire..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-2 flex-wrap justify-center">
                {sectors.map((sector) => (
                  <Button
                    key={sector}
                    variant={selectedSector === sector ? "default" : "outline"}
                    onClick={() => setSelectedSector(sector)}
                    size="sm"
                  >
                    {sector}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">

              <div className="text-sm text-muted-foreground mb-6">
                {filteredColocataires.length} colocataire{filteredColocataires.length > 1 ? 's' : ''} trouvé{filteredColocataires.length > 1 ? 's' : ''}
              </div>

              {filteredColocataires.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredColocataires.map((coloc, index) => (
                    <Card
                      key={`${coloc.company}-${index}`}
                      className="p-6 hover:shadow-strong transition-all duration-300 animate-fade-in flex flex-col h-full"
                      style={{ animationDelay: `${(index % 12) * 50}ms` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{coloc.company}</h3>
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {coloc.sector}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
                        {coloc.description}
                      </p>
                      
                      {coloc.product && (
                        <div className="mb-4 p-3 bg-accent/50 rounded-lg">
                          <p className="text-sm font-medium text-foreground">
                            <span className="font-bold">Produit phare:</span> {coloc.product}
                          </p>
                        </div>
                      )}
                      
                      {coloc.website && (
                        <a
                          href={coloc.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm font-medium">Visiter le site</span>
                        </a>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Aucun colocataire ne correspond à votre recherche.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default ColocatairesPage;
