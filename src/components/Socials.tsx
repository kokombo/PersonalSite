import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-gray font-NeutonRegular">
      <Link
        to="https://github.com/BowaDAO"
        className="hover:underline hover:scale-110"
        target="_blank"
      >
        GitHub
      </Link>
      <Link
        to="https://www.twitter.com/Oluwanbowa"
        className="hover:underline hover:scale-110"
        target="_blank"
      >
        Twitter
      </Link>
      <Link
        to="https://www.linkedin.com/in/samuel-ibrahim-84154818b/"
        className="hover:underline hover:scale-110"
        target="_blank"
      >
        LinkedIn
      </Link>
      <Link
        to="https://oluwanbowa.substack.com/"
        className="hover:underline hover:scale-110"
        target="_blank"
      >
        Substack
      </Link>
    </div>
  );
};

export default Socials;
