import React, { Component } from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import "./App.css";
import Forms from "./components/Forms";
import CalorieMantainer from "./components/CalorieMantainer";
import Main from "./components/Main";
export default class App extends Component {
  render() {
    console.log(this.props, "App");
    return (
      // <div className='container'>
      //   <Counter></Counter>
      //   <Counter></Counter>
      //   <Counter></Counter>
      //   <Counter></Counter>
      //   <Clock></Clock>
      // </div>
      <div>
        <Main></Main>
      </div>
    );
  }
}
