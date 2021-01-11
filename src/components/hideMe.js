import React, { Component } from "react";

export default class HideMe extends Component {
  constructor() {
    super();
    this.state = {
      content: "Hide Me Please",
      isOpen: false
    };
  }
  toggleShow = () => {
    this.setState({
      content: "Hide Me Please",
      isOpen: true
    });
  };
  toggleHide = () => {
    this.setState({
      content: [],
      isOpen: false
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.content}</h2>
        <br />
        <button onClick={this.toggleShow}> Show </button>
        <button onClick={this.toggleHide}> Hide </button>
      </div>
    );
  }
}