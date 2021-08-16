import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



import { Button } from "react-bootstrap";

import Header from "src/components/Header";
import Tray from "src/components/Tray";


function App() {
  const [ cartedItems , setCartedItems] = useState([]);


  const [ headerHeight, setHeaderHeight] = useState(0);
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
          testing
        </Button>
        <span>The height of header is {headerHeight}</span>
    </div>
  );
}

export default App;
