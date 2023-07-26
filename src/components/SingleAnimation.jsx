import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

const SingleAnimation = () => {
    const location = useLocation();
    // console.log(location);
    const { project } = location.state;
    // console.log(project);

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                {project.videos.map((video, index) => (
                    <Col key={index} className="py-4" xs={12} xl={6} md={8}>
                        <div
                            style={{ position: 'relative', width: '100%', height: '300px' }} 
                        >
                            <ReactPlayer
                                url={video.url}
                                width="100%"
                                height="100%"
                                controls
                                loop
                                muted
                                volume={0.5}
                                playsinline
                                allowFullScreen
                            />
                        </div>
                    </Col>
                ))}
            </Row>
            <Row className="mb-4 justify-content-center" style={{ textAlign: 'left' }}>
                    <div><h2 className="fw-bold" style={{ fontFamily: 'Oswald-SemiBold' }}>{project.title}</h2></div>
                    <div>{project.description}</div>
            </Row>
        </Container>
    );
}

export default SingleAnimation;