import React, { Component } from "react";

export default class GrowShrink extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 25
    };
  }
  makeItGrow = () => {
    this.setState({
      fontSize: this.state.fontSize + 15
    });
  };
  makeItShrink = () => {
    this.setState({
      fontSize: this.state.fontSize - 15
    });
  };
  render() {
    const h1Style = {
      fontSize: this.state.fontSize + "px"
    };
    return (
      <div>
        <h1 style={h1Style}> I want to Grow and Shrink Can you do both</h1>
        {this.state.fontSize + "px"}
        <br />
        <br />
        <button onClick={this.makeItGrow}>Grow</button>
        <button onClick={this.makeItShrink}>Shrink</button>
      </div>
    );
  }
}