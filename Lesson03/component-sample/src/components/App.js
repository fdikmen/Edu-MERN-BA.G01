import logo from '../logo.svg';
import '../App.css';
import BlogItem from './BlogItem';
import BlogTest from './BlogTest';

function App() {
  const title = "ReactJS From app.js";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/* <BlogItem></BlogItem> */}
        <BlogItem/>
        <BlogTest blogtitle={title} age={123}
         name="FirstName LastName"
         subtitle="Subtitle from App.js"
         ></BlogTest>
      </header>
    </div>
  );
}

export default App;
