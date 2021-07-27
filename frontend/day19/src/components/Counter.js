import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <button
          className='btn'
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}
