import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';

const SingleAnimation = () => {
    const location = useLocation();
    const { project } = location.state;
    // console.log(project);
    const markup = { __html: project.description };

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                {project.videos.map((video, index) => (
                    <Col key={index} xs={12} sm={12} md={10} lg={8} xl={6} xxl={6} className="py-4">
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
                    <div dangerouslySetInnerHTML={markup}  className="mb-4"/>
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><p>Official YouTube channel</p></a>}
            </Row>
        </Container>
    );
}

export default SingleAnimation;