import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import { ContenedorTarjeta, FondoTarjeta, ContenedorInfoTarjeta } from "../styles/model";

const Tarjetas = () => {
    
    const {DatosGaleria, setActiveTab} = useContext(ContextoBaseDatos)

    return (       
        <>
        {
        DatosGaleria.map((cuadro)=>{
            return (
                
                <ContenedorTarjeta  key={cuadro.id} style={{background:"url("+cuadro.fondo+")", 
                 backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <FondoTarjeta>
                        <ContenedorInfoTarjeta>
                            <h3 >{cuadro.titulo}</h3>
                            <p>
                                {cuadro.texto} 
                            </p>
                            <NavLink 
                                to="/sesiones"
                                className="enlace"
                                onClick={()=>setActiveTab(cuadro.id)}
                            >Detalles</NavLink>
                        </ContenedorInfoTarjeta>
                    </FondoTarjeta> 
                </ContenedorTarjeta>
            )
        })
        }
        </>
    );
};
 
export default Tarjetas;