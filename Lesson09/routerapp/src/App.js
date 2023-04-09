import { Link, NavLink, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const lineSpace = <span style={{ padding: '0px 5px' }}>|</span>;
  const linkStyle = { color: 'red', textDecoration: 'none' };
  const linkActiveStyle = { color: 'gray', textDecoration: 'none', fontWeight: 'bold' };
  const isActiveControl = 
  ({ isActive }) => 
      {
        return isActive ? linkActiveStyle : linkStyle;
      }

  const userIds = [123, 456, 789];
  return (
    <div>
      <h3>ROUTER LESSON (APP Comp.)</h3>

      {/* STEP First LINK */}
      {/* <a href="/Link1">First Link</a> ==> Page Reloading */}
      <Link to="/" style={linkStyle}>Home</Link> {/* ==> No Page Reloading */}
      {lineSpace}

      {/* <Link to="/About" style={linkStyle}>About</Link>{lineSpace} */}
      <NavLink to="/About"
        style={isActiveControl}
      >About</NavLink>{lineSpace}

      <Link to="/Link01" style={linkStyle}>Link01</Link>{lineSpace}
      <Link to="/Link02" style={linkStyle}>Link02</Link>{lineSpace}
      {/* <Link to="/PersonalDetail/123" style={linkStyle}>Get User 123</Link>{lineSpace} */}
      {userIds && userIds.map((userId) => {
        return (
          <>
            <Link key={userId} to={'/PersonalDetail/' + userId}
              style={linkStyle}>Get User {userId}</Link>{lineSpace}
          </>
        )
      })}

      <hr />
      {/* STEP Second ROUTE */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Link01" element={<h1>LINK 01</h1>} />
        <Route path="/Link02" element={<div><h2>LINK 02</h2><p>YES!!!</p></div>} />
        <Route path="/PersonalDetail/:userId" element={<PersonalDetail />} />

        {/* 404 Not Found - OTHER URLs */}
        <Route path="*" element={<h1>Upps... 404 Not Found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;

// localhost:3000/PersDetail/123
function PersonalDetail() {
  //01.With Windows Location:
  console.log("Windows.location: ", window.location);
  var personalId = window.location.pathname.split("/").pop();
  console.log("PATH NAME: ", personalId);
  //02.Alternative way: !!!Only for Functional Components!!!
  const allParams = useParams();
  console.log("ALL PARAMS: ", allParams);
  const _personalId = allParams.userId;
  return (
    <div>
      <h2>Personal Detail</h2>
      <p>Personal ID: {personalId} from Windows Location</p>
      <p>Personal ID: {_personalId} from useParams() Method</p>
    </div>
  )
}
