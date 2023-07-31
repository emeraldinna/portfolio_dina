import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data/photos.json'; 

const PhotographyByGenre = () => {
    const { genre } = useParams();
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        const filteredProjects = data.filter((project) => project.genre === genre && project.kind === 'project');
        setProjects(filteredProjects);
    }, [genre]);

    console.log(projects);

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                {projects !== null && projects.map(project => (
                    <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center">
                        <div
                            style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
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
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PhotographyByGenre;