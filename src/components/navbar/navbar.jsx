import React from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Form, Row, Col} from 'react-bootstrap';


function NavBar() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        React Bootstrap
                    </Navbar.Brand>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col>
                                <i className="bi bi-search"></i>
                            </Col>

                        </Row>
                    </Form>
                    <i className="bi bi-cart4"></i>
                    <i className="bi bi-person-circle"></i>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;