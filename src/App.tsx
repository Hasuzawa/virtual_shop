import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';



import { Button } from "react-bootstrap";

import Header from "src/components/Header";
import Tray from "src/components/Tray";


function App() {
  const [ cartedItems , setCartedItems] = useState([]);
  const headerRef = useRef();




  return (
    <div className="App">
      <Header ref={headerRef}/>
      <Tray headerHeight={"sdfsd"}/>

        <Button variant="primary">
          testing
        </Button>
    </div>
  );
}

export default App;
