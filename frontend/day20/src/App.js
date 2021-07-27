import logo from "./logo.svg";
import "./App.css";
import Calorie from "./components/Calorie";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Calorie</h1>
      </header>
      <Calorie></Calorie>
    </div>
  );
}

export default App;
