import React, {useContext} from "react";
import styled from "styled-components";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import { Form } from "./StylesCss";

const FormularioAlbun = () => {
    const onSubmit = (e) => {
        e.preventDefault()
        document.getElementById("file").click();
    }

    return (
        <Form onSubmit={onSubmit}>
            <input style={{display: "none"}} id="file" className="form-control" type="file" multiple/>
            <button type="submit" className="btn btn-primary">Subir Foto</button>
        </Form>
    );
}
 
export default FormularioAlbun;