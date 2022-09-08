import React from "react";
import Logo from "./Logo";
import Navegacion from "./Navegacion";
import styled from "styled-components";

const Menu = () => {
    return (
       <ContenedorMenu>
            <Logo />
            <Navegacion />
       </ContenedorMenu> 
    );
}

const ContenedorMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    borrder: 2px solid #fff;
`;
 
export default Menu;