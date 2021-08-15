import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from "react-bootstrap";

import { Header } from "./components/Header";


function App() {
  return (
    <div className="App">
      <Header />
        <Button variant="primary">
          testing
        </Button>
    </div>
  );
}

export default App;
