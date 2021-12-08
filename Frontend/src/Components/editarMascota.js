import styled from "styled-components";
import {useParams,useNavigate} from "react-router-dom";
import Fondo2 from "../Img/fondo-2.jpg";
import {Contexto} from "../Context/DatosEditar";
import { useContext, useState } from "react";
import toast from 'react-hot-toast';


function EditarMascota(){

    const {id} = useParams();
    const {datos} = useContext(Contexto);
    const [valor,SetValor] = useState({nombre:datos.nombre,año:datos.año,raza:datos.raza});
    const navegacion = useNavigate();


    //ACTUALIZAR MASCOTA
    function ActualizarMascota(e){

        e.preventDefault();
         const promesa = fetch(`http://localhost:4000/mascotas/update/${id}`,{method:"POST",headers: {"Content-type": "application/json"}, mode:"cors",body:JSON.stringify({nombre:valor.nombre,ano:valor.año,raza:valor.raza})})
        .then(response => response.json())
        .then(data => {
            if(data){
                SetValor({nombre:"",año:"",raza:""});
            }
        })
        .catch(e => console.log(e))
        toast.promise(promesa,{
            loading: 'Loading',
            success: 'Mascota actualizada',
            error: 'Ocurrio un error inesperado'+e,
            duration:3000});

            setTimeout(()=>{

                navegacion("/");

            },3000);

    }




    //CAMBIAR DATOS DEL INPUT
    function CambiarData(e){
        const {value,name} = e.target;
        SetValor({...valor,[name]:value});

    }

    return(

        <Contenedor>
        <Formulario onSubmit={(e)=>{ActualizarMascota(e)}}>
         <h1>Editar mascota</h1>

         <Input type="text" name="nombre" value={valor.nombre} onChange={CambiarData} placeholder="Escribe el nombre de la mascota" required/>
         <Input type="date" name="año" value={valor.año} onChange={CambiarData} required/>
         <Input type="text" name="raza" value={valor.raza}  onChange={CambiarData} placeholder="Raza" required/>

         <BotonSubmit>Actualizar</BotonSubmit>
         </Formulario>

       </Contenedor>
    );


}


const Contenedor = styled.div`

background-image:url(${Fondo2});
background-size:cover;
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;

`;


const Formulario = styled.form`

    background-color:#fff;
    border-radius:5px;
    padding:20px;
    text-align:center;
    width:500px;
    display:block;
    -webkit-box-shadow: 0px 4px 11px 0px #181D31; 
    box-shadow: 0px 4px 11px 0px #181D31;


    @media (max-width:500px){

        width:100%;
    }

`;

const Input = styled.input`

    padding:15px;
    border:none;
    border-radius:5px;
    width:100%;
    font-size:18px;
    margin-top:50px;
    border: 2px solid #fb9900;
    outline:none;

`;

const BotonSubmit = styled.button`

background-color:#f99700;
padding:20px;
width:100%;
border:none;
border-radius:5px;
font-size:18px;
margin-top:50px;
cursor:pointer;
transition:500ms ease;


&:hover{
    background-color:#9b5e04;
}
`;
export default EditarMascota;