import './Formulario.css';
import { useState } from "react";
import Axios from "axios";


function Formulario() {

  const [nombre, setNombre] = useState("");
  const [biografia, setEdad] = useState("");
  const [genero, setCargo] = useState("");
  const [pais, setPais] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      biografia: biografia,
      genero: genero,
      pais: pais,
    }).then(() => {
      alert("Registro Ok");
    });
  }

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
    </div>
  );
}

export default Formulario;