import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/animations.json';

const Animation = () => {
  
  return (
    <Fragment>
      <div className="hero-wrapper">
        <div className="hero-overlay" />
        <Image className="hero-image" src="/baner-animation-test.jpg" fluid />
      </div>
      <Container className="mt-5">
        <Row className="mb-4">
          {data.map(project => (
            <Col key={project.id} xs={12} md={6} lg={4} className="px-1 py-1">
              <div
                style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
              >
                <Image
                  src={`/images/home-page/${project.source}`}
                  fluid
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Animation;