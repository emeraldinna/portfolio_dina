import { useState } from 'react';
import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/photos.json';

const Photography = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    if (project.title !== "") {
      setHoveredProject(project);
    } 
    else {
      setHoveredProject(null);
    }
  }

  const handleMouseLeave = () => {
    setHoveredProject(null);
  }

  return (
    <Fragment>
      <div className="hero-wrapper">
        <div className="hero-overlay" />
        <Image className="hero-image" src="/baner-photography-test.jpg" fluid />
      </div>
      <Container className="mt-5">
        <Row className="mb-4 justify-content-center">
          {data.map(project => (
            <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
              <div
              style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={`/images/home-page/${project.smallSource}`}
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
                {hoveredProject === project && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      background: 'rgba(0, 0, 0, 0.8)',
                      color: '#fff',
                      padding: '8px',
                      textAlign: 'center',
                    }}
                  >
                    {project.title}
                  </div>
                )}                
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Photography;