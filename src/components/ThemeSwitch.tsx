import { useGlobalContext } from "../context/Provider";
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const { toggleDarkMode, darkMode } = useGlobalContext();
  return (
    <button onClick={toggleDarkMode}>
      {/* {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />} */}
      {darkMode ? <p className="text-white">Light Mode</p> : <p>Dark Mode</p>}
    </button>
  );
};

export default ThemeSwitch;
