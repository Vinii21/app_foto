import React from "react";
import Logo from "./Logo";
import Navegacion from "./Navegacion";
import { ContenedorMenu } from "../styles/model";

const Menu = () => {
    return (
       <ContenedorMenu className="contenedorMenu">
            <Logo />
            <Navegacion />
       </ContenedorMenu> 
    );
}
 
export default Menu;