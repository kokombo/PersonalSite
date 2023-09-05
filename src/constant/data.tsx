import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { projectType } from "../types/types";
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
    id: 1,
    image: images.bowal1,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform that leverages geo-location technology to online buying and selling in Africa.",
    slug: slugify("Bowal Mobile App", { lower: true }),
    images: [
      images.bowal1,
      images.bowal2,
      images.bowal3,
      images.bowal4,
      images.bowal5,
      images.bowal6,
      images.bowal7,
      images.bowal8,
      images.bowal9,
      images.bowal10,
      images.bowal11,
      images.bowal12,
      images.bowal13,
      images.bowal14,
      images.bowal15,
      images.bowal16,
      images.bowal17,
      images.bowal19,
      images.bowal20,
      images.bowal21,
      images.bowal22,
      images.bowal23,
      images.bowal24,
    ],
    tools: "React Native, Redux, Firebase",
    live: "",
    github: "https://github.com/BowaDAO/BowalMobileApp",
  },
  {
    id: 2,
    image: images.beud1,
    title: "Beuder Tech Community",
    description:
      "A tech community connecting founders with tech experts to birth hundreds of innovative tech solutions out of Africa.",
    slug: slugify("Beuder Tech Community", { lower: true }),
    images: [images.beud1, images.beud3, images.beud4, images.beud5],
    tools: "ReactJS, Tailwind CSS",
    live: "https://beud.netlify.app",
    github: "https://github.com/BowaDAO/Beud",
  },
  {
    id: 3,
    image: images.ternhub1,
    title: "TheTernHub",
    description:
      "A job platform for newbies in the tech industry to discover latest internship opportunities and junior roles. ",
    slug: slugify("TheTernHub", { lower: true }),
    images: [images.ternhub1, images.ternhub2],
    tools: "ReactJS, Tailwind CSS, Redux, Firebase",
    live: "",
    github: "https://github.com/BowaDAO/The-Tern-Hub-Web-App",
  },
  {
    id: 4,
    image: images.textscrapper,
    title: "Text Extractor",
    description:
      "A simple web application for users to easily extract text from screenshots.",
    slug: slugify("Text Extractor", { lower: true }),
    images: [images.textscrapper],
    tools: "Tesseract.JS, React",
    live: "https://text-scrapper.netlify.app/",
    github: "https://github.com/BowaDAO/text-scrapper",
  },
  // {
  //   id: 5,
  //   image: images.bowal1,
  //   title: "Bowal Mobile App",
  //   description:
  //     "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  //   slug: slugify("Bowal Mobile App", { lower: true }),
  //   images: [],
  //   tools: "",
  // },
];
