import { Outlet } from "react-router-dom";
import { NavigationBar, ScrollTop } from "../components";
import { Footer } from "../containers";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;
