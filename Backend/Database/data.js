const mongoose = require("mongoose");
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const uri = `mongodb+srv://${user}:${password}@cluster0.cdtmz.mongodb.net/${database}?retryWrites=true&w=majority`;


mongoose.connect(uri).then(console.log("CONECTADO A LA BASE DE DATOS")).catch(e => console.log("ERROR EN LA CONEXION DB: ",e));

