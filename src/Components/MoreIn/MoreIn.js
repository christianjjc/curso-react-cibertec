import React, { Component } from 'react';

class MoreIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, //esto inicia el contador
    };
  }

  componentDidMount() {
    document.title = `Contador: ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      document.title = `Contador: ${this.state.count}`;
      console.log(this.state.count);
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>More In</h1>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar el Contador + 1</button>
      </>
    );
  }
}

export default MoreIn;
