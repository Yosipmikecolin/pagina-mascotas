import { createContext, useState } from "react";

const Contexto = createContext();

function ProvedorData({children}){

    const [datos,SetDatos] = useState({});
    

    return(

        <Contexto.Provider value={{datos,SetDatos}}>
            {children}
        </Contexto.Provider>
        
    );



}

export  {ProvedorData,Contexto};