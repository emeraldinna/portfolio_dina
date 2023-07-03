import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import data from '../data/mainProjects.json';

const Home = () => {
  return (
    <Container>
      <h1 className="mb-5 text-uppercase" style={{ fontFamily: 'Oswald-SemiBold' }}>Portfolio</h1>
      <Row className="mb-2">
        {data.map(project => (
          <Col key={project.id} xs={12} md={6} xl={4} className="mx-auto px-1 py-1">
            <Image src={`/images/home-page/${project.source}`} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Home;

// <Col xs={12} md={6} xl={4} className="mx-auto px-1 py-1">
// <Image src="/images/home-page/02.jpg" />
// </Col>
// <Col xs={12} md={6} xl={4} className="mx-auto px-1 py-1">
// <Image src="/images/home-page/05.jpg" />
// </Col>