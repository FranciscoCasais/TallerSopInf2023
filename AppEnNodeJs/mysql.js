const mysql=require("mysql");
let con=mysql.createConnection( {
    host: "127.0.0.1",
    user: "alumno",
    password: "alumnoipm",
    database: "formulario"
});
module.exports={ con:con };