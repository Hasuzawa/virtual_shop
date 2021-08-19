import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


//function Header(props: {headerHeight: string}): JSX.Element = React.forwardRef((props: { headerHeight: string}, ref) => {
const Header = React.forwardRef<any, any>((props, ref) => {

    return (
        <>
        
        <Navbar
            bg="dark"
            variant="dark"
            ref={ref}
            style={{height: (props.headerHeight ? props.headerHeight : "auto")}}
        >
            <Navbar.Brand>Virtual Shop</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>

                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Products</Nav.Link>
                    <Nav.Link>Itinerary</Nav.Link>
                </Nav>
                <button onClick={ () => props.setHeaderHeight(props.headerHeight + 10) }>change height of header</button>
            </Navbar.Collapse>
            
        </Navbar>
        
    </>

    );
});

export default Header;