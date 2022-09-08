import React from "react";
import { icon } from "../assets/media_fichero";
import styled from "styled-components";


const Contacto = () => {
    return (
        <ContenedorContacto id="contacto">
            <ContenedorRedes>
                <span><img src={icon[1].img} alt={icon[1].alt} /></span>
                <span><img src={icon[2].img} alt={icon[2].alt}/></span>
                <span><img src={icon[3].img} alt={icon[3].alt}/></span>
                <span></span>
            </ContenedorRedes>
            <ContenedorInfoContacto>
                <h2>Cuentanos tu proyecto</h2>
                    <div>
                        <img src={icon[4].img} alt={icon[4].alt} />
                        <p>
                            <strong>WhatsApp:</strong>
                            <br/>
                            +506 000000
                        </p>
                    </div>
                    <div>
                        <img src={icon[5].img} alt={icon[5].alt} />
                        <p>
                            <strong>Llamanos:</strong>
                            <br/>
                            +506 000000
                        </p>
                    </div>
                    <div>
                        <img src={icon[6].img} alt={icon[6].alt} />
                        <p>
                            <strong>Ponte en contacto:</strong>
                            <br/>
                            alda.foto@gmail.com
                        </p>
                    </div>
                    <div>
                        <img src={icon[7].img} alt={icon[7].alt} />
                        <p>
                            <strong>Dónde estamos:</strong>
                            <br/>
                            Estamos por ahí
                        </p>
                    </div>
            </ContenedorInfoContacto>
            <ContenedorMapa>
                <div>Aqui carga el mapa de ubicacion ...</div>
            </ContenedorMapa>
        </ContenedorContacto>
    );
}

const ContenedorContacto = styled.div`
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContenedorRedes = styled.div`
    height: 400px;
    width: 88px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid rgb(105, 104, 104);
    border-left: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);

    span{
        margin-bottom: 20px
    }

    img{
        width: 30px;
        cursor: pointer;
    }
`;

const ContenedorInfoContacto = styled.div`
    width: 50%;
    height: 540px;
    position: relative;
    top: -5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(105, 104, 104);

    h2{
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
        font-weight: 900;
        text-align: center;
        font-size: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(50, 50, 60);
        color: rgb(48, 46, 46);
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10%;
        margin-bottom: 20px;
        width: 65%;
    }

    img{
        width: 60px;
        margin-right: 20px;
    }
`;

const ContenedorMapa = styled.div`
    height: 400px;
    width: 600px;
    border-top: 2px solid rgb(105, 104, 104);
    border-right: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);
`;
 
export default Contacto;