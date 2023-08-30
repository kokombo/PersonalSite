import { useGlobalContext } from "../context/Provider";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const { toggleDarkMode, darkMode } = useGlobalContext();
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
    </button>
  );
};

export default ThemeSwitch;
