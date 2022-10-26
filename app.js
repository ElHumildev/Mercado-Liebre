const express = require("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname, './public');



app.listen(process.env.PORT || 3001,()=>console.log('Servidor corriendo en el puerto'));



app.use(express.static(publicPath));

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

