import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";

const VisitSubstack = () => {
  return (
    <div className="flex items-center justify-center gap-2 underline md:text-lg text-base hover:scale-110 hover:text-secondary font-NeutonRegular">
      <Link
        to="https://oluwanbowa.substack.com/"
        target="_blank"
        aria-label="visit my substack"
      >
        Visit my substack{" "}
      </Link>

      <RiExternalLinkLine />
    </div>
  );
};

export default VisitSubstack;
