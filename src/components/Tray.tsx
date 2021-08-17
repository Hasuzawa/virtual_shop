import React, { useEffect, useState } from "react";
import { Offcanvas, Button, Container, Row, Col } from "react-bootstrap";

import { MediaSize, useMediaSize } from "src/components/hooks";

import "src/styles/components.scss";

const Tray = (props: any) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowClose = () => setShow(!show);

    useEffect( () => {
        if (props.isDragging){
            setShow(true);
        } else {
            setShow(false);
        }
    }, [props.isDragging]);

    return (
        <>
            <Button variant="secondary" onClick={handleShowClose}>
                open/close Tray
            </Button>

            <Offcanvas show={show} placement="end" backdrop={false} onHide={handleClose} style={{top: props.headerHeight}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="shopping_cart--heading">Shoppping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{display: "flex", flexDirection: "column"}}>
                    <div className="shopping_cart--box">
                        <p className="testing">item 1</p>
                        <p>item 2</p>
                    </div>
                    <div className="shopping_cart--cashier">
                        <Row>
                            <span>7 item: $70</span>
                        </Row>
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
                    

                </Offcanvas.Body>
            </Offcanvas>


        </>
    );
};

export default Tray;