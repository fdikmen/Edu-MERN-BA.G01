import logo from '../logo.svg';
import '../App.css';
import BlogItem from './BlogItem';
import BlogTest from './BlogTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* <BlogItem></BlogItem> */}
        <BlogItem/>
        <BlogTest></BlogTest>
      </header>
    </div>
  );
}

export default App;
