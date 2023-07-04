const bodyParser = require("body-parser"),express=require("express"),app=express(),path=require("path"),assets=path.join(__dirname,"/assets"),port=3000;
const { con } = require('./mysql.js');
app.use(express.static(assets));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/",(req,res)=> {
    res.sendFile(path.join(assets+"/carrusel.html"));
});
app.get("/formulario",(req,res)=> {
    res.sendFile(path.join(assets+"/formulariogeografia.html"));
});
app.post("/insertardatos",(req,res)=> {
    console.log(req.body);
    let sql = `insert into Usuario values(null, "${req.body.nombre}", "${req.body.apellido}", "${req.body.email}")`;
    con.query(sql, (err, result) =>{
        if(err) throw err;
        console.log("Se ingresó correctamente 1 fila en la base de datos.");
    });
});
app.listen(port,()=> {
    console.log(`Servidor iniciado en el puerto ${port}`);
});