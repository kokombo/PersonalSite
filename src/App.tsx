import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Resume, ProjectDetail } from "./pages";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="resume" Component={Resume} />
          <Route path="/projects/:slug" Component={ProjectDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
