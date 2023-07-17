import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
    },
  });

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const submitForm = (data, e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...data})
    })
      // .then(response => {
      //   console.log(response)
      // })
      .then(() => navigate('/success'))
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Container className="mt-5">
      <h1 className="text-uppercase fw-bold" style={{ fontFamily: 'Oswald-SemiBold' }}>Let's get in touch</h1>
      <p className="pb-5 fs-5 text fw-semibold" style={{ fontFamily: 'Oswald-Light' }}>If you have any questions do not hesitate to contact me!</p>
      <Row>
        <Col className="mb-5" xs={12} xl={6} md={6}>
          <Image src="/images/dina_contacts.jpg" rounded style={{ width: "100%", height: "auto", maxWidth: "100%" }} />
        </Col>
        <Col xs={12} xl={6} md={6}>
          <Form name="contact" method="POST" noValidate onSubmit={handleSubmit(submitForm)}>
            <input type="hidden" name="form-name" value="contact" />
            <Form.Group className="mb-3" controlId="validationInputName">
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Name"
                    isInvalid={errors.name}
                    name="name"
                  />
                )}
              />
              {errors.name && (
                <Form.Control.Feedback type="invalid">
                  Name is required
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationInputEmail">
              <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Email"
                    isInvalid={errors.email}
                    name="email"
                  />
                )}
              />
              {errors.email?.type === "pattern" && (
                <Form.Control.Feedback type="invalid">
                  Invalid email
                </Form.Control.Feedback>
              )}
              {errors.email?.type === "required" && (
                <Form.Control.Feedback type="invalid">
                  Email required
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationSubject">
              <Controller
                name="subject"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Form.Select
                    {...field}
                    aria-label="Select subject"
                    isInvalid={errors.subject}
                    name="subject[]"
                  >
                    <option value="">Subject</option>
                    <option value="photography">Photography</option>
                    <option value="animation">Animation</option>
                    <option value="price">Send a price</option>
                    <option value="other">Other</option>
                  </Form.Select>
                )}
              />
              {errors.subject && (
                <Form.Control.Feedback type="invalid">
                  Please select a subject
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="validationMessage">
              <Controller
                name="message"
                control={control}
                rules={{ required: true, minLength: 10, maxLength: 1000 }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    as="textarea"
                    rows={6}
                    placeholder="Message"
                    isInvalid={errors.message}
                    name="message"
                  />
                )}
              />
              {errors.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.message?.type === "required" && 'Please enter your message'}
                  {errors.message.type === 'minLength' && 'Message is too short'}
                  {errors.message.type === 'maxLength' && 'Message is too long'}
                </Form.Control.Feedback>
              )}
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