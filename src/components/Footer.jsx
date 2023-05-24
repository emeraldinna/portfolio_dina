import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import { FaFlickr } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaVimeoSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const iconStyle = {color: "black", size: "24px"};
const styles = {
    margin: "auto",
    position: "relative",
    bottom: "0",
    width: "100%"
}

const Footer = () => {
  return (
    <div style={styles} className="pt-5">
        <Container>
            <Row className="mb-3">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://www.linkedin.com/in/dinaberkgaut/">
                            <IconContext.Provider value={iconStyle}>
                                < FaLinkedin />
                            </IconContext.Provider>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://www.instagram.com/dortndortn/">
                            <IconContext.Provider value={iconStyle}>
                                < FaInstagramSquare />
                            </IconContext.Provider>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://www.flickr.com/photos/cangaroo/collections">
                            <IconContext.Provider value={iconStyle}>
                                < FaFlickr />
                            </IconContext.Provider>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://vimeo.com/dortndortn">
                            <IconContext.Provider value={iconStyle}>
                                < FaVimeoSquare />
                            </IconContext.Provider>
                        </Nav.Link>
                    </Nav.Item>                                                                
                </Nav>
            </Row>
            <Row className="pb-0">
                <p className="fs-5 fw-bold">test@gmail.com</p>
            </Row>
            <Row className="pb-0">
                <p>All works © Dina Berkgaut</p>
            </Row>
            <Row className="pb-0">
                <p>Website created by Inna Dyachkova</p>
            </Row>        
        </Container>
    </div>    
  )
}

export default Footer;