import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import data from '../data/animations.json';
import Spinner from 'react-bootstrap/Spinner';

const SingleAnimation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (location.state && location.state.project) {
            setProject(location.state.project);
            setIsLoading(false);

        } else {
            const projectId = location.pathname.split('/').pop();
            const foundProject = data.find((proj) => proj.id.toString() === projectId);

            if (foundProject) {
                setProject(foundProject);
                setIsLoading(false);
            } else {
                navigate('/animation');
            }
        }
    }, [location.state, location.pathname, navigate]);

    if (isLoading) {
        return (
            <Container className='mt-5'>
                <Spinner animation='border' variant='secondary' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </Container>
        );
    }

    const markup = { __html: project.description };

    const handleGoBack = () => {
        navigate(-1);
    }

    const goBackButton = (
        <Button variant='link' style={{ color: 'black', textAlign: 'left' }} onClick={handleGoBack}>
          Go back
        </Button>
    );

    return (
        <Container className='mt-5'>
            <Row className='mb-4'>
                <Col xs={12} md={10} className='mb-4 mb-md-0'>
                    <h1 className='fw-bold' style={{ fontFamily: 'Oswald-SemiBold', textAlign: 'left' }}>
                        {(project && project.title)}
                    </h1>
                </Col>
                <Col xs={12} md={2} className='d-flex justify-content-md-end align-items-center' style={{ paddingLeft: '0px' }}>
                    {goBackButton}
                </Col>
                <Col xs={12} className='mt-4'>
                    <p style={{ textAlign: 'left' }}>{(project && project.summary)}</p>
                </Col>
                {project.link && <a href={project.link} target='_blank' rel='noopener noreferrer' style={{  textAlign: 'left', textDecoration: 'none' }}><p>{project.linkDescription || "Official YouTube channel"}</p></a>}
            </Row>
            <Row className='mb-4 justify-content-center'>
                {project.videos.map((video, index) => (
                    <Col key={index} xs={12} sm={12} md={10} lg={8} xl={6} xxl={6} className='py-4'>
                        <div
                            style={{ position: 'relative', width: '100%', height: '300px' }}
                        >
                            <ReactPlayer
                                url={video.url}
                                width='100%'
                                height='100%'
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
            <Row className='mb-4 justify-content-center' style={{ textAlign: 'left' }}>
                <div dangerouslySetInnerHTML={markup} className='mb-4' />
                {project['drafts-section'] && typeof project['drafts-section'] === 'object' && Object.keys(project['drafts-section']).length > 0 && (
                    <div className='mt-4'>
                        <h3 style={{ textAlign: 'center', textDecoration: 'underline', fontFamily: 'Oswald-SemiBold' }}>Drafts</h3>
                        {project['drafts-section'] && (
                            <div className='mt-4'>
                                {project['drafts-section']['drafts'] && (
                                    <div className='grid-container py-4'>
                                        {project['drafts-section']['drafts'].map((draft, index) => (
                                            <div key={index}>
                                                <ReactPlayer
                                                    url={draft.url}
                                                    width='100%'
                                                    height='300px'
                                                    controls
                                                    loop
                                                    muted
                                                    volume={0.5}
                                                    playsinline
                                                    allowFullScreen
                                                />
                                                <h5 style={{ fontFamily: 'Oswald-Light' }}>{draft.title}</h5>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p>{project['drafts-section']['general-text']}</p>
                            </div>
                        )}
                    </div>
                )}
                {goBackButton}
            </Row>
        </Container>
    );
}

export default SingleAnimation;