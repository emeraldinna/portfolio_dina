import Container from 'react-bootstrap/Container';

const Success = () => {
  return (
    <Container style={{marginTop: '150px'}}>
        <h1 style={{ fontFamily: 'Oswald-SemiBold' }}>Thank you for contacting me!</h1>
        <p className="pb-5 fs-5 text fw-semibold" style={{ fontFamily: 'Oswald-Light' }}>Your message has been successfully submitted. I appreciate your interest and will get back to you as soon as possible.</p>
    </Container>
  )
}

export default Success;