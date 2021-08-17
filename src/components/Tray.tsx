import React, { useEffect, useState } from "react";
import { Offcanvas, Button, Container, Row, Col } from "react-bootstrap";

import { MediaSize, useMediaSize } from "src/components/hooks";

import "src/styles/components.scss";

const Tray = (props: any) => {
    const [show, setShow] = useState<boolean>(false);

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
    
/*     var 

    useEffect( () => {
        const mediaSize = useMediaSize();
        if (mediaSize === MediaSize.large){

        } else if (mediaSize === MediaSize.middle){

        } else {

        }
    }, [useMediaSize()]); */

    //buttons has HTML change
    if (useMediaSize() === MediaSize.large){
        return (
            <>
                <Button variant="secondary" onClick={handleShowClose}>
                    open/close Tray
                </Button>

                <Offcanvas show={show} placement="end" backdrop={false} onHide={handleClose} style={{top: props.headerHeight}}
                    className={props.isDragging ? " drop_zone" : ""}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="shopping_cart--heading">Shoppping Cart</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{display: "flex", flexDirection: "column"}}>
                        <div className={"shopping_cart--box"}>
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
    } else /*if (useMediaSize === MediaSize.middle)*/{
        return (
            <>
            <Button variant="secondary" onClick={handleShowClose}>
                open/close Tray
            </Button>

            <Offcanvas show={show} placement="end" backdrop={false} onHide={handleClose} className="tray" style={{top: props.headerHeight}}>
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
                        <Button variant="success" className="shopping_cart--button">checkout</Button>
                        <Button variant="danger" className="shopping_cart--button">reset cart</Button>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
        );
    }
};

export default Tray;