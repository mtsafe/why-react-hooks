import logo from './logo.svg';
import './App.css';
import BtnOld from './component/BtnOld/BtnOld.component';
import { useState } from 'react';

function App() {

  const [count, setCount ] = useState(0);
  // count is the "reactive value"
  // setCount is the "setter"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <p>BtnOld using class component</p>
        <BtnOld />
        <p>Btn using useState()</p>
        <button onClick={() => setCount(count+1)}>
          {count}
        </button>
      </main>
    </div>
  );
}

export default App;
