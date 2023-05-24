import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <Fragment>
        <Menu />
        <Outlet />
        <Footer />
    </Fragment>
  )
}

export default MainLayout;