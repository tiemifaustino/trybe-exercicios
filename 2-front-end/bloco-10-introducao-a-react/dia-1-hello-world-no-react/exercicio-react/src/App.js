import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['React', 'Componentes', 'Hello World'];

function App() {
  return (
    <div className="App">
      { appointments.map((appointment) => Task(appointment)) }
    </div>
  );
}

export default App;
