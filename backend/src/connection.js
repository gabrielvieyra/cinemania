const mysql = require("mysql");

let conexion = mysql.createConnection({
    host: process.env.MYSQL_NAME || "localhost",
    user: "root",
    password: "",
    database: "cinemanía_bd"
});

conexion.connect(function (err) {
    if (err) throw err;

    console.log("Conectado con exito!");
});

module.exports = conexion;
