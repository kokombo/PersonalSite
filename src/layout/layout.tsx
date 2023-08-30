import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Layout;
