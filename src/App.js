import logo from './logo.svg';
import './App.css';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1 />
        <Component2 />
      </header>
    </div>
  );
}

export default App;
