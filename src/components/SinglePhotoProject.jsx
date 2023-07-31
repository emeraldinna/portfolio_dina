import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SinglePhotoProject = () => {
    const location = useLocation();
    const { project } = location.state;
    console.log(project);

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    {project.id} - {project.title}
                </Col>
            </Row>
        </Container>
    )
}

export default SinglePhotoProject;