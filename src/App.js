import "./App.css";
import Navbar from "./components/Nabvar";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar />
      <News pageSize= {12}  />
    </>
  );
}

export default App;
