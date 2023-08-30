import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./context/Provider";

const App = () => {
  const darkMode = useGlobalContext();

  return (
    <div className={`${darkMode && "dark"}`}>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
