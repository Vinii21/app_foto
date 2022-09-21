import React from "react";
import { HomePage } from "../assets/media_fichero";
import { NavLink } from "react-router-dom";
import { ContenedorLogo } from "../styles/model";

const Logo = (props) => {
    return (
        <ContenedorLogo>
            <NavLink to="/" className={props.navbarBrand}>
                <img src={HomePage.logos} alt={HomePage.altLogo} width='200'/>
                <span>{HomePage.Nombre}</span>
            </NavLink>
        </ContenedorLogo>
    );
}
 
export default Logo;