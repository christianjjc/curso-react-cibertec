import React, { Component } from 'react';
import './Animal.css';

class Animal extends Component {
  render() {
    const styles = { color: 'green', fontSize: '20px' };
    return (
      <>
        <div style={styles}>Mi Mascota es: {this.props.name}</div>
        <div>Tipo: {this.props.type === 'Perro' ? 'Bad Dog' : 'Perro'}</div>
      </>
    );
  }
}

export default Animal;
