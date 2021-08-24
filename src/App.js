import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import SearchBar from "./Components/SearchBar";
import DrugList from './Components/Drugs';
import ReactDOM from "react-dom"

function App() {

  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="/drugs/search">Blink TakeHome</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Text>Drug Search</ReactBootStrap.Navbar.Text>
      </ReactBootStrap.Navbar>
      <SearchBar placeholder="Enter a drug name..." />
    </div>
  );
}

export default App;
