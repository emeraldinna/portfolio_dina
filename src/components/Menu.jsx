import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IconContext } from 'react-icons';
import { FaFlickr } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaVimeoSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Fragment } from 'react';

const iconStyle = { color: "black", size: "24px" };

const Menu = () => {

    return (
        <Fragment>
            <Navbar expand="lg" fixed="top" className="custom-navbar">
                <Container>
                    <LinkContainer to="." style={{ fontFamily: 'Oswald-Bold', fontSize: '36px' }}>
                        <Navbar.Brand>
                            Dina Berkgaut
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Photography" id="basic-nav-dropdown" className="py-1" style={{ fontFamily: 'Oswald-Medium' }}>
                                <LinkContainer to="photography/people">
                                    <NavDropdown.Item>People</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/events">
                                    <NavDropdown.Item>Events</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/places">
                                    <NavDropdown.Item>Places</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/assignments">
                                    <NavDropdown.Item>Assignments</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="photography">
                                    <NavDropdown.Item>All</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="animation" style={{ fontFamily: 'Oswald-Medium' }}>
                                <Nav.Link>Animation</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="about" style={{ fontFamily: 'Oswald-Medium' }}>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="contact" style={{ fontFamily: 'Oswald-Medium' }}>
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
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
            <div className="navbar-placeholder"></div>
        </Fragment>
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