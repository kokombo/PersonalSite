import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar = () => {
  return (
    <nav className="dark:bg-black bg-white flex justify-evenly py-6 opacity-90">
      <div>
        <p className="dark:text-white text-black">Home</p>
      </div>

      <div className="dark:text-white text-black flex gap-10 items-center ">
        <NavLink to="/about">About</NavLink>

        <NavLink to="/resume">Resume</NavLink>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default NavigationBar;
