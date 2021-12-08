import { useState } from "react";
import styled from "styled-components";
import Fondo1 from "../Img/fondo-1.jpg";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router";

function GuadarMascota(){

    const [inputs,SetInputs] = useState({nombre:"",año:"",raza:""});
    const navegacion = useNavigate();
    


    function GuadarNuevaMascota(e){

        e.preventDefault();
        
        const promesa = fetch("http://localhost:4000/mascotas/add",{method:"POST",headers: {"Content-type": "application/json"}, mode:"cors",body: JSON.stringify({nombre: inputs.nombre ,año: inputs.año,raza:inputs.raza})})
        .then(response => response.json())
        .then(data => {
           
            if(data){

                SetInputs({nombre:"",año:"",raza:""});

            }
        }).catch(e => console.log(e));

        //ALERTA
        toast.promise(promesa, {
            loading: 'Loading',
            success: 'Mascota registrada',
            error: 'Ocurrio un error inesperado',
            duration:3000
          });


          setTimeout(()=>{

            navegacion("/");

          },3000);
    
        

    }

    return(

        <Contenedor>
         <Formulario onSubmit={GuadarNuevaMascota}>
         <h1>Registra tu mascota</h1>

         <Input type="text" value={inputs.nombre}  onChange={(e)=>{SetInputs({...inputs,nombre:e.target.value})}} name="nombre" placeholder="Escribe el nombre de la mascota" required/>
         <Input type="date" value={inputs.año}     onChange={(e)=>{SetInputs({...inputs,año:e.target.value})}} name="año" required/>
         <Small>Fecha de nacimineto o odopción </Small>
         <Input type="text" value={inputs.raza}    onChange={(e)=>{SetInputs({...inputs,raza:e.target.value})}} name="raza" placeholder="Raza" required/>

         <BotonSubmit>Guardar mascota</BotonSubmit>
         </Formulario>
       
        </Contenedor>
       
    );

}


const Contenedor = styled.div`

background-image:url(${Fondo1});
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


const Small = styled.span`
font-size:10px;
color:#000;
float:left;
margin-top:3px;
margin-left:3px;
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


export default GuadarMascota;