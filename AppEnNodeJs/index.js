const express=require("express"),path=require("path");
const app=express(),port=3000;

const assets=path.join(__dirname,"/assets");
app.use(express.static(assets));

app.get("/",(req,res)=> {
    res.sendFile(path.join(assets+"/carrusel.html"));
});
app.get("/formulario",(req,res)=> {
    res.sendFile(path.join(assets+"/formulariogeografia.html"));
});
app.post("/insertardatos",(req,res)=> {
    
});
app.listen(port,()=> {
    console.log(`Servidor iniciado en el puerto ${port}`);
});