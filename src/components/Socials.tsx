import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-gray font-NeutonRegular">
      <Link to="" className="hover:underline hover:scale-110">
        GitHub
      </Link>
      <Link to="" className="hover:underline hover:scale-110">
        Twitter
      </Link>
      <Link to="" className="hover:underline hover:scale-110">
        LinkedIn
      </Link>
      <Link to="" className="hover:underline hover:scale-110">
        Substack
      </Link>
    </div>
  );
};

export default Socials;
