import React, { useState, useRef, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';



import { Button } from "react-bootstrap";

import Header from "src/components/Header";
import Tray from "src/components/Tray";


function App() {
  const [ cartedItems , setCartedItems] = useState([]);

  const [ dragging, setDragging] = useState<boolean>(false);

  //for monitoring height of <Header>
  const [ headerHeight, setHeaderHeight] = useState<number>(0);
  const headerRef = useRef<any>(null);
  useEffect(() => {
    console.log("App effect hook activated");
    setHeaderHeight(headerRef.current.offsetHeight);
  }, [headerHeight]);


  return (
    <div className="App">
      <Header ref={headerRef} headerHeight={headerHeight} setHeaderHeight={setHeaderHeight}/>
      <Tray headerHeight={headerHeight}/>

        <Button variant="primary">
          testing (no effect)
        </Button>
        <div
          style={{backgroundColor: "red", display: "inline-block", width: "70px", height: "70px"}}
          draggable={true}
          onDrag={() => setDragging(true)}
          onDragEnd={() => setDragging(false)}
        >
          testing, this is draggable
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <span>The height of header is {headerHeight}</span>
          <span>dragging : {dragging.toString()}</span>
        </div>
    </div>
  );
}

export default App;
