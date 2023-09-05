import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Resume, ProjectDetail } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="resume" Component={Resume} />
        <Route path="/projects/:slug" Component={ProjectDetail} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
