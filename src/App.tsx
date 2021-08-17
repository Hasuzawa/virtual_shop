import React, { useState, useRef, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';



import { Button, Row, Col } from "react-bootstrap";

import Header from "src/components/Header";
import Tray from "src/components/Tray";

import { MediaSize, useMediaSize } from "src/components/hooks";
import { Product } from "src/components/classes";
import ShopWindow from "src/components/ShopWindow";
import { Footer } from "src/components/Footer";


function App() {
  //array of object instance
  const [ cartedProducts, setCartedProducts] = useState<Product[]>([]);

  const [ isDragging, setIsDragging] = useState<boolean>(false);

  //for monitoring height of <Header>
  const [ headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<any>(null);
  useEffect(() => {
    console.log("App effect hook activated");
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [headerHeight]);


  //screen size indicator
  const screenSize: number = useMediaSize();
  var screenSizeText: string = "";
  switch(screenSize){
    case MediaSize.large: screenSizeText = "large"; break;
    case MediaSize.middle: screenSizeText = "middle"; break;
    //case MediaSize.small: screenSizeText = "small"; break;
    default: screenSizeText = "small"; break;
  }



  return (
    <div className="App">
      <Row>
        <Header ref={headerRef} headerHeight={headerHeight} setHeaderHeight={setHeaderHeight}/>
      </Row>
      <Row>
        <ShopWindow />
        <Tray
        headerHeight={headerHeight}
        cartedProducts={cartedProducts}
        setCartedProducts={setCartedProducts}
        isDragging={isDragging}
        />
      </Row>
      <Row>
        <Footer />
      </Row>
      


        <Button variant="primary">
          testing (no effect)
        </Button>

        <div
          style={{backgroundColor: "red", display: "inline-block", width: "70px", height: "70px"}}
          draggable={true}
          onDrag={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          testing, this is draggable
        </div>

        <div style={{display: "flex", flexDirection: "column"}}>
          <span>The height of header is {headerHeight}</span>
          <span>dragging : {isDragging.toString()}</span>
          <span>The screen size is {screenSizeText}</span>
          
        </div>
    </div>
  );
}

export default App;
