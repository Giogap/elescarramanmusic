const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "escarraman_db"
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const genero = req.body.genero;
    const pais = req.body.pais;
    const biografia = req.body.biografia;
    const multimedia = req.body.multimedia;

    db.query('INSERT INTO empleados(nombre, genero, pais, biografia, multimedia) VALUES (?, ?, ?, ?, ?)', [nombre, genero, pais, biografia, multimedia], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok");
        }
    });
});



app.listen(3001, () => {
    console.log("Server Ok 3001");
});