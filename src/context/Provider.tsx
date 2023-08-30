import { createContext, useContext, useState, PropsWithChildren } from "react";

type GlobalContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
};

const defaultState = {
  darkMode: false,
};

const AppContext = createContext<GlobalContextType | null>(null);

export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [darkMode, setDarkMode] = useState(defaultState.darkMode);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
