import { Link } from "react-router-dom";
import { useState } from "react";
import { IconsType } from "../types/types";
import { iconsData } from "../constant/data";

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
            className="hover:text-secondary"
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
