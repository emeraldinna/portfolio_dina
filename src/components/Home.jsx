import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import data from '../data/mainProjects.json';
import Overlay from './Overlay';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  }

  const handleOverlayClose = () => {
    setSelectedProject(null);
  }

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  }

  const handleMouseLeave = () => {
    setHoveredProject(null);
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4 justify-content-center">
        {data.map(project => (
          <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1">
            <div
              style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
              onClick={() => handleClick(project)}
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
      {selectedProject && (
        <Overlay
          project={selectedProject}
          onClose={handleOverlayClose}
          imageFolderPath="/images/home-page/"
        />
      )}
    </Container>
  );
};

export default Home;


