import logo from './logo.svg';
import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Main surname="Emmy"/>
      </header>
    </div>
  );
}

export default App;