import { Link } from "react-router-dom";

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="">GitHub</Link>
      <Link to="">Twitter</Link>
      <Link to="">LinkedIn</Link>
      <Link to="">Substack</Link>
    </div>
  );
};

export default Socials;
