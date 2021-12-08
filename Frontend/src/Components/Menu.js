import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Logo from "../Img/logo.png";
import IconMenu from "../Img/menu.png";
import IconCerrar from "../Img/close.png";

function Menu(){


    function MostrarMenu(){

        document.getElementsByClassName("menu-mobil")[0].style.top ="0px";
    }

    function OcultarMenu(){

        document.getElementsByClassName("menu-mobil")[0].style.top ="-800px";
    }


    return(

        <Nav>

            <LogoImagen src={Logo} alt="logo notas"/>

            <NavLink to="/">Mascotas</NavLink>
            <NavLink to="/register">Registrar mascota</NavLink>
            <IconoMenu className="icono-menu" src={IconMenu} alt="icono-menu" onClick={MostrarMenu}/>

            <MenuMobil className="menu-mobil" onClick={OcultarMenu}>

                <IconClose src={IconCerrar}  alt="icono-close"onClick={OcultarMenu}/>
                <NavLink className="item-menu" to="/">Mascotas</NavLink>
                <NavLink className="item-menu" to="/register">Registrar mascota</NavLink>

            </MenuMobil>
           
        </Nav>

    );

}


const Nav = styled.nav`

padding:25px;
font-size:18px;
text-align:center;
width:100%;

@media (max-width:700px){

      > a{
        color:#fff !important;
    }

    .icono-menu{

        display:block;
    }

}



a.active{

    font-weight:bold;
    color:#f99700;
}


a{
    margin:0px 15px 0px 15px;
    color:#000;
    font-weight:bold;
}

`;

const LogoImagen = styled.img`

width:50px;
height:50px;
cursor:pointer;
position:absolute;
left:10px;
top:15px;

`;

const IconoMenu = styled.img`

width:35px;
height:35px;
position:absolute;
cursor:pointer;
right:10px;
top:20px;
display:none;

`;


const MenuMobil = styled.div`

width:100%;
height:800px;
background-color:#f99700;
position:absolute;
left:0;
top:-800px;
z-index:2;
transition:500ms ease;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;


a.active{

   
    color:#fff !important;
    border: 3px solid #fff;
    padding:10px;
    
}



.item-menu{

    font-size:40px;
    display:blocK;
    margin-top:40px;
   
}

`;

const IconClose = styled.img`

width:50px;
height:50px;
position:absolute;
cursor:pointer;
right:10px;
top:20px;

`;




export default Menu;


