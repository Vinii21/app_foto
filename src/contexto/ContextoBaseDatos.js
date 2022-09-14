import React, {useState} from "react";
import { galeria } from "../assets/media_fichero";

const ContextoBaseDatos = React.createContext();

const ProveedorBaseDatos = ({children}) => {
    
    const [ DatosGaleria, modificarDBgaleria ] = useState(galeria);
    const [activeTab, setActiveTab] = useState("1");
    const [activeEdit, setActiveEdit] = useState(1);

    const actualizarNombre = (nuevoTitulo) => {
        modificarDBgaleria(
            [
               ...DatosGaleria,
               DatosGaleria.titulo = nuevoTitulo
            ]
        )
    }

    const sumar = () => {
        setActiveEdit(activeEdit + 1)
        for(let i = 1; i > DatosGaleria.length; i++){
            if(i > DatosGaleria.length){
                i = 1;
                setActiveEdit(i)
            }
            setActiveEdit(i)
        }
    }

    const prueba = (ide) => {
        setActiveEdit(ide)
    }

    return (
        <ContextoBaseDatos.Provider value={{DatosGaleria, actualizarNombre, activeTab, setActiveTab, activeEdit, sumar, prueba}}>
            {children}
        </ContextoBaseDatos.Provider>
    );
}
 
export {ProveedorBaseDatos, ContextoBaseDatos};