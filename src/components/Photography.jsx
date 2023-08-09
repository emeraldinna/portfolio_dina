import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/photos.json';
import Overlay from './Overlay';

const Photography = () => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleClick = (project) => {
    if (project.kind === "individual") {
      setSelectedProject(project);
    } else if (project.parentProjectId) {
      navigate(`/photography/assignments/${project.parentProjectId}`, {
        state: { parentProjectId: project.parentProjectId }
      });
    } else {
      navigate(`/photography/${project.genre}/${project.id}`, { state: {project} });
      // photography/:genre/:id
    }
  }

  const handleOverlayClose = () => {
    setSelectedProject(null);
  }

  return (
      <Container className="mt-5">
        <Row className="mb-4 justify-content-center">
          {data.map(project => (
            <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
              <div
              style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
              onClick={() => handleClick(project) }
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={`/images/photography-page/${project.mainImage}`}
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
          />
        )}        
      </Container>
  );
}

export default Photography;

// <Fragment>
//   <div className="hero-wrapper">
//     <div className="hero-overlay" />
//     <Image className="hero-image" src="/baner-photography-test.jpg" fluid />
//   </div>
// </Fragment>