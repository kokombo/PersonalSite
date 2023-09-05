import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home, About, Resume } from "./pages";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={Home} />
          <Route path="about" Component={About} />
          <Route path="resume" Component={Resume} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
