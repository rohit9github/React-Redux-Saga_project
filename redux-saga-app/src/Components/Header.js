import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../Redux/ProductAction"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

    const result = useSelector((state) => state.cartData);
    console.log(result);
    const dispatch = useDispatch()

    return (
        <div className="header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Link to={"/"}>
                            <h1 style={{ float: "left", marginLeft: "24px" }}>Logo</h1>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Services</Nav.Link>
                            <Nav.Link href="#action2">Contact</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-3"
                                aria-label="Search"
                                name="search"
                                onChange={(e) => dispatch(productSearch(e.target.value))}
                            />
                        </Form>
                    </Navbar.Collapse>
                    <Link to={"/cart"}>
                        <div className="cart-div">
                            <span>{result.length}</span>
                            <img src="https://cdn-icons-png.freepik.com/256/1170/1170678.png?semt=ais_hybrid" />
                        </div>
                    </Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;