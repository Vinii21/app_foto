import React, {useRef} from "react";
import { AcercaDe } from "../assets/media_fichero";
import {useTransform, useScroll} from "framer-motion";
import {ContenedorAcercaDe, ContenedorImg, ContenedorInfo} from '../styles/model'



function Acerca_De() {
    
    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const windowwidth = window.innerWidth;
    const y = useParallax(scrollYProgress, 300);

    return (
       <ContenedorAcercaDe id="sobre" ref={ref}>
            <ContenedorImg >
                <img src={AcercaDe.logos} alt={AcercaDe.altLogo} width='100'/>
            </ContenedorImg>
            {
                windowwidth > 900 ?
                <ContenedorInfo style={{y}}>
                    <h2>{AcercaDe.Nombre}</h2>
                    <p>{AcercaDe.Text1}</p>
                    <p>{AcercaDe.Text2}</p>
                </ContenedorInfo>
                :
                <ContenedorInfo>
                <h2>{AcercaDe.Nombre}</h2>
                <p>{AcercaDe.Text1}</p>
                <p>{AcercaDe.Text2}</p>
                </ContenedorInfo>
            }
       </ContenedorAcercaDe> 
    );
}
 
export default Acerca_De;