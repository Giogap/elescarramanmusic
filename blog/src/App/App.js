import logo from './logo.svg';
import './App.css';
import Buttons from '../Buttons/Buttons';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El Escarraman Music</h1>
        <Buttons />
        </div>
      <div className='App-body'>
        <p>PUBLICIDAD</p>
      </div>
      <div className='App-footer'>
        <p>El Escarraman Music 2023</p>
      </div>
    </>
  );
}

export default App;
