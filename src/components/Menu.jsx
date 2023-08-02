import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
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
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);
    
    const handleMenuToggle = () => {
        setExpanded(!expanded);
    };

    const handleMenuItemClick = () => {
        setExpanded(false);
    };
    
    const isPhotographyActive = location.pathname.includes('/photography');

    return (
        <Fragment>
            <Navbar 
                expand="lg" 
                fixed="top" 
                className="custom-navbar"
                expanded={expanded}
                onToggle={handleMenuToggle}
            >
                <Container>
                    <LinkContainer to="." style={{ fontFamily: 'Oswald-Bold', fontSize: '36px' }}>
                        <Navbar.Brand>
                            Dina Berkgaut
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <NavDropdown 
                                title="Photography" 
                                id="basic-nav-dropdown"
                                className={`py-1 ${isPhotographyActive ? 'active' : ''}`} 
                                style={{ fontFamily: 'Oswald-Medium' }}
                            >
                                <LinkContainer to="photography/people" onClick={handleMenuItemClick} active={location.pathname.startsWith('/photography/people')}>
                                    <NavDropdown.Item>People</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/events" onClick={handleMenuItemClick} active={location.pathname.startsWith('/photography/events')}>
                                    <NavDropdown.Item>Events</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/places" onClick={handleMenuItemClick} active={location.pathname.startsWith('/photography/places')}>
                                    <NavDropdown.Item>Places</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="photography/assignments" onClick={handleMenuItemClick} active={location.pathname.startsWith('/photography/assignments')}>
                                    <NavDropdown.Item>Assignments</NavDropdown.Item>
                                </LinkContainer> 
                                <NavDropdown.Divider />
                                <LinkContainer to="photography" onClick={handleMenuItemClick} active={location.pathname.startsWith('/photography') && !location.pathname.startsWith('/photography/people') && !location.pathname.startsWith('/photography/events') && !location.pathname.startsWith('/photography/places') && !location.pathname.startsWith('/photography/assignments')}>
                                    <NavDropdown.Item>All</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="animation" onClick={handleMenuItemClick} active={location.pathname.startsWith('/animation')} style={{ fontFamily: 'Oswald-Medium' }}>
                                <Nav.Link>Animation</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="about" onClick={handleMenuItemClick} active={location.pathname === '/about'} style={{ fontFamily: 'Oswald-Medium' }}>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="contact" onClick={handleMenuItemClick} active={location.pathname === '/contact'} style={{ fontFamily: 'Oswald-Medium' }}>
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