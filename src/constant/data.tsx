import { ReactNode } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export interface IconsType {
  icon: ReactNode;
  url: string;
  name: string;
}

export const icons: IconsType[] = [
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
