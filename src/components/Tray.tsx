import React, { useState } from "react";
import { Offcanvas, Button, Container, Row, Col } from "react-bootstrap";

import { MediaSize, CheckMediaSize } from "src/components/MediaQuery";

import "src/styles/components.scss";

const Tray = (props: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function renderButtons(){

    }

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                open Tray
            </Button>

            <Offcanvas show={show} placement="end" backdrop={false} onHide={handleClose} style={{top: props.headerHeight}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shoppping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{display: "flex", flexDirection: "column"}}>
                    <div className="shopping_cart--box">
                        <p className="testing">item 1</p>
                        <p>item 2</p>
                        {CheckMediaSize()}
                    </div>
                    <div className="shopping_cart--buttons">
                        <Row>
                            <Col>
                                <Button variant="success" size="lg" className="shopping_cart--button">checkout</Button>
                            </Col>
                            <Col>
                                <Button variant="danger" size="lg" className="shopping_cart--button">reset cart</Button>
                            </Col>
                        </Row>
                    </div>
{/*                     <Container>
{/*                         <Row className="shopping_cart--heading">
                            Shopping Cart
                        </Row> 
                        <Row>
                            <div className="shopping_cart--box">

                            </div>
                        </Row>
                        <Row>

                        </Row>
                    </Container> */}
                    

                </Offcanvas.Body>
            </Offcanvas>






        </>
    );
};

export default Tray;