import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-black  lg:py-8 py-6 border-b-[1px] border-b-gray px-[6.94%] w-full ">
      <div className="dot-background flex justify-between">
        <div>
          <Link
            to="/"
            className="text-gray font-NeutonRegular text-lg hover:underline "
          >
            Home
          </Link>
        </div>

        <div className="flex gap-10 items-center  ">
          <NavLink
            to="https://drive.google.com/file/d/1yb9n6K34IQdJEHoui6tXxQmcM9I62m1h/view?usp=sharing"
            target="_blank"
            className="hover:underline text-gray  text-lg font-NeutonRegular"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
