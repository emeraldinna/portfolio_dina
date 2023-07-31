import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const SinglePhotoProject = () => {
    const location = useLocation();
    const { project } = location.state;
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <Container className="mt-5">
            <Row className="mb-4 justify-content-center">
                <Col key={project.id} xs={11} sm={12} md={8} lg={6} xl={6} xxl={4} className="px-1 py-1 justify-content-center" >
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
            </Row>
            <Row className="mb-4 justify-content-center">
                <div>
                    <h2 className="text-uppercase fw-bold" style={{ fontFamily: 'Oswald-SemiBold' }}>
                        {project.title}
                    </h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority 
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
        </Container>
    )
}

export default SinglePhotoProject;