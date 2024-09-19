import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../screens/LandingPage/LandingStyles.css'
import { Link, useNavigate } from 'react-router-dom'
import MyNotes from '../../screens/MyNotes/MyNotes'
const Header = () => {
    const navigate = useNavigate();
    return (
        <Navbar className='header-bg' expand="md">
            <Container>
                <Navbar.Brand expand="lg">
                    <Link to="/">Note it down!</Link>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Nav
                        className=""
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                            <Link to="/notes">My Notes</Link>
                        <NavDropdown title="User Name" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={()=>{navigate("/")}}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header