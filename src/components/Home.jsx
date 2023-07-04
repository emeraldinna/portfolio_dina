import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import data from '../data/mainProjects.json';

const Home = () => {
  return (
    <Container>
    <h1 className="mb-5 text-uppercase" style={{ fontFamily: 'Oswald-SemiBold' }}>Portfolio</h1>
    <Row className="mb-4">
      {data.map(project => (
        <Col key={project.id} xs={12} md={6} lg={4} className="px-1 py-1">
          <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
            <Image
              src={`/images/home-page/${project.source}`}
              fluid
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: '0',
                left: '0',
              }}
            />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Home;

// <Container>
// <h1 className="mb-5 text-uppercase" style={{ fontFamily: 'Oswald-SemiBold' }}>Portfolio</h1>
// <Row className="mb-2">
//   {data.map(project => (
//     <Col key={project.id} xs={12} md={6} xl={4} className="mx-auto px-1 py-1">
//       <div className="image-container">
//         <Image src={`/images/home-page/${project.source}`} fluid />
//       </div>
//     </Col>
//   ))}
// </Row>
// </Container>