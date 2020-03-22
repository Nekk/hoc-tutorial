import React from 'react';
import logo from './logo.svg';
import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"
import './App.css';

function App() {
  return (
    <div className="App">
      <ClickCounter name="Nekketsu"/>
      <HoverCounter name="Nekketsu"/>
    </div>
  );
}

export default App;
