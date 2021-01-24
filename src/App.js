import logo from './logo.svg';
import './App.css';
import BtnOld from './component/BtnOld/BtnOld.component';
import BtnUseState from './component/BtnUseState/BtnUseState.component';
import BtnEffect from './component/BtnEffect/BtnEffect.component';

function App() {

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
        <p>BtnOld class component</p>
        <BtnOld />
        <p>Btn functional component using useState()</p>
        <BtnUseState />
        <p>BtnEffect component using useEffect()</p>
        <BtnEffect />
      </main>
    </div>
  );
}

export default App;
