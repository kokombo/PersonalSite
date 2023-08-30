import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useGlobalContext } from "./context/Provider";
import { Home, About, Resume } from "./pages";
import Layout from "./layout/layout";

const App = () => {
  const { darkMode } = useGlobalContext();

  return (
    <div className={`${darkMode && "dark"}`}>
      <BrowserRouter>
        <Routes>
          <Route index Component={Layout} />
          <Route path="/" Component={Home} />
          <Route path="about" Component={About} />
          <Route path="resume" Component={Resume} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
