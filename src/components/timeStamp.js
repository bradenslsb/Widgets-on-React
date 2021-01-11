import React, { Component } from "react";

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }
  
  render() {
    return (
      <div>
        <h1> {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
