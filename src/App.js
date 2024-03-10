import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Form1 from './Form1';
import LifecycleA from './components/LifecycleA';
import LifeA from './components/LifeA';
import LifeCycleA1 from './components/LifeCycleA1';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">


      <NameList />
      {/* <LifeCycleA1></LifeCycleA1> */}
      {/* <LifeA/> */}
      {/* <LifecycleA/> */}
      {/* <Form1/> */}
      {/* <Form/> */}


      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
