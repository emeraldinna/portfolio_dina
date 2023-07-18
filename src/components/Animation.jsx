import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/animations.json';
import { Fragment } from 'react';

const Animation = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  }

  const handleMouseLeave = () => {
    setHoveredProject(null);
  }

  const handleClick = (project) => {
    console.log(project);
    navigate(`/animation/${project.id}`, { state: { project} });
  }

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
                onClick={() => handleClick(project) }
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
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

export default Animation;