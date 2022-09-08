import React from "react";
import { Label, Form, Span, Boton, H2, BotonDel } from "./StylesCss";
import FormularioNuevaCategoria from "./FormularioNuevaCategoria";
import { galeria } from "../assets/media_fichero";

const FormularioEditarServicios = () => {
    return (
        <>
            <H2>Panel de Edición de Sesiones</H2>
            {
                galeria.length > 0 ?
                galeria.map((item, index)=>{
                    return(
                            <Form margin key={index} className="col-4">
                                <Span className="input-group-text bi bi-pencil-square" style={{background: "url("+item.fondo+")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "noRepeat"}}>
                                    <input className="form-control" type="file"/>
                                </Span>
                                <Label className="form-label">Titulo</Label>
                                <input maxlength="12" className="form-control" type="text" value={item.titulo}/>
                                <Label className="form-label">Descripción</Label>
                                <textarea style={{height: "140px", resize:"none"}} maxlength="240" className="form-control" type="text" value={item.texto}/>
                                <Boton className="btn" type="submit">Actualizar</Boton>
                                <BotonDel btn className="btn mx-4" >Eliminar</BotonDel>
                            </Form>
                        
                    );
                })  
                :
                    <Span className="input-group-text">
                        <input disabled className="form-control form-control-lg" value="No hay categorias aún, crea para empezar a editar"/>
                    </Span>
            }
                
        </>
    );
}
 
export default FormularioEditarServicios;