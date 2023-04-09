import { Link,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const lineSpace = <span style={{ padding: '0px 5px' }}>|</span>;
  return (
    <div>
      <h3>ROUTER LESSON (APP Comp.)</h3>

      {/* STEP First LINK */}
      {/* <a href="/Link1">First Link</a> ==> Page Reloading */}
      <Link to="/" style={{display: 'block',color:'red'}}>Home</Link> {/* ==> No Page Reloading */}
      {lineSpace}
      <Link to="/About">About</Link>{lineSpace}
      <Link to="/Link01">Link01</Link>{lineSpace}
      <Link to="/Link02">Link02</Link>

      <hr/>
      {/* STEP Second ROUTE */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Link01" element={<h1>LINK 01</h1>} />
        <Route path="/Link02" element={<div><h2>LINK 02</h2><p>YES!!!</p></div>} />
      </Routes>
    </div>
  );
}

export default App;