import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


//function Header(props: {headerHeight: string}): JSX.Element = React.forwardRef((props: { headerHeight: string}, ref) => {
const Header = React.forwardRef((props, ref) => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Virtual Shop</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>

                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Products</Nav.Link>
                    <Nav.Link>Wish List</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </>

    );
});


/* const Header = () => {
    return (


    );
};
 */
export default Header;