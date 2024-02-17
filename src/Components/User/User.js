import React, { Component } from 'react';
import './User.css';

class User extends Component {
  render() {
    return (
      <>
        <div>Hola USer {this.props.fullname}</div>
      </>
    );
  }
}

export default User;
