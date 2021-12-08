const mongoose = require("mongoose");



const mascotaSchema = new mongoose.Schema({

    nombre: String,
    año:String,
    raza:String

});


const Mascota = mongoose.model("mascotas",mascotaSchema);
module.exports = Mascota;