const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./Database/data");


//CONFIGURACIONES
app.set("puerto",process.env.PORT || 4000);



//MIDLEWARES
app.use(express.json());
app.use(cors());



//RUTAS
app.use("/mascotas",require("./Routers/mascota"));
app.use("/usuarios",require("./Routers/usuarios"));





//SERVIDOR
app.listen(app.get("puerto"),()=>{

    console.log("SERVIDOR CORRIENDO EN PUERTO: ",app.get("puerto"));

});