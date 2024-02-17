import React, { Component } from 'react';
import './App.css';

class InApp extends Component {
  render() {
    return [
      <div className="App">
        <h1>Mi primer proyecto en React</h1>
        <p>Bienvenido a mi primer proyecto en React!!</p>
      </div>,
      <div className="App">
        <h1>Mi primer proyecto en React</h1>
        <p>Bienvenido a mi primer proyecto en React!!</p>
      </div>,
    ];
  }
}

export default InApp;
