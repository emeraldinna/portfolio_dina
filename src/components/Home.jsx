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
    <Container>
      <h1 className="mb-5 text-uppercase" style={{ fontFamily: 'Oswald-SemiBold' }}>Portfolio</h1>
      <Row className="mb-4">
        {data.map(project => (
          <Col key={project.id} xs={12} md={6} lg={4} className="px-1 py-1">
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
        />
      )}
    </Container>
  );
};

export default Home;

// <Container>
// <h1 className="mb-5 text-uppercase" style={{ fontFamily: 'Oswald-SemiBold' }}>Portfolio</h1>
// <Row className="mb-4">
//   {data.map(project => (
//     <Col key={project.id} xs={12} md={6} lg={4} className="px-1 py-1">
//       <div
//         style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
//         onClick={() => handleClick(project.largeSource)}
//         onMouseEnter={() => handleMouseEnter(project)}
//         onMouseLeave={handleMouseLeave}
//       >
//         {project.type === 'photo' ? (
//           <Image
//             src={`/images/home-page/${project.smallSource}`}
//             fluid
//             style={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               position: 'absolute',
//               top: '0',
//               left: '0',
//               cursor: 'pointer',
//             }}
//           />
//         ) : (
//           <ReactPlayer
//             src={`/images/home-page/${project.smallSource}`}
//             url={project.videoUrl}
//             light={true}
//             height={'300px'}
//             width={'inherit'}
//             style={{
//               objectFit: 'cover',
//               cursor: 'pointer',
//             }}
//             className="custom-react-player"
//           />
//         )}
//         {hoveredProject === project && (
//           <div
//             style={{
//               position: 'absolute',
//               bottom: '0',
//               left: '0',
//               width: '100%',
//               background: 'rgba(0, 0, 0, 0.8)',
//               color: '#fff',
//               padding: '8px',
//               textAlign: 'center',
//             }}
//           >
//             {project.title}
//           </div>
//         )}
//       </div>
//     </Col>
//   ))}
// </Row>
// {selectedProject && (
//   <Overlay
//     projectSrc={`/images/home-page/${selectedProject}`}
//     onClose={handleOverlayClose}
//   />
// )}
// </Container>

