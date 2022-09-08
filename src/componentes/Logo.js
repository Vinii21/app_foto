import React from "react";
import { icon, HomePage } from "../assets/media_fichero";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = (props) => {
    return (
        <ContenedorLogo className={props.classLogo}>
            <NavLink to="/" className={props.navbarBrand}>
                <img src={HomePage.logos} alt={HomePage.altLogo} width='200'/>
                <span>{HomePage.Nombre}</span>
            </NavLink>
        </ContenedorLogo>
    );
}

const ContenedorLogo = styled.div`
    height: 100%;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff; 
    }
    img{
        width: 150px;
        margin: 40px 0px 0px 50px; 
    }
    span{
        font-family: 'Tangerine', sans-serif;
        font-weight: 600;
        font-size: 4rem;
        padding-top: 40px;  
    }
`;
 
export default Logo;