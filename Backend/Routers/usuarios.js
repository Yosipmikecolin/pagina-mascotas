const {Router} = require("express");
const router = Router();



router.get("/",(req,res)=>{

    res.send("Pantalla de usuarios");

});


module.exports = router;