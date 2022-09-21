import React from "react";
import Tarjetas from "./Tarjetas";
import { ContenedorGaleria, ContenedorTitulo, Galerias } from "../styles/model";

const Galeria = ({setActiveTab, DBgaleria, cambiar}) => {
    return (
        <ContenedorGaleria>
            <ContenedorTitulo>
                <h2 id="galeria">Galeria</h2>
            </ContenedorTitulo>
            <Galerias>
                <Tarjetas setActiveTab={setActiveTab} DBgaleria={DBgaleria} cambiar={cambiar}/>
            </Galerias>
        </ContenedorGaleria>
    );
}
 
export default Galeria;
