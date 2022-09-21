import React from "react";
import { icon } from "../assets/media_fichero";
import {ContenedorContacto, ContenedorRedes, ContenedorInfoContacto, ContenedorMapa} from '../styles/model';


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
 
export default Contacto;