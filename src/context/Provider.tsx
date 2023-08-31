import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
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

const defaultState = {
  darkMode: getThemeFromLocalStorage,
};

const AppContext = createContext<GlobalContextType | null>(null);

export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
  if (!context) {
    throw new Error("error");
  }
  return context;
};
