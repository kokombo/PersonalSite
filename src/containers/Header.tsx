import { Icons } from "../components";
import { Link } from "react-router-dom";
import { RiExternalLinkLine } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";

const Header = () => {
  return (
    <header className="dark:bg-black bg-white h-screen w-full flex justify-center px-[6.94%]">
      <div className="dot-background">
        <div className="dark:text-secondary text-black flex flex-col items-center text-center gap-4 mt-[200px]">
          <h1 className="text-2xl font-NeutonBold">Hi, I'm Samuel</h1>

          <article className="flex flex-col items-center gap-8">
            <h2 className="text-5xl font-NeutonRegular dark:text-secondary text-black max-w-[800px] ">
              Software Developer with experience building web and mobile
              applications.
            </h2>
            <Icons />
          </article>

          <div className="mt-[30px] flex flex-col gap-6">
            <button className="flex items-center border-[1px] border-gray dark:bg-grey py-4 px-10 gap-2 rounded-sm hover:scale-105 text-base">
              <Link
                to=""
                className=" rounded-sm dark:text-secondary text-black "
              >
                Send an email
              </Link>
              <MdMarkEmailRead />
            </button>

            <div className="flex items-center justify-center gap-2 underline text-sm hover:text-gray">
              <Link to="">Visit my substack </Link>
              <RiExternalLinkLine />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
