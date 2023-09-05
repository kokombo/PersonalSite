import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar = () => {
  return (
    <nav className="dark:bg-black bg-white  py-8 border-b-[1px] border-b-gray px-[6.94%] w-full ">
      <div className="dot-background flex justify-between">
        <div>
          <Link
            to="/"
            className="dark:text-gray text-black font-NeutonRegular text-lg hover:underline "
          >
            Home
          </Link>
        </div>

        <div className="flex gap-10 items-center  ">
          <NavLink
            to="/resume"
            className={
              "hover:underline dark:text-gray text-black  text-lg font-NeutonRegular"
            }
          >
            Resume
          </NavLink>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
