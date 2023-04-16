import ClassComponents from "./components/ClassComponents";
import FunctionalComponents from "./components/FunctionalComponents";
function App() {
  const divStyle = { width:"45%", float:"left",height:"100vh",padding:"20px" };
  const bgLeft = { backgroundColor: "#e8cebf" };
  return (
    <>
      <div style={{...divStyle,...bgLeft}}>
      <ClassComponents/>
      </div>
      <div  style={divStyle} >
      <FunctionalComponents/>
      </div>
    </>
  );
}

export default App;
