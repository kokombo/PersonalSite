import { Icons } from "../components";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";

const Header = () => {
  return (
    <header className=" flex justify-center items-center py-8 md:py-12">
      <div className="dark:text-gray text-black flex flex-col items-center text-center gap-4 ">
        <h1 className="text-xl md:text-2xl font-NeutonBold">Hi, I'm Samuel</h1>

        <article className="flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-6xl font-NeutonRegular max-w-[800px] ">
            Software Developer with experience building web and mobile
            applications.
          </h2>
          <Icons />
        </article>

        <div className="mt-[30px] flex flex-col gap-6">
          <button className="flex items-center border-[1px] border-gray dark:bg-grey py-4 px-10 gap-2 rounded-sm hover:scale-105 md:text-xl text-lg font-NeutonRegular">
            <Link to="" className=" rounded-sm ">
              Send an email
            </Link>
            <MdMarkEmailRead />
          </button>

          <div className="flex items-center justify-center gap-2 underline md:text-lg text-base hover:scale-110 hover:text-secondary font-NeutonRegular">
            <Link to="">Visit my substack </Link>
            <RiExternalLinkLine />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
