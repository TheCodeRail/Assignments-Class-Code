import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.inc}>increase</button>
      </>
    );
  }
}

export default App;
