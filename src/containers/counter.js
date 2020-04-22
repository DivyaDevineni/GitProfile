import React from "react";

import Input from "../components/profileResponse";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    //this.increment=this.increment.bind(this);
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  decrement = () => {
    if (this.state.value <= 0) {
      this.setState({
        value: 0
      });
    } else {
      this.setState({
        value: --this.state.value
      });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <p>{this.state.value}</p>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
