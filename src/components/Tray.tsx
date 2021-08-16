import React, { useState } from "react";
import { Offcanvas, Button, Container, Row, Col } from "react-bootstrap";

import "src/styles/components.scss";

const Tray = (props: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                open Tray
            </Button>

            <Offcanvas show={show} placement="end" backdrop={false} onHide={handleClose} style={{top: props.headerHeight}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shoppping cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <Row className="shopping_cart--heading">
                            Shopping Cart
                        </Row>
                        <Row>
                            <div className="shopping_cart--box">

                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="success" size="lg" className="shopping_cart-button">checkout</Button>
                            </Col>
                            <Col>
                                <Button variant="danger" size="lg" className="shopping_cart-button">reset cart</Button>
                            </Col>
                        </Row>
                    </Container>
                    

                </Offcanvas.Body>
            </Offcanvas>






        </>
    );
};

export default Tray;