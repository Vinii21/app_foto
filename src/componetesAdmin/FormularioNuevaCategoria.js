import React from "react";
import { FormEditar } from "./StylesCss";

const FormularioNuevaCategoria = () => {
    return (
        <>
            <FormEditar className="col-4">
                    <span className="bi bi-plus-circle">
                    </span>
                    <p>Click para crear una <br/>nueva categoria de sesión</p>
                </FormEditar>
        </>
    );
}
 
export default FormularioNuevaCategoria;