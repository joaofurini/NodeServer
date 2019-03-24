// IMPORTAÇÕES 
const express = require('express');
const app = express();
var adminRoutes = express.Router();
var userRoutes = express.Router();

//AÇÃO ANTES DE CHAMAR A ROTA
adminRoutes.use((req, res, next)=>{
    console.log("Chamando a rota dos administradores")
    next();
})

userRoutes.use((req, res, next)=>{
    console.log("Chamando a rota dos usuarios")
    next();
})
app.use((req, res, next)=>{
    console.log("Enviando o html para a rota")
    next();
})


//DEFININDO AS ROTAS 
//ADMINISTRADOR
adminRoutes.get("/", (req, res)=>{
    res.send("Rota iniciada com sucesso")
})
adminRoutes.get("/usuarios", (req, res)=>{
    res.send("Aqui estao todos os usuarios cadastrados")
})

//USUARIO
userRoutes.get("/", (req, res)=>{
    res.send("Rota iniciada com sucesso")
})
userRoutes.get("/posts", (req, res)=>{
    res.send("Aqui estao todos os seus posts")
})
//APP
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

//CONFIGURANDO O userRoutes e o adminRoutes

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

//CONFIGURAND A PORTA DE SAIDA
app.listen(8000);
console.log("Deu tudo certo.")



