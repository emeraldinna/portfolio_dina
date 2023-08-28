import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/animations.json';
import ReactPlayer from 'react-player';
// import { Fragment } from 'react';

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
    // console.log(project);
    if (project.type !== 'small-project') {
      navigate(`/animation/${project.id}`, { state: { project} });
    }
  }

  return (
      <Container className="mt-5">
        <Row className="mb-4 justify-content-center">
          {data.map(project => (
            <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
              <div
                style={{ 
                  height: '300px', 
                  overflow: 'hidden', 
                  position: 'relative', 
                }}
                onClick={() => handleClick(project) }
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={`https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/animation-page/${project.source}`}
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
                {project.type === 'small-project' && (
                  <ReactPlayer
                    url={project.source}
                    width="100%"
                    height="100%"
                    playing
                    loop
                    muted
                    volume={0.5}
                    playsinline
                    style={{
                      position: 'absolute',
                    }}
                  />
                )}
                {hoveredProject === project && project.alt && (
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
                    {project.alt}
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
  );
}

export default Animation;

// <Fragment>
//   <div className="hero-wrapper">
//     <div className="hero-overlay" />
//     <Image className="hero-image" src="/baner-animation-test.jpg" fluid />
//   </div>
// </Fragment>