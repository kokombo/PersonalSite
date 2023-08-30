import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <div>
        <p>Home</p>
      </div>

      <div>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavigationBar;
