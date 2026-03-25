import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { BASE_URL } from '../config';

const About = () => {
  return (
    <Container style={{ textAlign: 'left' }} className="mt-5 pt-5 px-0 container-about">
      <Row className="justify-content-center">
        <Col className="mb-5" xs={12} sm={12} md={9} lg={6} xl={5} xxl={5}>
          <Image src={`${BASE_URL}/images/DB-about.jpg`} rounded style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={7} xxl={7}>

          <p>Hi there, and thanks for stopping by! I'm Dina Berkgaut, a
          Stockholm-based photographer and animator!</p>

          <p>As a photographer, I see myself as a kind observer. I always take
          portraits, be it of a person, the street or the object in front of
          me. For me, everything in the world is endowed with individuality,
          and photography is a way to capture and preserve this as a memory. I
          love finding beauty in the mundane, so I prefer candid photography
          with a touch of magic, where I weave tales through portraits, family
          captures, and enchanting photo chronicles.</p>

          <p>As an animator, I am a great team player, excellent at thinking in
          terms of the entire project rather than just one specific animation,
          and very attentive to detail, both visually and in storytelling.
          Animation is a lifelong learning journey, and I constantly discover
          new things and enjoy sharing my knowledge with colleagues. My
          favourite projects involve creating content with emotional depth,
          especially for children's cartoons, educational programs, indie
          games, and advertisements. However, I'm not at all suited for games
          related to violence.</p>

          <p>Feel free to reach out if you're interested in my photography or
          animation services – I'm always excited to take on new projects and
          bring your visions to life!</p>

        </Col>
      </Row>
    </Container>
  )
}

export default About;