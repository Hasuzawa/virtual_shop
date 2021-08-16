import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

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
                    place some text here.
                </Offcanvas.Body>
            </Offcanvas>






        </>
    );
};

export default Tray;