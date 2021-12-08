const {Router} = require("express");
const router = Router();
const Mascota = require("../Schema/modelMascota");



//GET
//MOSTRAR MASCOTAS
router.get("/",(req,res)=>{
    
    Mascota.find()
    .then(mascotas => res.json(mascotas).status(200))
    .catch(e => res.json("Error: "+ e).status(400));

});



//GET
//MOSTRAR UNA MASCOTA
router.get("/:id",(req,res)=>{

    const id = req.params.id;
  
        Mascota.findById(id)
        .then(mascota => res.json(mascota).status(200))
        .catch(e => res.json("Error: "+ e).status(400));

    
});


//POST
//GUARDAR MASCOTAS
router.post("/add",async (req,res)=>{
    
    const mascota = req.body;

    if(!mascota.nombre || !mascota.año || !mascota.raza){

        res.json("No se recibe los datos necesarios");

    }else{


        try {

            const nuevaMascota = new Mascota({nombre:mascota.nombre,año:mascota.año,raza:mascota.raza});
            await nuevaMascota.save()
            res.json(true).status(200)
            
        } catch (error) {
            
            res.json("Error en:"+ error).status(500);
        }

    }
});


//PUT
//ACTUALIZAR MASCOTA
router.post("/update/:id",(req,res)=>{

    const id = req.params.id;
    const pet = req.body;
    
    if(!pet.nombre || !pet.año || !pet.raza){

        Mascota.findById(id)
        .then(mascota => {
    
            mascota.nombre = pet.nombre;
            mascota.año = pet.ano;
            mascota.raza = pet.raza;
            mascota.save()
            .then( res.json("Mascota actualizada").status(200))
            .catch(e => res.json("Error actualizar: "+ e).status(400))
    
        })
        .catch(e => res.json("Error con el Id:"+ e));

        
    }
  

});



//DELETE
//ELIMINAR MASCOTA
router.delete("/delete/:id",(req,res)=>{

    const id = req.params.id;
    if(id){

        Mascota.findByIdAndDelete(id)
        .then(res.json("Mascota eliminada").status(200))
        .catch(e => res.json("Error: "+ e).status(400));

    }

});


module.exports = router;