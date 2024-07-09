//import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import About from './Components/About';
import UserText from "./Components/UserText";

function App() {
  return (
    <>
      <Navbar title = "TX"/>
      <UserText/>
      <About/>
    </>
  );
}

export default App;
