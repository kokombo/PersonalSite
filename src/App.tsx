import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, ProjectDetail } from "./pages";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="/projects/:slug" Component={ProjectDetail} />
        </Route>

        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
