import React from "react";
import { useLocation } from "react-router-dom";

const Error404 = () => {
    
    return (
        <>
            <h1>No podemos encontrar lo que buscas.</h1>
            <span>Intestaste acceder a: {useLocation().pathname}, pero no existe.</span>
        </>
    );
}
 
export default Error404;