const mongoose = require("mongoose");

const userioSchema = new mongoose.Schema({

    nombre:String,
    apellido:String,
    telefono:Number,
    edad:Number,


});


const UserModel = mongoose.model("Usuarios",userioSchema);
module.exports = UserModel;