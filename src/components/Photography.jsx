import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Photography = () => {
  return (
    <Fragment>
      <div className="hero-wrapper">
        <div className="hero-overlay" />
        <Image className="hero-image" src="/baner-photography-test.jpg" fluid />
      </div>
      <Container className="mt-5">
        <Row className="mb-4 justify-content-center">
          <Col xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Photography;