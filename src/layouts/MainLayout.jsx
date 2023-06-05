import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';

const MainLayout = () => {

  return (
    <Fragment>
      <Menu />
      <Container style={{marginTop: '150px'}}>
        <Outlet />
      </Container>
      <Footer />
    </Fragment>
  )
}

export default MainLayout;