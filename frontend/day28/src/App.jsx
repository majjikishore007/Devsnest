import React from "react";
import Form from "./Components/Form";
import ThemeToggle from "./Components/ThemeToggle";
import "./App.css";
import WeatherCard from "./Components/WeatherCard";
const App = () => {
  return (
    <div>
      <ThemeToggle></ThemeToggle>
      <Form></Form>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default App;
