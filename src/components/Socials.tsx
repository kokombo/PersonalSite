import { Link } from "react-router-dom";
import { socials } from "../constant/data";

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-gray font-NeutonRegular">
      {socials?.map((social) => {
        const { id, url, label } = social;

        return (
          <Link
            key={id}
            to={url}
            className="hover:underline hover:scale-110"
            target="_blank"
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
