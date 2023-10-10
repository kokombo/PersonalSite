import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";
import { Footer } from "../containers";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
