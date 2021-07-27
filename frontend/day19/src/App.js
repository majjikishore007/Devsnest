import React, { Component } from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import "./App.css";
export default class App extends Component {
  render() {
    console.log(this.props, "App");
    return (
      <div className='container'>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
        {/* <Clock></Clock> */}
      </div>
    );
  }
}
