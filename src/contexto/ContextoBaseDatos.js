import React, {useState, useEffect} from "react";
import { galeria } from "../assets/media_fichero";

const ContextoBaseDatos = React.createContext();

const ProveedorBaseDatos = ({children}) => {

    const [ DatosGaleria, modificarDBgaleria ] = useState(galeria);
    const [activeTab, setActiveTab] = useState("1");
    const [activeEdit, setActiveEdit] = useState(1);
    const [todos, setTodos] = useState(null);

    useEffect(()=>{
        const fetchAPI = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/ability/3');
            const responseJSON = await response.json();
            setTodos(responseJSON);
        }
        fetchAPI()
    },[])

    return (
        <ContextoBaseDatos.Provider value={{DatosGaleria, activeTab, setActiveTab, activeEdit, todos}}>
            {children}
        </ContextoBaseDatos.Provider>
    );
}
 
export {ProveedorBaseDatos, ContextoBaseDatos};