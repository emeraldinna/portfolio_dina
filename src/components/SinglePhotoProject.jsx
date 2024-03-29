import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PhotoOverlay from './PhotoOverlay';
import { Fragment } from 'react';
import data from '../data/photos.json';
import Spinner from 'react-bootstrap/Spinner';
import { BASE_URL } from '../config';

const SinglePhotoProject = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (location.state && location.state.project) {
                setProject(location.state.project);
                setIsLoading(false);
            } else {
                const projectId = location.pathname.split('/').pop();
                const foundProject = data.find((proj) => proj.id.toString() === projectId);

                if (foundProject && foundProject.kind === 'project') {
                    setProject(foundProject);
                    setIsLoading(false);
                } else {
                    navigate('/photography/not-found');
                }
            }
        };

        fetchData();
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

    const handleGoBack = () => {
        navigate(-1);
    };

    const openImageOverlay = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImageOverlay = () => {
        setSelectedImageIndex(null);
    };

    const goBackButton = (
        <Button variant='link' style={{ color: 'black', textAlign: 'left' }} onClick={handleGoBack}>
          Go back
        </Button>
    );

    return (
        <Fragment>
            {project && (
                <div className='hero-wrapper'>
                    <div className='hero-overlay' />
                    <Image className='hero-image' src={project.banner} fluid />
                </div>
            )}
            <Container className='mt-5 px-0'>
                <Row className='mb-4'>
                    <Col xs={12} md={10} className='mb-4 mb-md-0'>
                        <h1 className='fw-bold' style={{ fontFamily: 'Oswald-SemiBold', textAlign: 'left' }}>
                            {project ? project.title : ''}
                        </h1>
                    </Col>
                    <Col xs={12} md={2} className='d-flex justify-content-md-end align-items-center' style={{ paddingLeft: '0px' }}>
                        {goBackButton}
                    </Col>
                    <Col xs={12} className='mt-4'>
                        <p style={{ textAlign: 'left' }}>{project ? project.summary : ''}</p>
                    </Col>
                    {project && project.link && (
                        <a href={project.link} target='_blank' rel='noopener noreferrer' style={{  textAlign: 'left', textDecoration: 'none' }}>
                            <p>{project.linkDescription || "Official Website"}</p>
                        </a>
                    )}
                </Row>    

                <Row className='mb-4 mx-0 justify-content-center'>
                    {project && project.related.map((item, index) => (
                        <Col key={index} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className='px-1 py-1 justify-content-center' >
                            <div
                                style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
                                onClick={() => openImageOverlay(index)}
                            >
                                <Image
                                    src={`${BASE_URL}/images/photography-page/${item.smallSource}`}
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
                                    alt={item.alt}
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className='mb-4 justify-content-center'>
                    <div style={{ textAlign: 'left', paddingLeft: '0' }} >
                        {project && project.description && <p style={{ textAlign: 'left' }}>{project.description}</p>}
                        <div className='mb-4' />
                        {goBackButton}
                    </div>
                </Row>    
                {selectedImageIndex !== null && (
                    <PhotoOverlay
                        images={project ? project.related : []}
                        activeIndex={selectedImageIndex}
                        setActiveIndex={setSelectedImageIndex}
                        onClose={closeImageOverlay}
                        imageFolderPath={`${BASE_URL}/images/photography-page/`}
                    />
                )}
            </Container>
        </Fragment>
    )
}

export default SinglePhotoProject;