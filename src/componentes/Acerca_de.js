import React from "react";
import { AcercaDe } from "../assets/media_fichero";
import styled from "styled-components";
import Galeria from "./Galeria";

const Acerca_De = () => {
    return (
        <>
        <ContenedorAcercaDe>
            <ContenedorImg id="sobre">
                <img src={AcercaDe.logos} alt={AcercaDe.altLogo} width='100'/>
            </ContenedorImg>
            <ContenedorInfo>
                <h2>{AcercaDe.Nombre}</h2>
                <p>{AcercaDe.Text1}</p>
                <br/>
                <p>{AcercaDe.Text2}</p>
            </ContenedorInfo>
        </ContenedorAcercaDe>
        </>
    );
}

const ContenedorAcercaDe = styled.div`
    overflow: visible;
    position: relative;  
`;

const ContenedorImg = styled.div`
    width: 50%;
    position: absolute;
    left: 200px;
    top: 50px;
    z-index: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.421);

    img{
        vertical-align: top;
        width: 100%;   
    }
`;

const ContenedorInfo = styled.div`
    background-color: #fff;
    padding: 30px;
    width: 30%;
    position: relative;
    top: 180px;
    right: 220px;
    float: right;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.231); 
`;
 
export default Acerca_De;