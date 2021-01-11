import React, { Component } from "react";


const heading = "Hit the buttons to decide where I start?";

export default class ChangePlacement extends Component {
  constructor() {
    super();
    this.state = {
      heading: heading,
      changePlacement: "center"
    };
  }

  goLeft = () => {
    this.setState({
      changePlacement: "flex-start"
    });
  };
  goRight = () => {
    this.setState({
      changePlacement: "flex-end"
    });
  };
  centerMe = () => {
    this.setState({
      changePlacement: "center"
    });
  };

  render() {
    const myDiv = {
      display: "flex",
      justifyContent: this.state.changePlacement,
      alignItems: "center"
    };
    return (
      <div>
        <h1 style={myDiv}>{this.state.heading}</h1>
        <br />
        <button onClick={this.goLeft}>Left</button>
        <button onClick={this.goRight}>Right</button>
        <button onClick={this.centerMe}>Center</button>
      </div>
    );
  }
}