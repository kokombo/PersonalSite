import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const NavigationBar = () => {
  return (
    <nav className="dark:bg-black bg-white flex justify-between">
      <div>
        <p className="dark:text-white text-black">Home</p>
      </div>

      <div className="dark:text-white text-black">
        <NavLink to="/about">About</NavLink>

        <NavLink to="/resume">Resume</NavLink>
      </div>
      <ThemeSwitch />
    </nav>
  );
};

export default NavigationBar;
