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
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
    slug: slugify("Bowal Mobile App", { lower: true }),
  },
  {
    id: 2,
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
    slug: slugify("Bowal Mobile App", { lower: true }),
  },
  {
    id: 3,
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
    slug: slugify("Bowal Mobile App", { lower: true }),
  },
  {
    id: 4,
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
    slug: slugify("Bowal Mobile App", { lower: true }),
  },
  {
    id: 5,
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
    slug: slugify("Bowal Mobile App", { lower: true }),
  },
];
