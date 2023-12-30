import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";
import { Dispatch, SetStateAction } from "react";

type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  toggleDarkMode: () => void;
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");

  if (theme) {
    return JSON.parse(theme);
  } else {
    return [];
  }
};

const valueFromStorage = getThemeFromLocalStorage();

type DefaultStateType = {
  darkMode: boolean;
};

const defaultState: DefaultStateType = {
  darkMode: valueFromStorage,
};

const AppContext = createContext<GlobalContextType | null>(null);

export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);

  if (context) {
    return context;
  } else {
    return null;
  }
};
