import Menu from "./Components/Menu";
import {Route,Routes} from "react-router-dom";
import GuadarMascota from "./Components/guardarMascota";
import  { Toaster } from 'react-hot-toast';
import ListarMascota from "./Components/listarMascotas";
import EditarMascota from "./Components/editarMascota";
import {ProvedorData} from "./Context/DatosEditar";


function App() {
  return (
    <ProvedorData>

   
      <Menu/>
    
      <main>
      <Toaster/>
        <Routes>
        

          <Route path="/" element={ <ListarMascota/>}/>
          <Route path="/register" element={<GuadarMascota/>}/>
          <Route path="/editar/:id" element={<EditarMascota/>}/>

         

        </Routes>
      
      </main>
     
   
    </ProvedorData>
  );
}

export default App;
