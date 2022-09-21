import React from "react";
import Menu from "./Menu";
import {Headerr, ContendorHero} from '../styles/model'
import { HomePage } from "../assets/media_fichero";

const Header = () => {
    return (
    <Headerr>
       <Menu />
       <ContendorHero animate={{y:-130, opacity: 1}} transition={{ duration: 1.3 }}>
            <h1>{HomePage.Text}</h1>
            <span></span>
            <span className="row"></span>
       </ContendorHero> 
    </Headerr>
    );
}; 
 
export default Header;
