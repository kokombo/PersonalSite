import { Link, NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar = () => {
  return (
    <nav className="dark:bg-black bg-white flex justify-evenly py-6">
      <div>
        <Link
          to="/"
          className="dark:text-secondary text-black font-NeutonRegular text-lg hover:underline "
        >
          Home
        </Link>
      </div>

      <div className="dark:text-secondary text-black flex gap-10 items-center font-NeutonRegular text-lg">
        <NavLink to="/about" className={"hover:underline"}>
          About
        </NavLink>

        <NavLink to="/resume" className={"hover:underline"}>
          Resume
        </NavLink>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavigationBar;
