import React, { Component } from "react";

export default class AddSubtract extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  subtract = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}> Subtract</button>
      </div>
    );
  }
}