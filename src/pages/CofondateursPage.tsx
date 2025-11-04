import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Search, Users, ArrowUp } from "lucide-react";
import wallImage from "@/assets/cofondateurs-wall.jpg";
import { useEffect } from "react";

// Liste des cofondateurs
const cofondateurs = [
  { name: "Céline RÉMY", company: "Angel Investor & Co-Founder @ Neoness & Episod", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CR" },
  { name: "Olivier RENAUD", company: "Co-Founder & Investor @ Tech for Climate", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "OR" },
  { name: "Charlotte CHENEVIER", company: "Co-Founder @ The Fat Broccoli & Agence Alignée", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CC" },
  { name: "Renaud VISAGE", company: "Co-Founder @ Slate VC + Eventbrite", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "RV" },
  { name: "Sarah HUET", company: "Co-Founder @ AFemaleAgency & Leia Capital", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "SH" },
  { name: "Maxime BLONDEAU", company: "Founder @ Cosmorama & AlmaMater", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MB" },
  { name: "Olivier CUEILLE", company: "Co-Founder @ microDON", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "OC" },
  { name: "Lucie BASCH", company: "Co-Founder @ Too Good To Go @ Poppins", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "LB" },
  { name: "Nabil HMAMA", company: "VC investor & Founder @ QLAY", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NH" },
  { name: "Laurence GRANDCOLAS", company: "Founder @ MySezame", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "LG" },
  { name: "Mamadou DEMBELE", company: "Founder @ The Impact Story", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MD" },
  { name: "Julia BIJAOUI", company: "Co-Founder @ Frichti & Selar", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "JB" },
  { name: "Alexandra PALT", company: "Présidente @ WWF France", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AP" },
  { name: "Thierry PETIT", company: "CEO & business angel @ Made For All", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "TP" },
  { name: "Souad BOUTEGRABET", company: "Founder @ DesCodeuses", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "SB" },
  { name: "Thibault LAMARQUE", company: "Founder @ Castalie", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TL" },
  { name: "Solenne OJEA-DEVYS", company: "General Director @ OKKO HOTELS", sector: "Hospitality", batch: "COFO #1", image: "", linkedin: "#", initials: "SO" },
  { name: "Vincent STUHLEN", company: "Investor & Founder @ IMPACT LABS.earth", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "VS" },
  { name: "Galo DIALLO", company: "Founder & CEO @ Smile Conseil", sector: "Conseil", batch: "COFO #1", image: "", linkedin: "#", initials: "GD" },
  { name: "Khadija NEMRI", company: "General Director @ L'École de la 2e Chance", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "KN" },
  { name: "Quentin BORDET", company: "Creator @ L'Œuvre & Co-founder @ Les Collectifs", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "QB" },
  { name: "Maud CAILLAUX", company: "Co-Founder @ Green Got", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "MC" },
  { name: "Mohamed EL IDRISSI", company: "Founder @ SPARK Club & PANIER!", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "ME" },
  { name: "Olivia BLANCHARD", company: "Présidente @ Association des acteurs de la finance durable", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "OB" },
  { name: "Juliette DELANOË", company: "Co-Founder @ Ubble", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "JD" },
  { name: "Ano KUHANATHAN", company: "Head of Corporate Research @ Allianz", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "AK" },
  { name: "Delphine DE CANECAUDE", company: "Founder @ Etoile Rouge", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "DC" },
  { name: "Xavier DURAND", company: "Co-Founder @ Chilli", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "XD" },
  { name: "Charlotte RIVATON", company: "Co-CEO @ Exhibitgroup", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "CR" },
  { name: "Rodolphe LANDEMAINE", company: "Fondateur @ Maison Landemaine Land & Monkeys", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "RL" },
  { name: "Josef BOVET", company: "Angel investor & Co-founder @ Tiller", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JB" },
  { name: "Julie GOSALVEZ", company: "Board Chairwoman @ AFEN", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JG" },
  { name: "Clement ALTERESCO", company: "Founder & CEO de Morning", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CA" },
  { name: "Sophie DARRIERE", company: "Co-founder @ Label Experience", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "SD" },
  { name: "Jack HABRA", company: "Investor & Founder @ Context", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "JH" },
  { name: "Claire BRETTON", company: "Co-Founder & CEO @ Underdog", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "CB" },
  { name: "Maud MIELVAQUE", company: "Co-Fondatrice @ adaptation/s", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MM" },
  { name: "Abdelaali EL BADAOUI", company: "Founder @ Banlieues Santé & Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AE" },
  { name: "Béatrice EASTHAM", company: "Founder @ Green Evénements & Climeet", sector: "Événementiel", batch: "COFO #1", image: "", linkedin: "#", initials: "BE" },
  { name: "Cedric SELLIN", company: "Investor & Co-Founder @ Auxilium Foundation", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "CS" },
  { name: "Marie DEWAVRIN", company: "Venture Partner @ Peakbridge", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "MD" },
  { name: "Dimitri FARBER GARCIA CAMINATI", company: "Impact investor & Co-Founder @ Tiller", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "DF" },
  { name: "Dimitri CAUDRELIER", company: "Co-Founder @ Reboat & Shape Transition", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "DC" },
  { name: "Kako DUBS", company: "Founder @ WAAAS", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "KD" },
  { name: "Moussa CAMARA", company: "Founder @ Les Déterminés", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MC" },
  { name: "Kelly MERRAN", company: "Founder @ MIRAA & Orgaanic", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "KM" },
  { name: "Yamina AÎSSA ABDI", company: "Co-Founder @ Au Coeur de ma Cantine", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "YA" },
  { name: "Fanny BERNARD", company: "General Director @ BuyYourWay", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "FB" },
  { name: "Nathalie BALLA", company: "Investor & Board Member @ Criteo", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NB" },
  { name: "Nicolas MORBY", company: "CEO @ Cozétik (ESUS)", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "NM" },
  { name: "Bérengère LEHEMBRE", company: "Co-Founder @ Asterion Ventures", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "BL" },
  { name: "Quentin VACHER", company: "CEO & Co-Founder @ Frichti", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "QV" },
  { name: "Lara PAGNIER", company: "Co-Founder @ Standard Deviation", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "LP" },
  { name: "Bruno MENU", company: "Co-Founder @ Granular Energy", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "BM" },
  { name: "Paul CHAUMONT", company: "Senior Director of PM @ Integral Ad Science", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "PC" },
  { name: "Eva SADOUN", company: "Founder @ Rift & Co-Founder @ LITA.co", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "ES" },
  { name: "Marc BATTY", company: "Co-Founder & Chairman @ Fermes En ViE", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "MB" },
  { name: "Loubna KSIBI", company: "Co-Founder @ Meet my Mama", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "LK" },
  { name: "Nicolas BENSIGNOR", company: "Entrepreneur & Investor", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "NB" },
  { name: "Christine KOLB", company: "Co-Founder @ Sycomore Asset Management", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "CK" },
  { name: "Inès SEDDIKI", company: "Co-Founder @ GHETTUP", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "IS" },
  { name: "Bertrand JELENSPERGER", company: "Co-Founder @ The Fork & CEO Mure", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "BJ" },
  { name: "Alizée LOZAC'HMEUR", company: "Co-Founder @ Makesense", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AL" },
  { name: "Feris BARKAT", company: "Co-founder @ Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "FB" },
  { name: "Pascale GUIFFANT", company: "Co-Founder & GM @ Open Lande", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "PG" },
  { name: "Pierre-Yves SANCHIS", company: "Cofounder @ Youmatter", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "PS" },
  { name: "Nicolas CRESTIN", company: "Co-Founder @ Sami", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "NC" },
  { name: "Roxanne VARZA", company: "Director @ STATION F", sector: "Tech", batch: "COFO #1", image: "", linkedin: "#", initials: "RV" },
  { name: "Serge MAGDALEINE", company: "CEO @ LCL", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "SM" },
  { name: "Sanaa SAITOULI-TARAORE", company: "Co-Founder @ Banlieues Climat", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "SS" },
  { name: "Olivier COTINAT", company: "Co-CEO @ MoHo & Schoolab", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "OC" },
  { name: "Clara DELÉTRAZ", company: "Founder @ ENSEMBLE(S)", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "CD" },
  { name: "Anne-Sophie PASTEL DUBANTON", company: "Co-Founder @ Life Flowing & EcoXtract", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "AP" },
  { name: "Taoufik VALLIPURAM", company: "Board Member @ BCorp France & Connector @ Ouishare", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TV" },
  { name: "Camille DELAMAR", company: "Co-Founder @ EcoTable", sector: "Food", batch: "COFO #1", image: "", linkedin: "#", initials: "CD" },
  { name: "Tristan LECOMTE", company: "Founder @ PUR Projet & Second Life", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "TL" },
  { name: "Laura BEAULIER", company: "CEO @ Climate Dividends", sector: "Finance", batch: "COFO #1", image: "", linkedin: "#", initials: "LB" },
  { name: "Souba BRUNEL", company: "Founder @ Les Impactrices", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "SB" },
  { name: "Violaine TARDIEU", company: "Chief of Staff to Lucie BASCH", sector: "Impact", batch: "COFO #1", image: "", linkedin: "#", initials: "VT" },
  // COFO #2
  { name: "Aïna QUEIROZ", company: "Aïna L'exploratrice", sector: "SCIENTIFIQUE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/ainaqueiroz/", initials: "AQ" },
  { name: "Amandine HERSANT", company: "Planète Urgence / Aluna / Réseau Mycorhize / Groupe Bel", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/amandine-hersant-99729263", initials: "AH" },
  { name: "Anne-Sophie SAUVAGE", company: "A Wild Idea - SASU (+ Sidekicks.cc)", sector: "PROSPECTIVE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/annesophiesauvage/", initials: "AS" },
  { name: "Anne-Sophie GERVAIS", company: "Fondation RAISE Sherpas", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/annesophiegervais/", initials: "AG" },
  { name: "Armelle ROULLAND", company: "Right Time", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/armelle-roulland-5782b540/", initials: "AR" },
  { name: "Aurore JACQUES", company: "Goodvest", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/aurore-jacques/", initials: "AJ" },
  { name: "Carole THOMÉ", company: "Coeure", sector: "TERRITOIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/carolethome/", initials: "CT" },
  { name: "Caroline PONS", company: "SCEA La Ferme du Prieuré / Association ESPACE en Sologne", sector: "TERRITOIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/carolineponshollande/", initials: "CP" },
  { name: "Caroline SPAN", company: "Welcome Account / A Voté / La Concorde", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://fr.linkedin.com/in/caroline-span", initials: "CS" },
  { name: "Caroline RENOUX", company: "Birdeo / People4Impact", sector: "PEOPLE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/caroline-renoux/", initials: "CR" },
  { name: "Catherine SPINDLER", company: "SEPHORA", sector: "CORPO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/catherine-spindler-aa54134/", initials: "CS" },
  { name: "Celia ROUSSIN", company: "Pépite Raisin", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/celiaroussin/", initials: "CR" },
  { name: "Celia PONCELIN", company: "Twomorrow Project", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/celiaponcelin/", initials: "CP" },
  { name: "Chloe TEMPLIER", company: "Chloé TEMPLIER EI", sector: "ANNECY", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/chloe-templier/", initials: "CT" },
  { name: "Claire DEMAISON", company: "Lica", sector: "MARSEILLE", batch: "COFO #2", image: "", linkedin: "#", initials: "CD" },
  { name: "Clara MOREL", company: "Locomotiv'", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/clara-morel-53564683/", initials: "CM" },
  { name: "Delphine DARMON", company: "demain n'attend pas", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/delphinedarmon/", initials: "DD" },
  { name: "Delphine BLUMEREAU", company: "Institut des Futurs souhaitables", sector: "COMMUNAUTE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/delphine-blumereau/", initials: "DB" },
  { name: "Emilie CÔME", company: "V comme Vanille", sector: "AGRO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/emilie-côme-62647627/", initials: "EC" },
  { name: "Florence BARDIN", company: "Agence F", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://linkedin.com/in/florence-bardin-0606451b", initials: "FB" },
  { name: "Ingrid KANDELMAN", company: "SASU L'ONDE ZERO ET LA CEC", sector: "DIALOGUE SOCIAL", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/ingrid-kandelman-5906221/", initials: "IK" },
  { name: "Jessica ANGEL", company: "Château du Feÿ", sector: "TERRITOIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/jessica-f-angel", initials: "JA" },
  { name: "Julia SOLODKOVSKA", company: "Indépendant", sector: "ENERGIE", batch: "COFO #2", image: "", linkedin: "#", initials: "JS" },
  { name: "Kalina RASKIN", company: "Ceebios", sector: "SCIENTIFIQUE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/kalina-raskin-🌍-30b19a18/", initials: "KR" },
  { name: "Laetitia ROSEZ", company: "Agence Bloom", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/laetitiarosez/", initials: "LR" },
  { name: "Laure LEMARCHAND", company: "DUET", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/laure-lemarchand-47969928/", initials: "LL" },
  { name: "Laure BONNAVENTURE", company: "L Rise et One Heart", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/laured1/", initials: "LB" },
  { name: "Léa TOMASSIN", company: "HelloAsso", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/lea-thomassin/", initials: "LT" },
  { name: "Lursika D'ALMEIDA", company: "Regen school", sector: "JEUNE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/lursika-d-almeida-8a2282191/", initials: "LD" },
  { name: "Maelle MILLIN", company: "BioAlva (Localverse SAS)", sector: "AGRO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/maellelemillin", initials: "MM" },
  { name: "Malorie SIA", company: "Plenitude France", sector: "ENERGIE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/malloriesia/", initials: "MS" },
  { name: "Marina YAKOVLEV", company: "EcoYako", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/marina-yakovlev-b1bb14181/", initials: "MY" },
  { name: "Mirabelle LAMOUREUX", company: "Keeep", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/mirabelle-lamoureux-keeep/", initials: "ML" },
  { name: "Nathalie NOWAK", company: "Imfusio", sector: "PEOPLE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/nathaliecouillardnowak/", initials: "NN" },
  { name: "Nathalie BABOURAJ", company: "Association Tribe Empowering School", sector: "SCIENTIFIQUE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/nathalie-babouraj/", initials: "NB" },
  { name: "Pauline TREQUESSER", company: "COLLECTIF COSME", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/pauline-trequesser/", initials: "PT" },
  { name: "Rose VERNEAU", company: "FEY COMMONS", sector: "TERRITOIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/marine-camille-rose-verneau/", initials: "RV" },
  { name: "Rose May LUCOTTE", company: "ChangeNOW", sector: "COMMUNAUTE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/rose-may-lucotte-56136748/", initials: "RL" },
  { name: "Sandra REY", company: "Anima", sector: "BIOMIM", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/sandra-rey-99643542/", initials: "SR" },
  { name: "Sandrine BENATTAR", company: "BENE société civile d'investissements responsables", sector: "PEOPLE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/sandrine-benattar/", initials: "SB" },
  { name: "Sarah BAGLAND", company: "Fonds d'investissement citoyen (By The People)", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/sarah-bagland-a2a57618a/", initials: "SB" },
  { name: "Solenn THOMAS", company: "Eklore", sector: "ACTIVISME", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/solennthomas", initials: "ST" },
  { name: "Stephanie MESSAGER", company: "ReNaisSens Conseil", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/stephanie-messager/", initials: "SM" },
  { name: "Valérie GRAMOND", company: "GL", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://linkedin.com/in/valerie-gramond-greenlobby", initials: "VG" },
  { name: "Violette WATINE", company: "CEO / Partners & Co", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/violette-watine/", initials: "VW" },
  { name: "Alexandre SCHULLER", company: "PUR, Climate Club, Impact Labs, Altea", sector: "AGRO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/alexandreschouler/", initials: "AS" },
  { name: "Antoine CADI", company: "Tétras Restore FDB", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/antoine-cadi-2376a857/", initials: "AC" },
  { name: "Arnaud VANPOPERINGHE", company: "tikamoon", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/arnaudvanpoperinghe/", initials: "AV" },
  { name: "Benoit LECAT", company: "candide x blue", sector: "MARSEILLE", batch: "COFO #2", image: "", linkedin: "https://linkedin.com/in/benoitlecat", initials: "BL" },
  { name: "Benoit VARIN", company: "RCUBE", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/benoitentrepreneur/", initials: "BV" },
  { name: "Christian CLOT", company: "Human Adaptation Institute", sector: "SCIENTIFIQUE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/christian-clot/", initials: "CC" },
  { name: "Constantin AUGIER", company: "Indépendant", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/constantin-augier-65b374215/", initials: "CA" },
  { name: "Cosmo VOLLAUSCHEK", company: "Equity", sector: "JEUNE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/cosmovollauschek/", initials: "CV" },
  { name: "Cristian MONTOYA", company: "Ekwateur", sector: "ENERGIE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/cristianmontoya/", initials: "CM" },
  { name: "Eric DUVERGER", company: "CEC", sector: "COMMUNAUTE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/eric-duverger-2990421", initials: "ED" },
  { name: "Francois RANISE", company: "Indépendant", sector: "Impact", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/francois-ranise-630a705b/", initials: "FR" },
  { name: "Guillaume DESLOGES", company: "ALMA SAS", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/desloges/", initials: "GD" },
  { name: "Hadrien ORMIERES", company: "FICO Invest", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/hadrienormieres", initials: "HO" },
  { name: "Houssen ISSOUFALY", company: "HODL CONSULTING (SUSTAINCIAL)", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/houssen-issouf-aly/", initials: "HI" },
  { name: "Jean-Christophe CONTICELLO", company: "Avilo Capital", sector: "EUROPE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/conticelloj/", initials: "JC" },
  { name: "Jean-Francois COCHY", company: "Aquiti", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/jean-francois-cochy-09a89318", initials: "JC" },
  { name: "Jerome SUSSFELD", company: "RAISE Sherpas", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/jerome-sussfeld-63057812/", initials: "JS" },
  { name: "Johan RICAUT", company: "Shopopop", sector: "MOBILITE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/johan-ricaut/", initials: "JR" },
  { name: "Jonathan SEBBANE", company: "SOGARIS", sector: "LOGISTIQUE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/jonathan-sebbane-883361ba/", initials: "JS" },
  { name: "Julien ARMIJO", company: "The Climate Tech Observatory", sector: "SCIENTIFIQUE", batch: "COFO #2", image: "", linkedin: "https://fr.linkedin.com/in/julien-armijo-1b507824", initials: "JA" },
  { name: "Julien BELLATIO", company: "ELectra", sector: "ENERGIE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/julien-belliato-3a35391b/", initials: "JB" },
  { name: "Julien VINCKEL", company: "ABTasty", sector: "DATA", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/julien-vinckel-a119b625/", initials: "JV" },
  { name: "Julien DUQUENNE", company: "JD Conseils & Formation", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/julien-duquenne-sustainable-finance", initials: "JD" },
  { name: "Loic BAR", company: "WIPUS / Planet is the Limit", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/loicbar/", initials: "LB" },
  { name: "Mael SONRIER", company: "Calyce", sector: "ENERGIE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/maël-sonrier-7721359/", initials: "MS" },
  { name: "Matthias NAVARRO", company: "REDMAN", sector: "IMMOBILIER", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/matthias-navarro/", initials: "MN" },
  { name: "Medhi GUELLIL", company: "Orygeen", sector: "DECARBO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/mehdi-guellil/", initials: "MG" },
  { name: "Nicolas HUNSINGER", company: "SoGoodAgents / EXOTEC", sector: "TECH", batch: "COFO #2", image: "", linkedin: "#", initials: "NH" },
  { name: "Olivier SIMON", company: "Indépendant", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "#", initials: "OS" },
  { name: "Pascal DECARY", company: "Ex Dir Achat SNCF / Verdensis Conseils", sector: "CORPO", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/pascal-décary-b2130328/", initials: "PD" },
  { name: "Philippe SCHIESSER", company: "ECOEFF LAB / INTERSCORES", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/ecoeff/", initials: "PS" },
  { name: "Philippe BAR", company: "DARWIN", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "#", initials: "PB" },
  { name: "Pierre GAUTHEY", company: "Liaw", sector: "ECONOMIE CIRCULAIRE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/benoitentrepreneur/", initials: "PG" },
  { name: "Pierre GILBERT", company: "Sator", sector: "PEOPLE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/pierre-gilbert-2916a5108/", initials: "PG" },
  { name: "Raffaele COLELLA", company: "Forest en Italie", sector: "BIODIVERSITE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/raffaelecolella/", initials: "RC" },
  { name: "Raphael ROBIL", company: "Lemon Interactive", sector: "MEDIA/COMM/INFLUENCE", batch: "COFO #2", image: "", linkedin: "https://fr.linkedin.com/in/raphaël-robil-1686113", initials: "RR" },
  { name: "Santiago LEFEVRE", company: "ChangeNOW", sector: "COMMUNAUTE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/santiagolefebvre/", initials: "SL" },
  { name: "Sebastien DELPONT", company: "Ressorts", sector: "IMMOBILIER", batch: "COFO #2", image: "", linkedin: "https://fr.linkedin.com/in/sebastien-delpont-01793323", initials: "SD" },
  { name: "Simon TAILLARD", company: "Taurus", sector: "INVEST", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/simon-t-7853902b9", initials: "ST" },
  { name: "Sofyan MARTIN", company: "Regen'studio", sector: "FINANCE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/sofyan-martin-59242285", initials: "SM" },
  { name: "Thibault BASTIN", company: "Alphonse", sector: "PEOPLE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/thibaultbastin/", initials: "TB" },
  { name: "Thomas BREUZARD", company: "norsys / B Corp France / Mouvement Impact France", sector: "COMMUNAUTE", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/thomasbreuzard/", initials: "TB" },
  { name: "Vincent DAVID", company: "L'agence RUP", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/vincent-david-856a515/", initials: "VD" },
  { name: "Yann BORGSTEDT", company: "WOMANITY", sector: "IG", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/yannborgstedt/", initials: "YB" },
  { name: "Yannick RABA", company: "Ocube Coworking", sector: "BORDEAUX", batch: "COFO #2", image: "", linkedin: "https://www.linkedin.com/in/yannick-raba-7575183", initials: "YR" }
];

const sectors = ["Tous", "Impact", "Finance", "Tech", "Food", "Conseil", "Événementiel", "Hospitality"];
const batches = ["Tous", "COFO #1", "COFO #2"];

const CofondateursPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("Tous");
  const [selectedBatch, setSelectedBatch] = useState("Tous");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Gérer l'affichage du bouton scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const filteredCofondateurs = cofondateurs.filter(cofo => {
    const matchesSearch = cofo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cofo.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = selectedSector === "Tous" || cofo.sector === selectedSector;
    const matchesBatch = selectedBatch === "Tous" || cofo.batch === selectedBatch;
    return matchesSearch && matchesSector && matchesBatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-soft overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">172 Cofondateurs</span>
              </div>
              <p className="text-xl text-muted-foreground">
                172 entrepreneurs visionnaires à parité femmes-hommes, qui ont uni leurs forces
                pour créer le premier lieu dédié à l'action climatique en France
              </p>
            </div>

            {/* Filtres et Recherche */}
            <div className="max-w-6xl mx-auto">
              {/* Barre de recherche */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Rechercher un cofondateur ou une entreprise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg"
                />
              </div>

              {/* Filtres par secteur */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {sectors.map((sector) => (
                  <Button
                    key={sector}
                    variant={selectedSector === sector ? "default" : "outline"}
                    onClick={() => setSelectedSector(sector)}
                    className="rounded-full"
                  >
                    {sector}
                  </Button>
                ))}
              </div>

              {/* Filtres par batch */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {batches.map((batch) => (
                  <Button
                    key={batch}
                    variant={selectedBatch === batch ? "default" : "outline"}
                    onClick={() => setSelectedBatch(batch)}
                    className="rounded-full"
                    size="sm"
                  >
                    {batch}
                  </Button>
                ))}
              </div>

              {/* Compteur */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {filteredCofondateurs.length} cofondateur{filteredCofondateurs.length > 1 ? 's' : ''} affiché{filteredCofondateurs.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Grille des cofondateurs */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {filteredCofondateurs.map((cofo, index) => (
                  <Card
                    key={`${cofo.name}-${index}`}
                    className="p-4 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in group relative"
                    style={{ animationDelay: `${(index % 24) * 30}ms` }}
                  >
                    {cofo.batch === "COFO #1" && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 bg-background/80 backdrop-blur-sm">
                          #1
                        </Badge>
                      </div>
                    )}
                    {cofo.batch === "COFO #2" && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-5 bg-background/80 backdrop-blur-sm">
                          #2
                        </Badge>
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <Avatar className="h-20 w-20 border-2 border-border group-hover:border-primary transition-colors duration-300">
                          <AvatarImage src={cofo.image} alt={cofo.name} />
                          <AvatarFallback className="text-base font-semibold bg-primary/10">
                            {cofo.initials}
                          </AvatarFallback>
                        </Avatar>
                        {cofo.linkedin !== "#" && (
                          <a
                            href={cofo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
                            aria-label={`LinkedIn de ${cofo.name}`}
                          >
                            <Linkedin className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <h3 className="font-semibold text-sm mb-1 line-clamp-2 min-h-[2.5rem]">
                        {cofo.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                        {cofo.company}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {cofo.sector}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredCofondateurs.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">
                    Aucun cofondateur trouvé
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSector("Tous");
                      setSelectedBatch("Tous");
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Rejoignez le mouvement
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vous partagez notre vision d'une économie au service du climat ?
                Devenez membre de notre communauté et participez à la transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90" asChild>
                  <a href="#contact">Devenir résident</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/#communaute">Découvrir la communauté</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bouton Scroll to Top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full shadow-strong z-50 animate-fade-in"
          aria-label="Remonter en haut de la page"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default CofondateursPage;
