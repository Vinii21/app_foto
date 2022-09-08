import React, {useEffect} from "react";
import styled from 'styled-components';
import { Fuentes, Colores } from "../CCS";
import Seccion from "./Seccion";
import FormularioAgendarSesion from "./FormularioAgendarSesion";
import Footer from './Footer';
import Albunes from "./Albunes";
import Logo from './Logo';
import { galeria } from "../assets/media_fichero";
import { animateScroll as scroll } from "react-scroll";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";

const PaginaSecciones = (props) => {

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
                                    galeria.map((item, index)=>{
                                        return(
                                            <NavLink key={index} className={(props.activeTab == item.id ? "active" : "")} onClick={()=>props.setActiveTab(item.id)}>
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
                <TabContent activeTab={props.activeTab} className="row pb-5 d-flex justify-content-center">
                    {
                        galeria[props.activeTab - 1].id === props.activeTab ?
                            <TabPane tabId={props.activeTab} className="col pb-5 d-flex justify-content-center">
                                <Seccion activeTab={props.activeTab} />
                            </TabPane>
                        :
                            <h1>Sin datos para mostrar</h1>
                    }
                </TabContent>
                <TabContent activeTab={props.activeTab} className="row justify-content-center">
                    {
                        galeria[props.activeTab - 1].id === props.activeTab ?
                            <TabPane tabId={props.activeTab} className="col d-flex flex-row flex-wrap justify-content-center">
                                <Albunes activeTab={props.activeTab} />
                            </TabPane>
                        :
                            <h1>Sin datos para mostrar</h1>
                    }
                </TabContent>
               <FormularioAgendarSesion activeTab={props.activeTab}/>
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

const ContenedorAlbum = styled.div`
   padding-top: 100px;
   padding-bottom: 50px;
`;
 
export default PaginaSecciones;