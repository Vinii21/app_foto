import React, {useEffect, useContext} from "react";
import Seccion from "./Seccion";
import FormularioAgendarSesion from "./FormularioAgendarSesion";
import Footer from './Footer';
import Albunes from "./Albunes";
import Logo from './Logo';
import { animateScroll as scroll } from "react-scroll";
import { TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import {HeaderSection, ContenedorNavSection, MainSection} from '../styles/sectionModel'

const PaginaSecciones = () => {

    const {DatosGaleria, activeTab, setActiveTab} = useContext(ContextoBaseDatos);

    useEffect(()=>{
        scroll.scrollToTop();
    }, [])

    const navbarBrand = 'navbar-brand';

    return (
        <>
           <HeaderSection className="container-fluid pt-3">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <Logo navbarBrand={navbarBrand}/>
                    </div>
                    <ContenedorNavSection className="col-6">
                        <Nav style={{border:"none", borderRadius: "none"}} tabs className="pt-3">
                            <NavItem className="d-flex">
                                {
                                    DatosGaleria.map((item, index)=>{
                                        return(
                                            <NavLink key={index} className={(activeTab == item.id ? "active" : "")} onClick={()=>setActiveTab(item.id)}>
                                                {item.titulo}
                                            </NavLink>
                                        );
                                    })
                                }
                            </NavItem>
                        </Nav>
                    </ContenedorNavSection>    
                </div>
           </HeaderSection>
           <MainSection className="container-fluid d-flex flex-column justify-content-center">
                <TabContent activeTab={activeTab} className="row pb-5 d-flex justify-content-center">
                    {
                        DatosGaleria[activeTab - 1].id === activeTab ?
                            <TabPane tabId={activeTab} className="col pb-5 d-flex justify-content-center">
                                <Seccion/>
                            </TabPane>
                        :
                            <TabPane tabId={activeTab} className="col pb-5 d-flex justify-content-center">
                                <Seccion/>
                            </TabPane>
                    }
                </TabContent>
                <TabContent activeTab={activeTab} className="row justify-content-center">
                    {
                        DatosGaleria[activeTab - 1].id === activeTab ?
                            <TabPane tabId={activeTab} className="col d-flex flex-row flex-wrap justify-content-center">
                                <Albunes/>
                            </TabPane>
                        :
                            <h1>Sin datos para mostrar</h1>
                    }
                </TabContent>
               <FormularioAgendarSesion/>
           </MainSection>
               <Footer />
        </>
    );
}
 
export default PaginaSecciones;