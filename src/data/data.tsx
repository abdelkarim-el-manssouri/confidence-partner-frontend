import { GiLockedDoor } from "react-icons/gi";
import { RiDoorOpenFill } from "react-icons/ri";
import { IoMdChatbubbles, IoMdKey } from "react-icons/io";
import { CgInsights } from "react-icons/cg";
import {
  FaHouse,
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";
import {
  Btp,
  Energies,
  Industrie,
  Services,
  Transport,
} from "@/app/(defaultLayout)/components/features/Card";
// import engineeringImage1 from "../../public/images/house.jpg";
// import engineeringImage2 from "../../public/images/peopleStanding.jpg";
// import engineeringImage3 from "../../public/images/TeamMeetings.jpg";
// import engineeringImage4 from "../../public/images/TeamMeetings.jpg";

export const navbarLinks = [
  {
    id: 1,
    label: "bienvenue",
    href: "/",
    icon: <FaHouse />,
  },
  {
    id: 2,
    label: "vous",
    href: "/you",
    icon: <GiLockedDoor />,
  },
  {
    id: 3,
    label: "nous",
    href: "/us",
    icon: <IoMdKey />,
  },
  {
    id: 4,
    label: "ensemble",
    href: "/together",
    icon: <RiDoorOpenFill />,
  },
  {
    id: 5,
    label: "insights",
    href: "/insights",
    icon: <CgInsights />,
  },
  {
    id: 6,
    label: "contact",
    href: "/contact",
    icon: <IoMdChatbubbles />,
  },
];

export const socialLinks = [
  {
    id: 1,
    label: "linkedin",
    href: "/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    label: "instagram",
    href: "/you",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    label: "facebook",
    href: "/us",
    icon: <FaSquareFacebook />,
  },
  // {
  //   id: 4,
  //   label: "ensemble",
  //   href: "/together",
  //   icon: <RiDoorOpenFill />,
  // },
  // {
  //   id: 5,
  //   label: "insights",
  //   href: "/insights",
  //   icon: <CgInsights />,
  // },
  // {
  //   id: 6,
  //   label: "contact",
  //   href: "/contact",
  //   icon: <IoMdChatbubbles />,
  // },
];

export const projects = [
  {
    title: "Confiance",
    description:
      "La confiance n'est pas un simple mot, c'est notre identité. Nous nous engageons à établir des relations fiables et solides comme le roc, transparentes comme du cristal et durables comme l'acier. Votre succès ? C'est notre obsession, car quand vous gagnez, nous triomphons à vos côtés.",
    src: "house.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",

    color: "#ebf29c",
    bgColor: "#2a2a2e",
  },
  {
    title: "Expertise et Maîtrise",
    description:
      "Nous ne nous contentons pas de comprendre votre secteur, nous en maîtrisons chaque rouage, chaque subtilité, chaque levier caché: Normes de qualité, défis complexes, enjeux stratégiques. Nous les anticipons et les transformons en opportunités. Nos solutions ne sont pas juste adaptées, elles sont taillées sur mesure, impactantes et redoutablement efficaces.",
    src: "house.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",

    color: "#e3cdb0",
    bgColor: "#0a3362",
  },
  {
    title: "Innovation",
    description:
      "Dans un monde qui change à la vitesse de l’éclair, être en retard n’est pas une option. Chez Confidence Partner, nous repoussons les limites, nous pensons hors cadre, hors normes, hors du commun. tout pour  Vous garder en pole position, là où les idées audacieuses deviennent des victoires concrètes.",
    src: "house.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",

    color: "#dce6ee",
    bgColor: "#40707b",
  },
  {
    title: "Personnalisation",
    description:
      "Du Sur-Mesure, pas du Prêt-à-Penser. Votre entreprise est unique, votre stratégie doit l’être aussi pensée dans le moindre détail. Parce que votre réussite mérite bien plus qu’une formule toute faite.",
    src: "house.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#2a2a2e",
    bgColor: "#cae8de",
  },
  {
    title: "Approche Non-Traditionnelle",
    description:
      "les méthodes rigides et conventionnelles pour privilégier des solutions agiles et adaptatives. non pas question Nos actions aujourdhui sont guidées par une ambition : garantir une croissance durable et préparer nos clients aux défis de demain.",
    src: "house.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#364ce4",
    bgColor: "#daddd0",
  },
];

export const activityFields = [
  {
    id: "Btp",
    title: "BTP",
    card: Btp,
  },
  {
    id: "Energies",
    title: "Énergies",
    card: Energies,
  },
  {
    id: "Industrie",
    title: "Industrie",
    card: Industrie,
  },
  {
    id: "Transport",
    title: "Transport ferroviaire et portuaire",
    card: Transport,
  },
  {
    id: "Services",
    title: "Services",
    card: Services,
  },
];

export type SolutionsTypes = {
  id: number;
  label: string;
  image: string;
};

export const engineering: SolutionsTypes[] = [
  {
    id: 1,
    label: "Études de danger et Plan d’Opération Internes (POI)",
    image: "images/house.jpg",
  },
  {
    id: 2,
    label: "Analyse des risques professionnels",
    image: "images/peopleStanding.jpg",
  },
  {
    id: 3,
    label: "Études d’impact sur l’environnement",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 4,
    label: "Analyse des aspects environnementaux",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 5,
    label: "Études techniques de sécurité incendie (IGH, ERP, ERT, INDUSRIE…)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 6,
    label: "Étude zonage ATEX,",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 7,
    label: "Études de circulation et gestion de flux",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 8,
    label:
      "Études de signalisation (y compris l’installation) et mise en place des",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 9,
    label: "plans d’évacuation",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 10,
    label: "Ingénierie de formation.",
    image: "images/TeamMeetings.jpg",
  },
];

export const formations: SolutionsTypes[] = [
  {
    id: 1,
    label: "Sauvetage Secourisme au Travail SST",
    image: "images/house.jpg",
  },
  {
    id: 2,
    label: "Equipier de Première et de Seconde Intervention EPI et ESI",
    image: "images/peopleStanding.jpg",
  },
  {
    id: 3,
    label: "Evacuation d’urgence…",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 4,
    label:
      "Conduite sécuritaire d’engins, Arrimage des engins, Utilisation et contrôle des accessoires de levage",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 5,
    label: "Préparation à l’Habilitation Electrique",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 6,
    label: "Travaux en hauteur, Travaux en tranchée et excavation",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 7,
    label: "Risques chimiques",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 8,
    label: "Ergonomie, Gestes et postures…",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 9,
    label: "Gestions des risques",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 10,
    label: "Gestion des déchets",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 11,
    label: "Leadership et culture sécurité",
    image: "images/TeamMeetings.jpg",
  },
];

export const audits: SolutionsTypes[] = [
  {
    id: 1,
    label:
      "Audit système management de la qualité interne / Audits internes(externalisés) / Audit à blanc",
    image: "images/house.jpg",
  },
  {
    id: 2,
    label: "Audit chantier selon prescriptions du maitre d’ouvrage",
    image: "images/peopleStanding.jpg",
  },
  {
    id: 3,
    label: "Audit Qualité",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 4,
    label: "Audit Hygiène",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 5,
    label: "Audit du management des risques et de la sécurité (SST)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 6,
    label: "Audit de Sécurité Incendie",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 7,
    label: "Audit Environnemental",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 8,
    label: "Audit Énergétique",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 9,
    label: "Audit Légal et réglementaire",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 10,
    label: "Audit SMI QSEE",
    image: "images/TeamMeetings.jpg",
  },
];

export const conseils: SolutionsTypes[] = [
  {
    id: 1,
    label:
      "Coordination Sécurité et protection de la santé (CSPS) dans les chantiers de construction (Assistance du Maitre d'ouvrage)",
    image: "images/house.jpg",
  },
  {
    id: 2,
    label:
      "Mise à disposition des ressources (Animation HSE) dans les chantiers de construction",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 3,
    label: "Accompagnement à la mise en place du S.M de la Qualité (ISO 9001)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 4,
    label:
      "Accompagnement à la mise en place du Système de Management Environnemental (ISO 14001)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 5,
    label:
      "Accompagnement à la mise en place du Système de Management de la Santé et Sécurité au Travail (ISO 45001)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 6,
    label:
      "Accompagnement à la mise en place de S.M de l’Hygiène alimentaire (ISO 22000)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 7,
    label: "Accompagnement à la mise en place de S.M Énergétique (ISO 50001)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 8,
    label: "Accompagnement à la mise en place de S.M intégré (QSE)",
    image: "images/TeamMeetings.jpg",
  },
  {
    id: 9,
    label: "veille légale et réglementaire",
    image: "images/TeamMeetings.jpg",
  },
];
