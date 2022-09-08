import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Navegacion = () => {

    return (
        <Nav id="nav">
            <motion.li animate={{y:100}} transition={{ duration: 1 }} ><Link activeClass="active" to="sobre" spy={true} smooth={true}>Acerca de</Link></motion.li> 
            <motion.li animate={{y:100}} transition={{ duration: 1.5 }} ><Link to="galeria" spy={true} smooth={true}>Galeria</Link></motion.li> 
            <motion.li animate={{y:100}} transition={{ duration: 2 }} ><Link to="contacto" spy={true} smooth={true}>Contacto</Link></motion.li> 
        </Nav>
    );
}

const Nav = styled(motion.nav)`
    margin-right: 50px;
    display: flex;

    li{
        list-style: none;
        color: #fff;
        a{
            text-decoration: none;
            color: #fff;
            padding: 0px 10px;
            font-family: 'Nanum Gothic', sans-serif;
            font-weight: bold;
            font-size: 18px;
            position: relative;
            top: -100px;  
        }
        a:hover{
            text-decoration: underline;  
        }
    }
    
`;
 
export default Navegacion;