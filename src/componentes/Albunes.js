import React from "react";
import { galeria } from "../assets/media_fichero";
import styled from 'styled-components';

const Albunes = (props) => {
    return (
        <>
                {
                    galeria[props.activeTab - 1 ].albun.map((foto)=>{
                        return(
                            <div className="row d-flex flex-row flex-wrap">
                                <div className="col-4">
                                    <ContenedorImagen style={{background: "url("+foto.img+")", 
                                    backgroundSize: "cover", 
                                    backgroundPosition: "center", 
                                    backgroundRepeat: "no-repeat"}}> 
                                    </ContenedorImagen>
                                </div>
                            </div>
                                
                        )
                    })
                }
        </>
    );
}

const ContenedorImagen = styled.div`
    height: 250px;
    width: 400px;
    margin: 0px;
    filter: sepia(90%);
    transition: 1s ease all;

    &:hover{
        filter: sepia(0%); 
    }

`;

 
export default Albunes;