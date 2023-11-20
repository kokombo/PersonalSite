import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SocialsType, projectType } from "../types/types";
import { images } from ".";
import { IconsType } from "../types/types";
import slugify from "slugify";

export const iconsData: IconsType[] = [
  {
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/",
    name: "linkedin",
  },

  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com/Oluwanbowa",
    name: "twitter",
  },

  {
    icon: <FiGithub />,
    url: "https://github.com/BowaDAO",
    name: "github",
  },

  {
    icon: <FaInstagram />,
    url: "https://instagram.com/oluwanbowa_?igshid=YmMyMTA2M2Y=",
    name: "instagram",
  },
];

export const projectData: projectType[] = [
  {
    id: "1",
    image: images.bowal1,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce marketplace that leverages geo-location technology to online buying and selling in Africa.",
    slug: slugify("Bowal Mobile App", { lower: true }),
    images: [
      images.bowal1,
      images.bowal2,
      images.bowal4,
      images.bowal6,
      images.bowal7,
      images.bowal8,
      images.bowal9,
      images.bowal10,
      images.bowal21,
      images.bowal22,
      images.bowal23,
      images.bowal24,
      images.bowal11,
      images.bowal12,
      images.bowal13,
      images.bowal14,
      images.bowal15,
      images.bowal16,
      images.bowal17,
      images.bowal19,
      images.bowal20,
      images.bowal5,
    ],
    stack: "React Native, Redux, Firebase, JavaScript",
    live: "",
    github: "https://github.com/BowaDAO/BowalMobileApp",
  },

  {
    id: "2",
    image: images.beud1,
    title: "Beuder Tech Community",
    description:
      "A tech community that connects non-tech founders with tech professionals to build commercial products.",
    slug: slugify("Beuder Tech Community", { lower: true }),
    images: [images.beud1, images.beud3, images.beud4, images.beud5],
    stack: "ReactJS, Tailwind CSS, Vite",
    live: "https://beud.netlify.app",
    github: "https://github.com/BowaDAO/Beud",
  },

  {
    id: "3",
    image: images.ternhub1,
    title: "TheTernHub",
    description:
      "A job platform for newbies in the tech industry to discover latest internship opportunities and junior roles. ",
    slug: slugify("TheTernHub", { lower: true }),
    images: [
      images.ternhub1,
      images.ternhub2,
      images.ternhub3,
      images.ternhub4,
      images.ternhub5,
      images.ternhub6,
      images.ternhub7,
      images.ternhub8,
      images.ternhub9,
      images.ternhub10,
      images.ternhub11,
      images.ternhub12,
      images.ternhub13,
    ],
    stack: "ReactJS, Tailwind CSS, Redux, Firebase, Vite",
    live: "",
    github: "https://github.com/BowaDAO/The-Tern-Hub-Web-App",
  },

  {
    id: "4",
    image: images.textscrapper,
    title: "Text Extractor",
    description:
      "A simple web application for users to easily extract text from screenshots.",
    slug: slugify("Text Extractor", { lower: true }),
    images: [
      images.textscrapper,
      images.textscrapper,
      images.textscrapper,
      images.textscrapper,
    ],
    stack: "Tesseract.JS, React",
    live: "https://text-scrapper.netlify.app/",
    github: "https://github.com/BowaDAO/text-scrapper",
  },

  {
    id: "5",
    image: images.exco2,
    title: "Exco mobile application",
    description:
      "Exco is an NFT gaming platform where users can stake tokens to play games and earn real cash.",
    slug: slugify("Exco mobile application", { lower: true }),
    images: [
      images.exco1,
      images.exco2,
      images.exco3,
      images.exco4,
      images.exco5,
      images.exco6,
      images.exco7,
      images.exco8,
      images.exco9,
    ],
    stack: "TypeScript, React Native, Expo",
    live: "",
    github: "https://github.com/BowaDAO/exco",
  },

  {
    id: "6",
    image: images.logistics1,
    title: "Sendey",
    description:
      "Sendey is a logistics mobile application modelled to work like bolt/uber for doorstep items delivery.",
    slug: slugify("sendey", { lower: true }),
    images: [
      images.logistics1,
      images.logistics2,
      images.logistics3,
      images.logistics4,
      images.logistics5,
      images.logistics6,
    ],
    stack: "JavaScript, React Native, Expo",
    live: "",
    github: "https://github.com/BowaDAO/logisticsmobileapp",
  },

  {
    id: "7",
    image: images.ternmobile1,
    title: "TernHub Mobile App",
    description:
      "A job platform for newbies in the tech industry to discover latest internship opportunities and junior roles.",
    slug: slugify("ternhub mobile app", { lower: true }),
    images: [
      images.ternmobile1,
      images.ternmobile2,
      images.ternmobile3,
      images.ternmobile4,
      images.ternmobile5,
      images.ternmobile6,
      images.ternmobile7,
      images.ternmobile8,
      images.ternmobile9,
      images.ternmobile10,
      images.ternmobile11,
      images.ternmobile12,
      images.ternmobile13,
      images.ternmobile14,
    ],
    stack: "TypeScript, React Native, Expo, Firebase, Redux",
    live: "",
    github: "https://github.com/BowaDAO/ternhubmobile",
  },
];

export const socials: SocialsType[] = [
  {
    id: "1",
    url: "https://github.com/BowaDAO",
    label: "GitHub",
  },
  {
    id: "2",
    url: "https://www.twitter.com/Oluwanbowa",
    label: "Twitter",
  },
  {
    id: "3",
    url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/",
    label: "LinkedIn",
  },
  {
    id: "4",
    url: "https://oluwanbowa.substack.com/",
    label: "Substack",
  },
];
