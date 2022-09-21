import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Nav } from "../styles/model";

const Navegacion = () => {

    return (
        <Nav id="nav">
            <motion.li animate={{y:100}} transition={{ duration: 1 }} ><Link activeClass="active" to="sobre" spy={true} smooth={true}>Acerca de</Link></motion.li> 
            <motion.li animate={{y:100}} transition={{ duration: 1.5 }} ><Link to="galeria" spy={true} smooth={true}>Galeria</Link></motion.li> 
            <motion.li animate={{y:100}} transition={{ duration: 2 }} ><Link to="contacto" spy={true} smooth={true}>Contacto</Link></motion.li> 
        </Nav>
    );
}
 
export default Navegacion;