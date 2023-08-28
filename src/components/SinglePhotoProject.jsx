import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PhotoOverlay from './PhotoOverlay';
import data from '../data/photos.json';

const SinglePhotoProject = () => {
    const location = useLocation();
    const { project, parentProjectId } = location.state;
    // console.log(project);
    // console.log(parentProjectId);

    const parentProject = data.find(project => project.id === parseInt(parentProjectId));
    // console.log(parentProject);

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImageOverlay = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImageOverlay = () => {
        setSelectedImageIndex(null);
    };

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                {(project ? project.related : parentProject.related).map((item, index) => (
                    <Col key={index} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center" >
                        <div
                            style={{ height: '300px', overflow: 'hidden', position: 'relative' }}
                            onClick={() => openImageOverlay(index)}
                        >
                            <Image
                                src={`https://d2nc74wuj3tc6t.cloudfront.net/media/1/images/photography-page/${item.smallSource}`}
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
            <Row className="mb-4 justify-content-center">
                <div>
                    <h2 className="text-uppercase fw-bold" style={{ fontFamily: 'Oswald-SemiBold' }}>
                        {(project ? project.title : parentProject.title)}
                    </h2>
                    <p style={{ textAlign: 'left' }}>{(project ? project.description : parentProject.description)}</p>
                    <p style={{ textAlign: 'left' }}>There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words which 
                        don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
                        you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin 
                        words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
                        looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, 
                        injected humour, or non-characteristic words etc.
                    </p>
                </div>
                <div className="mb-4" />
                <Button variant="link" style={{ color: 'black', textAlign: 'left' }} onClick={handleGoBack}>Go back</Button>
            </Row>
            {selectedImageIndex !== null && (
                <PhotoOverlay
                    images={(project ? project.related : parentProject.related)}
                    activeIndex={selectedImageIndex}
                    setActiveIndex={setSelectedImageIndex}
                    onClose={closeImageOverlay}
                />
            )}
        </Container>
    )
}

export default SinglePhotoProject;