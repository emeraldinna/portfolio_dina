import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Menu from "../components/Menu";

const MainLayout = () => {
  return (
    <Fragment>
        <Menu />
        <Outlet />
    </Fragment>
  )
}

export default MainLayout;