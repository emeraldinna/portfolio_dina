import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import data from '../data/animations.json';

const SingleAnimation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const { project } = location.state;
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (location.state && location.state.project) {
            setProject(location.state.project);
        } else {
            const projectId = location.pathname.split('/').pop();
            const foundProject = data.find((proj) => proj.id.toString() === projectId);

            if (foundProject) {
                setProject(foundProject);
            } else {
                navigate('/animation');
            }
        }
    }, [location.state, location.pathname, navigate]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const markup = { __html: project.description };

    const handleGoBack = () => {
        navigate(-1);
    }

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
                <div dangerouslySetInnerHTML={markup} className="mb-4" />
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><p>Official YouTube channel</p></a>}
                {project["drafts-section"] && typeof project["drafts-section"] === 'object' && Object.keys(project["drafts-section"]).length > 0 && (
                    <div className="mt-4">
                        <h3 style={{ textAlign: 'center', textDecoration: 'underline', fontFamily: 'Oswald-SemiBold' }}>Drafts</h3>
                        {project["drafts-section"] && (
                            <div className="mt-4">
                                {project["drafts-section"]["drafts"] && (
                                    <div className="grid-container py-4">
                                        {project["drafts-section"]["drafts"].map((draft, index) => (
                                            <div key={index}>
                                                <ReactPlayer
                                                    url={draft.url}
                                                    width="100%"
                                                    height="300px"
                                                    controls
                                                    loop
                                                    muted
                                                    volume={0.5}
                                                    playsinline
                                                    allowFullScreen
                                                />
                                                <h5 style={{ fontFamily: 'Oswald-ExtraLight' }}>{draft.title}</h5>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p>{project["drafts-section"]["general-text"]}</p>
                            </div>
                        )}
                    </div>
                )}
                <Button variant="link" style={{ color: 'black', textAlign: 'left', fontFamily: 'Oswald-Bold' }} onClick={handleGoBack}>Go back</Button>
            </Row>
        </Container>
    );
}

export default SingleAnimation;

// {project["drafts-section"] && typeof project["drafts-section"] === 'object' && Object.keys(project["drafts-section"]).length > 0 && (
//     <div className="mt-4">
//         <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Drafts:</h3>
//         {project["drafts-section"]["drafts"] && (
//             <Row className="mb-4 justify-content-center">
//                 {project["drafts-section"]["drafts"].map((draft, index) => (
//                     <Col key={index} xs={12} sm={12} md={10} lg={8} xl={5} xxl={5} className="py-4">
//                         <div>
//                             <ReactPlayer
//                                 url={draft.url}
//                                 width="100%"
//                                 height="300px"
//                                 controls
//                                 loop
//                                 muted
//                                 volume={0.5}
//                                 playsinline
//                                 allowFullScreen
//                             />
//                             <h5>{draft.title}</h5>
//                         </div>
//                     </Col>
//                 ))}
//                 <p>{project["drafts-section"]["general-text"]}</p>
//             </Row>
//         )}
//     </div>
// )}