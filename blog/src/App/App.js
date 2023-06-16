import "./App.css";
import logo from './logo.svg';

import Home from "../Buttons/Home";
import Bandas from "../Buttons/Bandas";
import Pais from "../Buttons/Pais";
import Navbar from "../Buttons/Navbar";
import Bio from "../Biography/Bio";
import Formulario from "../Formulario/Formulario";


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
    case "/Metallica":
      component = <Bio />
      break;
    case "/BMTH":
      component = <Bio />
      break;
    case "/Ekos":
      component = <Bio />
      break;
    case "/Sleeptoken":
      component = <Bio />
      break;
    case "/ACDC":
      component = <Bio />
      break;
    case "/Halestorm":
      component = <Bio />
      break;
    case "/Nirvana":
      component = <Bio />
      break;
    case "/formulario":
      component = <Formulario />
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