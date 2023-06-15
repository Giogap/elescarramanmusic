import './Formulario.css';
import { useState } from "react";
import Axios from "axios";


function Formulario() {

  const [nombre, setNombre] = useState("");
  const [biografia, setEdad] = useState("");
  const [genero, setCargo] = useState("");
  const [pais, setPais] = useState("");

  const [bandasList, setBandas] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      biografia: biografia,
      genero: genero,
      pais: pais,
    }).then(() => {
      /*getBandas();*/
      alert("Registro Ok");
    });
  }

  const getBandas = () => {
    Axios.get("http://localhost:3001/bandas").then((response) => {
      setBandas(response.data);
    });
  }

  getBandas();
  
  return (
    <div className="formulario">
      <div className="datos">
      <label>Nombre: <input onChange={(event)=>{
          setNombre(event.target.value);
        }} type="text"></input></label>
        <label>Biografia: <input onChange={(event)=>{
          setEdad(event.target.value);
        }} type="text"></input></label>
        <label>Genero: <input onChange={(event)=>{
          setPais(event.target.value);
        }} type="text"></input></label>
        <label>Pais: <input onChange={(event)=>{
          setCargo(event.target.value);
        }} type="text"></input></label>
        <button onClick={add}>Registrar</button>
      </div>
      <div className='lista'>

      {
        bandasList.map((val, key) => {
          return <div className=''> {val.nombre} </div> 
        })
      }

      </div>
    </div>
  );
}

export default Formulario;