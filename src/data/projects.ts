import { StaticImageData } from "next/image";
import { assets } from "../../public/Images/assets";

export type Project = {
  title: string;
  description: string;
  image: StaticImageData | string; // Allow both StaticImageData and string for image sources
  link: string;
  type: "web" | "mobile" | "desktop" | "other";
};

export const projects: Project[] = [
  {
    title: "Kitikard",
    description:
      "Carte de visite NFC intelligente avec profil virtuel responsive.",
    image: assets.project,
    link: "https://kitikard.mg",
    type: "mobile",
  },
  {
    title: "Fanilo Festival - QR Tickets",
    description:
      "Application de gestion de billets avec QR code et scan en temps réel.",
    image: assets.project,
    link: "https://fanilo-ticket.netlify.app",
    type: "web",
  },
  {
    title: "PapierPrint",
    description:
      "Plateforme simple de commande d'impression en ligne sur format A4.",
    image: assets.project,
    link: "https://papierprint.mg",
    type: "web",
  },
  {
    title: "Ediat Garage Tracker",
    description:
      "Outil interne de suivi d'interventions mécaniques et gestion clients.",
    image: assets.project,
    link: "#",
    type: "desktop",
  },
  {
    title: "SoaFood",
    description:
      "Application mobile de commande et livraison de plats locaux à Madagascar.",
    image: assets.project,
    link: "https://play.google.com/store/apps/details?id=soafood.app",
    type: "mobile",
  },
  {
    title: "Dashboard Ventes Crypto",
    description:
      "Dashboard de suivi des ventes de crypto-monnaies en temps réel.",
    image: assets.project,
    link: "#",
    type: "other",
  },
];
