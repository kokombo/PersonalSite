import { Icons } from "../components";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";

const Header = () => {
  return (
    <header className=" flex justify-center items-center py-12 md:py-20 mt-20 md:mt-12">
      <div className="text-gray flex flex-col items-center text-center gap-4 ">
        <h1 className="text-xl md:text-2xl font-NeutonBold">Hi, I'm Samuel.</h1>

        <article className="flex flex-col items-center text-center gap-8">
          <h2 className="text-4xl md:text-6xl font-NeutonRegular max-w-[800px] ">
            Software Developer who enjoys building web and mobile applications.
          </h2>
          <p className="md:text-lg text-base font-NeutonRegular">
            I love shipping solutions and working on the business side of
            things!
          </p>
          <Icons />
        </article>

        <div className="mt-[30px] flex flex-col gap-6">
          <button className="flex items-center border-[1px] border-gray bg-grey py-4 px-10 gap-2 rounded-sm hover:scale-105 md:text-xl text-lg font-NeutonRegular">
            <Link
              to="mailto:samuelibrahim3029@gmail.com"
              className=" rounded-sm "
              aria-label="send me an email"
            >
              Send an email
            </Link>
            <MdMarkEmailRead />
          </button>

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
        </div>
      </div>
    </header>
  );
};

export default Header;
