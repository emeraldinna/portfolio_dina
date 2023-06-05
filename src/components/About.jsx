import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <Container style={{ textAlign: 'left' }}>
      <Row>
        <Col className="mb-5" xs={12} xl={4} md={6}>
          <Image src="/images/dina_about.jpg" rounded style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
        </Col>
        <Col xs={12} xl={8} md={6}>
          <p>Hi! I'm Dina Berkgaut, a photographer and animator based in Stockholm.</p>
          <p>By nature, I'm an observant and friendly person. (I am a benevolent observer by nature.)
            For me, photography is a way to capture a moment and preserve memories of the beauty of
            everyday life.  I love using my skills to tell stories and convey genuine emotions through
            my work. One of my favourite subjects to photograph is people, capturing their individuality
            and uniqueness in my portraits. I love photographing people at work, talking, and walking,
            and I am very fond of details. I enjoy cities and forests, desolate places and train stations,
            old things and innovations, reflections and textures - anything that I can feel the breath
            of history behind.</p>
          <p>I grew up on the Baltic Sea, and my artistic vision is in some way shaped by the love
            for the subdued northern beauty and the Mediterranean temperament inherited from my ancestors.</p>
          <p>As an animator and visual composer, I have worked on TV series, advertisements, educational
            animation, and computer games.</p>
          <p>If you have any further questions, please don't hesitate to get in touch.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About;