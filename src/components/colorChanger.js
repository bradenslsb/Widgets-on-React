import React, { Component } from "react";

export default class ColorChanger extends Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }

  eventHandler = (event) => {
    this.setState({
      color: event.target.value
    });
  };
  updateColor = () => {
    this.setState({
      color: this.state.color
    });
  };

  render() {
    const { color } = this.state;
    return (
      <div style={{ color: color }}>
        {this.state.color}
        <br />
        <input type="text" onChange={this.eventHandler} value={color}></input>
        <br />
        <button onClick={this.updateColor}>Type a color!</button>
      </div>
    );
  }
}
