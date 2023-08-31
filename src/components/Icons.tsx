import { Link } from "react-router-dom";
import { useState } from "react";

import { ReactNode } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export interface IconsType {
  icon: ReactNode;
  url: string;
  name: string;
}

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

const Icons = () => {
  const [icons] = useState<IconsType[]>(iconsData);

  return (
    <div className="flex flex-row text-2xl items-center gap-4">
      {icons.map((item, index) => {
        const { icon, url, name } = item;
        return (
          <Link
            to={url}
            target="_blank"
            key={index}
            className=" "
            aria-label={name}
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Icons;
