import React, { Component } from 'react';
//import './User.css';

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //esto inicia el contador
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Increment</h1>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar el Contador + 1</button>
      </>
    );
  }
}

export default Increment;
