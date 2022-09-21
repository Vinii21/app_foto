import React from "react";
import Logo from "./Logo";
import {EtiquetaFooter, ContenedorFooter} from '../styles/model'

const Footer = () => {
    return (
        <EtiquetaFooter>
            <ContenedorFooter>
                <Logo />
            </ContenedorFooter>
        </EtiquetaFooter>
    );
}
 
export default Footer;