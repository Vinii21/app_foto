import React, {useEffect, useContext} from "react";
import styled from 'styled-components';
import { Fuentes, Colores } from "../CCS";
import Seccion from "./Seccion";
import FormularioAgendarSesion from "./FormularioAgendarSesion";
import Footer from './Footer';
import Albunes from "./Albunes";
import Logo from './Logo';
import { animateScroll as scroll } from "react-scroll";
import { TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const PaginaSecciones = () => {

    const {DatosGaleria, activeTab, setActiveTab} = useContext(ContextoBaseDatos);

    useEffect(()=>{
        scroll.scrollToTop();
    }, [])

    const logo = 'classLogo';
    const navbarBrand = 'navbar-brand';

    return (
        <>
           <Header className="container-fluid pt-3">
                <div className="row justify-content-around">
                    <div className="col-3">
                        <Logo classLogo={logo} navbarBrand={navbarBrand}/>
                    </div>
                    <ContenedorNav className="col-6">
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
                    </ContenedorNav>    
                </div>
           </Header>
           <Main className="container-fluid d-flex flex-column justify-content-center">
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
           </Main>
               <Footer />
        </>
    );
}

const Header = styled.header`
    background: ${Colores.DarkCool};
    padding-bottom: 20px;
    position: fixed;
    z-index: 100;

   .classLogo{
    height: auto;
    margin-right: 10px;

    img{
       width: 100px;
       margin: 0;
   }
   span{
       font-size: 3.5rem;
       padding-top: 0;
   }

   }
`;

const ContenedorNav = styled.div`

   ul{

    li{
        

        a{
         color: ${Colores.white};
     
         &:hover{
             color: ${Colores.white};
         }
        }
        
    }
   }

`

const Main = styled.main`
    padding-top: 12%;
    position: relative;
    height: auto;
    z-index: 1;
    font-family: ${Fuentes.NamunGothic};
`;
 
export default PaginaSecciones;