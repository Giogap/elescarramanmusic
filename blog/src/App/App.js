import "./App.css";
import logo from './logo.svg';

import Home from "../Navbar/Home";
import Bandas from "../Navbar/Bandas";
import Pais from "../Navbar/Pais";
import Navbar from "../Navbar/Navbar";


function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/bandas":
      component = <Bandas />
      break;
    case "/pais":
      component = <Pais />
      break;
    // no default
  }
  return (
    <>
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
        </div>
      <div className='App-body'>
      {component}
      </div>
      <div className='App-footer'>
        <p>El Escarraman Music 2023</p>
      </div>
    </>
  );
}

export default App;