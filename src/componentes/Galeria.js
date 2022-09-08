import React from "react";
import styled from "styled-components";
import Tarjetas from "./Tarjetas";

const Galeria = (props) => {
    return (
        <ContenedorGaleria>
            <ContenedorTitulo>
                <h2 id="galeria">Galeria</h2>
            </ContenedorTitulo>
            <Galerias>
                <Tarjetas setActiveTab={props.setActiveTab}/>
            </Galerias>
        </ContenedorGaleria>
    );
}

const ContenedorGaleria = styled.div`
    padding-top: 670px;
`;

const ContenedorTitulo = styled.div`
    position: relative;
    top: 70px;
    text-align: center;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    width: 100vw;

    h2{
        font-size: 80px;
        font-family: 'Tangerine', sans-serif;
        
    }
`;

const Galerias = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;
 
export default Galeria;
