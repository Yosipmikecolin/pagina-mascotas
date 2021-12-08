import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import IconFecha from "../Img/calendario.png"
import IconDog from "../Img/perro.png";
import {useNavigate} from "react-router-dom";
import {Contexto} from "../Context/DatosEditar";
import toast from 'react-hot-toast';

function ListarMascota(){

    const [data,SetData] = useState([]);
    const navegacion = useNavigate();
    const {SetDatos} = useContext(Contexto);


    useEffect(()=>{

        const response = fetch("http://localhost:4000/mascotas")
        response.then(mascotas => mascotas.json())
        .then(res => SetData(res))
        .catch(e => console.log(e))
       
        return response;

    },[]);


    function EditarMascota(id,nombre,año,raza){

        navegacion("editar/"+id);
        SetDatos({nombre:nombre,año:año,raza:raza})

    }


    function EliminarMascota(id){

        fetch(`http://localhost:4000/mascotas/delete/${id}`,{method:"DELETE"})
        .then(response => response.json())
        .then(data => {

            if(data){

                toast.success("Mascota eliminada",{duration:3000, position: 'top-center'});
                setTimeout(()=>{

                    window.location.reload();

                },3000);
            }


        }).catch(e => console.log(e))


    }

   

    return(

        <Contenedor>

            
            
            { data.length ?  data.map((mascota)=>{
                
                return (

                    <Caja key={mascota._id}>

                        <h1>{mascota.nombre}</h1>
                        <CirculoFecha><img src={IconFecha} width="25px" alt="fecha"/></CirculoFecha>
                        <Fecha>{mascota.año}</Fecha>
                        <CirculoRaza><img src={IconDog} width="25px" alt="fecha"/></CirculoRaza>
                        <Raza>{mascota.raza}</Raza>
                        
                        <BotonEditar onClick={()=>{EditarMascota(mascota._id,mascota.nombre,mascota.año,mascota.raza)}}>Editar mascota</BotonEditar>
                        <BotonEditar eliminar={true} onClick={()=>{EliminarMascota(mascota._id)}}>Eliminar mascota</BotonEditar>
                    </Caja>
                );

            }): <CajaDataVacia><h1>No hay datos</h1></CajaDataVacia>} 
           
        </Contenedor>

        
    );


}


const Contenedor = styled.div`

width:100%;
height:100vh;
overflow:auto;
background-color:#f99700;
display:flex;
justify-content:center;
flex-wrap:wrap;




`;


const Caja = styled.div`
width:300px;
height:330px;
border-radius:5px;
background-color:#fff;
margin:20px;
text-align:center;
padding:10px;

`;


const CajaDataVacia = styled.div`

width:300px;
height:100px;
background-color:#fff;
border-radius:5px;
margin-top:200px;
display:flex;
justify-content:center;
align-items:center;

`;


const CirculoFecha = styled.div`
width:50px;
height:50px;
background-color:#FF5403;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:20px;

`;

const CirculoRaza = styled.div`
width:50px;
height:50px;
background-color:#f99700;
border-radius:100%;
display:flex;
justify-content:center;
align-items:center;


`;

const Fecha = styled.h2`

position:relative;
bottom:40px;
right:20px;

`; 

const Raza = styled.h2`

position:relative;
bottom:40px;
right:20px;

`; 

const BotonEditar = styled.button`
padding:10px 20px;
border:none;
display:block;
margin-top:${props => props.eliminar && "10px"};
margin-left:auto;
margin-right:auto;
border-radius:5px;
cursor:pointer;
background-color:${props => props.eliminar ? "#CD1818" : "#2C272E"};
color:#fff;
transition:500ms ease;



&:hover{

    background-color:${props => props.eliminar ? "#A13333" : "#4d4b50"};
}

`;


export default ListarMascota;