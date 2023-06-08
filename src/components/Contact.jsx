import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Contact = () => {
  return (
    <Container>
      <h1 className="text-uppercase fw-bold" style={{ fontFamily: 'Oswald-SemiBold' }}>Let's get in touch</h1>
      <p className="pb-5 fs-5 text fw-semibold" style={{ fontFamily: 'Oswald-Light' }}>If you have any questions do not hesitate to contact me!</p>
      <Row>
        <Col className="mb-5" xs={12} xl={6} md={6}>
          <Image src="/images/dina_contacts.jpg" rounded style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
        </Col>
        <Col xs={12} xl={6} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Subject</option>
              <option value="phootography">Photography</option>
              <option value="animation">Animation</option>
              <option value="price">Send a price</option>
              <option value="other">Other</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={6} placeholder="Message" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-end">
              <Button variant="outline-secondary" type="submit" className="px-4" style={{ borderColor: "#ced4da" }}>Send</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;