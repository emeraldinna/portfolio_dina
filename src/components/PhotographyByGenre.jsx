import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/photos.json';
import PhotoOverlay from './PhotoOverlay';

const PhotographyByGenre = () => {
    const { genre } = useParams();
    const [projects, setProjects] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredProjects = data.filter((project) => project.genre === genre);
        setProjects(filteredProjects);
    }, [genre]);

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImageOverlay = (index) => {
        const selectedProject = projects[index];
        if (selectedProject.kind === "individual") {
            setSelectedImageIndex(index);
        } else if (selectedProject.kind === "project" && selectedProject.parentProjectId) {
            navigate(`/photography/${selectedProject.genre}/${selectedProject.parentProjectId}`, { state: { parentProjectId: selectedProject.parentProjectId } });
        } else if (selectedProject.kind === "project") {
            navigate(`/photography/${selectedProject.genre}/${selectedProject.id}`, { state: { project: selectedProject } });
        }
    };

    const closeImageOverlay = () => {
        setSelectedImageIndex(null);
    };

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                {projects !== null && projects.map((project, index) => (
                    <Col key={index} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
                        <div
                            style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
                            onClick={() => openImageOverlay(index)}
                        >
                            <Image
                                src={`https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/photography-page/${project.mainImage}`}
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
                />
            )}
        </Container>
    )
}

export default PhotographyByGenre;

// xs={11} sm={10} md={5} lg={5} xl={4} xxl={4}