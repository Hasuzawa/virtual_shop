import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Offcanvas, Button, Container, Row, Col, Alert, CloseButton } from "react-bootstrap";

import { MediaSize, useMediaSize } from "src/components/hooks";

import "src/styles/Tray.scss";

const Tray = (props: any) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowClose = () => setShow(!show);


    //remembered state
    const [noResetWarning, setNoResetWarning] = useState<boolean>(false);


    type Popup = "checkout" | "clear";
    const [ isShowingPopup, setIsShowingPopup] = useState<boolean>(false);

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
                                    <Button
                                        variant="danger"
                                        size="lg"
                                        className="shopping_cart--button"
                                        //onClick={ () => props.setCartedProducts([])}
                                        onClick={ () => {
                                            if (noResetWarning){
                                                props.setCartedProducts([]);
                                            } else {
                                                setIsShowingPopup(true);
                                            }
                                        }}
                                    >reset cart</Button>
                                </Col>
                            </Row>
                        </div>
                        

                    </Offcanvas.Body>
                </Offcanvas>

                {/* popup components */}
                
                {isShowingPopup ?
                    <ResetCart
                        setIsShowingPopup={setIsShowingPopup}
                        setCartedProducts={props.setCartedProducts}
                        setNoResetWarning={setNoResetWarning}
                    /> : null
                }
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

const ResetCart = (props: any): React.ReactPortal => {
    console.log("popup activated");
    return ReactDOM.createPortal(
        <div className="popup_container">
            <Alert
                variant="warning"
                className="center_popup"
            >
                <div style={{display: "flex", justifyContent: "space-between", flex: "0 0 auto"}}>
                    <Alert.Heading style={{display: "inline-block"}}>Reset Cart</Alert.Heading>
                    <CloseButton onClick={ () => props.setIsShowingPopup(false)}/>
                </div>

                <p style={{flex: "1 0 auto"}}>
                    Remove everything in cart? This is <b>irreversible</b>.
                </p>
                <div className="popup_reset_buttons">
                    <Button
                        variant="primary"
                        onClick={ () => {
                            props.setCartedProducts([]);
                            props.setIsShowingPopup(false);
                        }}
                    >
                        Remove
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={ () => props.setIsShowingPopup(false)}
                    >
                        Keep
                    </Button>
                    <Button
                        variant="outline-primary"
                        type="checkbox"
                        onClick={ () => props.setNoResetWarning(true)}
                    >
                        do not show again
                    </Button>

                </div>
            </Alert>
        </div>
        ,
        document.getElementById("portal")!
    )
};