import React, { Component } from "react";
const heading = "Please Toggle Me ";
export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      heading: heading,
      isOpen: true
    };
  }
  toggleMe = () => {
    if (this.state.isOpen) {
      this.setState({
        heading: [],
        isOpen: false
      });
    } else {
      this.setState({
        heading: heading,
        isOpen: true
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.heading}</h1>
        <button onClick={this.toggleMe}>Click Here To Toggle Me</button>
      </div>
    );
  }
}