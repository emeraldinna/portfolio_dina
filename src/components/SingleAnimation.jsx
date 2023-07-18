import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const SingleAnimation = () => {
    const location = useLocation();
    console.log(location);
    const project = location.state.project;
    console.log(project);

    return (
        <Container className="mt-5">
            <h2>Project #{project.id}</h2>
        </Container>
    );
}

export default SingleAnimation;