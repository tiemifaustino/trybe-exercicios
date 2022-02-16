import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      { Task('Iniciando Front-End') }
    </div>
  );
}

export default App;
