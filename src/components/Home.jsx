import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import data from '../data/mainProjects.json';
import PhotoOverlay from './PhotoOverlay';

const Home = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(data);
  }, []);

  const openImageOverlay = (index) => {
    const selectedProject = projects[index];
    if (selectedProject) {
      setSelectedImageIndex(index);
    }
  };

  const closeImageOverlay = () => {
    setSelectedImageIndex(null);
  };

  return (
    <Container className='mt-5 px-0'>
      <Row className='mb-4 mx-0 justify-content-center'>
        {projects && projects.map((project, index) => (
          <Col key={index} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className='px-1 py-1'>
            <div
              style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
              onClick={() => openImageOverlay(index)}
            >
              <Image
                src={`https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/home-page/${project.smallSource}`}
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
      {selectedImageIndex !== null && (
        <PhotoOverlay
          images={projects}
          activeIndex={selectedImageIndex}
          setActiveIndex={setSelectedImageIndex}
          onClose={closeImageOverlay}
          imageFolderPath='https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/home-page/'
        />
      )}
    </Container>
  );
};

export default Home;

