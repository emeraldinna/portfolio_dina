// import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IconContext } from 'react-icons';
import { FaFlickr } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaVimeoSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const iconStyle = {color: "red", size: "24px"}; 

const Menu = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
        <Container>
            <Navbar.Brand href="."> 
                <h3>DINA BERKGAUT</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                <Nav>
                    <NavDropdown title="Photography" id="basic-nav-dropdown">
                        <NavDropdown.Item>People</NavDropdown.Item>
                        <NavDropdown.Item>Events</NavDropdown.Item>
                        <NavDropdown.Item>Places</NavDropdown.Item>
                        <NavDropdown.Item>Assignments</NavDropdown.Item> 
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="photography">All</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="animation">Animation</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    <Navbar.Text>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/dortndortn/">
                            <IconContext.Provider value={iconStyle}>
                                < FaInstagramSquare />
                            </IconContext.Provider>
                        </a>
                    </Navbar.Text>                    
                    <Navbar.Text>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/cangaroo/collections">
                            <IconContext.Provider value={iconStyle}>
                                < FaFlickr />
                            </IconContext.Provider>
                        </a>
                    </Navbar.Text>
                    <Navbar.Text>
                        <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/dortndortn">
                            <IconContext.Provider value={iconStyle}>
                                < FaVimeoSquare />
                            </IconContext.Provider>
                        </a>
                    </Navbar.Text>
                    <Navbar.Text>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dinaberkgaut/">
                            <IconContext.Provider value={iconStyle}>
                                < FaLinkedin />
                            </IconContext.Provider>    
                        </a>
                    </Navbar.Text>                                                            
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
    
export default Menu;

// <nav>
//     <NavLink to="." style={({ isActive }) => isActive ? {color: 'black', textDecoration: 'none'} : {}}>
//         DINA BERKGAUT
//     </NavLink>
//     <NavLink to="photography">Photography</NavLink>
//     <NavLink to="animation">Animation</NavLink>
//     <NavLink to="about">About</NavLink>
//     <NavLink to="contact">Contact</NavLink>
// </nav>

// <NavDropdown.Item><NavLink to="photography">All</NavLink></NavDropdown.Item>

// <Container fluid></Container>